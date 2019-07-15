import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          <h3>And add new attributes to our app.js file</h3>
          <br />          
        </p>
        <img id="Image-in-the-index" src="https://reactjsexample.com/content/images/2019/07/watermark-enhancer.jpg" alt="Creating code" className="App-header"></img>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React from the right way
        </a>
      </header>
    </div>
  );
}

export default App;
