import React, {Component} from 'react';
import Contacts from './components/contacts';

class App extends Component {
    render() {
        let results = this.state.contacts.results;
        let contactsItems = [];

        for(var result in results){
          contactsItems.push(<Contacts key={result.toString()} contacts={results[result]} />);
        }
        return (
            <div>
              <h1>Marvel Characters</h1>
              {contactsItems}
            </div>
        )
    }

    state = {
        contacts: []
    };

    componentDidMount() {
        fetch('https://gateway.marvel.com/v1/public/comics?ts=1&apikey=f973e191e288fda12db9c1c66ef360ed&hash=306c69dd41a3d073cf332c6f8df67a18')
            .then(res => res.json())
            .then((data) => {
                this.setState({ contacts: data.data })
            })
            .catch(console.log)
    }
}

export default App;
