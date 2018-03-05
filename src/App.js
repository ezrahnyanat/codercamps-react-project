import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Search from './components/Search'

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Header />
        <div>
          <Route path='/home' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/search' component={Search} />
        </div>
      </div>
      </Router>
    );
  }
}

export default App




