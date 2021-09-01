import React from 'react';




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