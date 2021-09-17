import React, {Component, useEffect} from 'react';
import Landing from './components/LandingComponent';
import Header from './components/Header';
import Search from './components/Search';
import Contact from './components/Contact';
import './App.css';


function App(){
  
  return(
    <div>
      <Header/>
      <Landing/>
      <Search/>
      <Contact/>
    </div>
  )
}

export default App;
