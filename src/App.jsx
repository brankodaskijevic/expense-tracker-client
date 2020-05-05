import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Provider } from 'react-redux'
import store from './store/store';
import './App.css';
import Navbar from './components/layout/navbar/navbar';
import Landing from './components/landing/landing';

function App() {
  return (
      <Router>
        <Fragment>
          <Navbar />
          <Route exact path='/' component={ Landing } />
        </Fragment>
      </Router>
  );
}

export default App;

{/* <header className="App-header">
  <Counter />
  <p>
    Edit <code>src/App.js</code> and save to reload.
  </p>
  <span>
    <span>Learn </span>
    <a
      className="App-link"
      href="https://reactjs.org/"
      target="_blank"
      rel="noopener noreferrer"
    >
      React
    </a>
    <span>, </span>
    <a
      className="App-link"
      href="https://redux.js.org/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Redux
    </a>
    <span>, </span>
    <a
      className="App-link"
      href="https://redux-toolkit.js.org/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Redux Toolkit
    </a>
    ,<span> and </span>
    <a
      className="App-link"
      href="https://react-redux.js.org/"
      target="_blank"
      rel="noopener noreferrer"
    >
      React Redux
    </a>
  </span>
</header>
<Button variant="contained" color="primary">
  Test button
</Button> */}