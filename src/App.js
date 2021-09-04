import React, {Component, useEffect} from 'react';
import Landing from './components/LandingComponent';
import Header from './components/Header';
import Search from './components/Search'
import './App.css';
import RenderMap from './components/Map';

function App(){
  
  return(
    <div>
      <Header/>
      <Landing/>
      <Search/>
      {/* <div id="mapContainer"></div>
      {useEffect(() =>
      <RenderMap/>
      )} */}
      
      
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
