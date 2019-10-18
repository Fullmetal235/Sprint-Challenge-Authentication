import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Register from './components/register.js'
import Login from './components/login.js'
import Jokes from './components/jokes.js'

import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
    {/* <Register /> */}
    <Route exact path='/register' component={Register}/>
    <Route exact path='/login' component={Login} />
    <Route exact path='/jokes' component={Jokes} />
    </div>
    </Router>
  );
}

export default App;