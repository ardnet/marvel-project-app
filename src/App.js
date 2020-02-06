import React, {Component} from 'react';
import ListCharacters from './components/listcharacters';
import SearchCharacters from './components/searchcharacters';

class App extends Component {
    state = {
      characters: []
    };

    componentDidMount() {
      fetch('https://gateway.marvel.com/v1/public/characters?ts=1&apikey=f973e191e288fda12db9c1c66ef360ed&hash=306c69dd41a3d073cf332c6f8df67a18')
        .then(res => res.json())
        .then((data) => {
            this.setState({ characters: data.data })
        })
        .catch(console.log)
    }

    render() {
        let results = this.state.characters.results;
        let charactersItems = [];

        for(var result in results){
          charactersItems.push(<ListCharacters key={results[result]['id']} characters={results[result]} />);
        }
        return (
            <div>
              <h1>Marvel Characters</h1>
              <div className="search-characters-wrapper">
                <SearchCharacters />
              </div>
              <div className="list-characters-wrapper">
                {charactersItems}
                </div>
            </div>
        )
    }
}

export default App;
