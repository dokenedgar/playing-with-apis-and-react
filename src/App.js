import React, { Component} from 'react';
import NavBar from './components/Navbar';
import Home from './components/Home'

class App extends Component {
  render() {
    return(
      <div>
        <NavBar />
        <Home />
      </div>
    )
  }
}

export default App;
