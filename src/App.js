import React, { Component} from 'react';
import NavBar from './components/Navbar';
import Home from './components/Home';
import Advice from './components/Advice'
import { BrowserRouter, Route } from 'react-router-dom';
import TronaldDump from './components/TronaldDump';

class App extends Component {
  render() {
    return(
      <BrowserRouter>
      <div>
        <NavBar />
        <Route exact path='/' component = { Home } />
        <Route path='/advice' component = { Advice } />
        <Route path='/tronald' component = { TronaldDump } />
      </div>
      </BrowserRouter>
      
    )
  }
}

export default App;
