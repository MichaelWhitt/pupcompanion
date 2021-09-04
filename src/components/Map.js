//https://developer.tomtom.com/blog/build-different/adding-tomtom-maps-modern-react-app
import React from 'react';
import '@tomtom-international/web-sdk-maps/dist/maps.css'
import tt from '@tomtom-international/web-sdk-maps';




function RenderMap(props){
    return (
        <div>
            <input type="text" id="query" value=""/>
            <button>SEARCH</button>
            <div id="mapContainer" class="mapContainer"></div>
        </div>
    )
}
export default RenderMap;