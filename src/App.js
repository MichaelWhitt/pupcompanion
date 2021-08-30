import React, {Component} from 'react';
import Landing from './components/LandingComponent';
import Header from './components/Header';
import Search from './components/Search'
import './App.css';

class App extends Component {
  render(){
    return(
      <div>
        <Header/>
        <Landing/>
        <Search/>
    </div>
    )
  }
}

export default App;
