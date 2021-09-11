import React, {Component, useEffect} from 'react';
import Landing from './components/LandingComponent';
import Header from './components/Header';
import Search from './components/Search'
import './App.css';


function App(){
  
  return(
    <div>
      <Header/>
      <Landing/>
      <Search/>
  </div>
  )
}

// class App extends Component {
//   render(){
   
//     return(
//       <div>
//         <Header/>
//         <Landing/>
//         <Search/>
//         <RenderMap/>
//     </div>
//     )
//   }
// }

export default App;
