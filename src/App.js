import React, {Component} from 'react';
import Characters from './components/characters';

class App extends Component {
    render() {
        let results = this.state.characters.results;
        let charactersItems = [];

        for(var result in results){
          charactersItems.push(<Characters key={result.toString()} characters={results[result]} />);
        }
        return (
            <div>
              <h1>Marvel Characters</h1>
              {charactersItems}
            </div>
        )
    }

    state = {
      characters: []
    };

    componentDidMount() {
        fetch('https://gateway.marvel.com/v1/public/comics?ts=1&apikey=f973e191e288fda12db9c1c66ef360ed&hash=306c69dd41a3d073cf332c6f8df67a18')
            .then(res => res.json())
            .then((data) => {
                this.setState({ characters: data.data })
            })
            .catch(console.log)
    }
}

export default App;
