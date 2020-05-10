import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux'
import store from './store/store';
import './App.css';
import Navbar from './components/layout/navbar/navbar';
import Landing from './components/landing/landing';
import Login from './components/auth/login/login'
import Register from './components/auth/register/register'
import Main from '../src/components/main/main'
import CreatePost from './components/createPost/createPost';
import Profile from './components/profile/profile'
import PrivateRoute from './components/routing/PrivateRoutes';
import CreateTransaction from './components/createTransaction/createTransaction';
import Settings from './components/settings/settings';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Route exact path='/' component={ Landing } />
          <Switch>
            <Route exact path='/register' component={ Register } />
            <Route exact path='/login' component={ Login } />
            <PrivateRoute exact path='/main' component={ Main } />
            <PrivateRoute exact path='/create-post' component={ CreatePost } />
            <PrivateRoute exact path="/profile" component={ Profile } />
            <PrivateRoute exact path="/add-transaction" component={ CreateTransaction } />
            <PrivateRoute exact path="/settings" component={ Settings } />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
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