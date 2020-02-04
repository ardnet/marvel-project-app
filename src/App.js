import React from 'react';
import logo from './logo.svg';
import './App.css';

function test() {
  console.log('test hahahh');

  fetch('http://gateway.marvel.com/v1/public/comics?ts=1&apikey=f973e191e288fda12db9c1c66ef360ed&hash=306c69dd41a3d073cf332c6f8df67a18')
  .then((response) => {
    return response.json();
  })
  .then((myJson) => {
    console.log(myJson);
  });
  
  // https://gateway.marvel.com:443/v1/public/characters?apikey=306c69dd41a3d073cf332c6f8df67a18
  // https://gateway.marvel.com:443/v1/public/characters?apikey=f973e191e288fda12db9c1c66ef360ed
  // http://gateway.marvel.com/v1/public/comics?ts=1&apikey=f973e191e288fda12db9c1c66ef360ed&hash=306c69dd41a3d073cf332c6f8df67a18


}

test();

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
