import React, {useState, useEffect} from 'react';
import ListCharacters from './components/listcharacters';
import SearchCharacters from './components/searchcharacters';
import { throttle } from 'lodash';

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times.`;
  });

  return(
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click Me!
      </button>
    </div>
  );
}


class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleSearchCharChange = this.handleSearchCharChange.bind(this);
    this.state = {
      characters: [],
      searchcharacters: '',
    };
    this.handleInputThrottled = throttle(this.handleSearchCharChange, 100);
  }

  handleEndpoint(searchtext) {
    let searchParam = '';
    if (searchtext !== '') {
      searchParam = '&nameStartsWith=' + searchtext;
    }

    let endpoint = 'https://gateway.marvel.com/v1/public/characters?ts=1&apikey=f973e191e288fda12db9c1c66ef360ed&hash=306c69dd41a3d073cf332c6f8df67a18' + searchParam;

    fetch(endpoint)
      .then(res => res.json())
      .then((data) => {
          this.setState({ characters: data.data })
      })
      .catch(console.log)
  }

  handleSearchCharChange(searchtext) {
    this.setState({
      searchcharacters: searchtext,
    });

    this.handleEndpoint(searchtext);
  }

  componentDidMount() {
    let searchcharacters = this.state.searchcharacters;
    this.handleEndpoint(searchcharacters);
  }

  render() {
    let results = this.state.characters.results;
    let charactersItems = [];
    const searchtext = this.state.searchcharacters;

    for(var result in results){
      charactersItems.push(<ListCharacters key={results[result]['id']} characters={results[result]} />);
    }

    return (
      <div>
        <h1>Marvel Characters</h1>
        <div className="search-characters-wrapper">
          <SearchCharacters searchtext={searchtext} onSearchCharChange={this.handleInputThrottled} />
        </div>
        <div className="list-characters-wrapper">
          {charactersItems}
          </div>
      </div>
    )
  }
}

export default App;
