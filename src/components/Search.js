import React, {useEffect, useState} from 'react';
// import {RESULTS} from '../shared/results';
// import ShowResults from './SearchComponent';
//https://developer.tomtom.com/blog/build-different/adding-tomtom-maps-modern-react-app
import '@tomtom-international/web-sdk-maps/dist/maps.css';
import tt from '@tomtom-international/web-sdk-maps';
import {services} from '@tomtom-international/web-sdk-services';



function Search(props) {
    
    //array destructering
    const [searchName, setSearchName] = useState("");
    const [map, setMap] = useState(null);

    

    var APIKEY = "OTesSbZQ5Tvq0TUHV8gKbv2ecpFPAaz2";
    var Dallas = [-96.79621, 32.77798];
    
    tt.setProductInfo('<your-product-name>', '<your-product-version>');

    useEffect( () => { 
        const createdMap = tt.map({
            key: APIKEY,
            container: "mapContainer", 
            center: Dallas,
            zoom: 14
        });
        setMap(createdMap);
    }, [] )
    
    // var map = tt.map({
    //         key: APIKEY,
    //         container: "mapContainer", 
    //         center: Dallas,
    //         zoom: 14
    //     });

    var moveMap = function(lnglat){
        map.flyTo({
            center: lnglat,
            zoom: 14
        })
    }

    var handleResults = function(result){
        console.log(result);
        console.log(result.results);
        console.log(result.results.length);
        result.results.map(r => console.log(r.poi.name + r.poi.phone + r.poi.url))
        if (result){
            for (let x = 0; x < result.results.length; x++){
                var marker = new tt.Marker()
                .setLngLat(result.results[x].position)
                .addTo(map);
                var newDiv = document.createElement("div");
                newDiv.innerHTML = `${x + 1}: ${result.results[x].poi.name}`
                document.body.append(newDiv);
            } 
        }
    }
    
    var search = function(){
        
        services.fuzzySearch({
            key: APIKEY,
            query: searchName,
            boundingBox: map.getBounds()
        }).then(handleResults)
    }

        const handleInputChange = (event) => {
            setSearchName(event.target.value)
        }    

        return(
            <div id="section2" >
                <div className="container">
                    <div className="row text-center" id="searchDiv">
                        <div className="col-6">
                        <input type="text" id="query" value={searchName} onChange={handleInputChange}/>
                            <button onClick={search}>SEARCH</button>
                            <div id="mapContainer" className="mapContainer"></div>
                        </div>
                        <div className="col-6" id="resultsBox">
                            <div id="resultsText">
                                <b className="d-flex">Results</b>
                                {/* <ShowResults/> */}
                            </div>
                        </div>
                    </div>    
                </div>           
            </div>
        )
    }    


// function RenderMap(props){

//     var APIKEY = "OTesSbZQ5Tvq0TUHV8gKbv2ecpFPAaz2";
//     var Dallas = [-96.79621, 32.77798];

//     tt.setProductInfo('<your-product-name>', '<your-product-version>');

//     useEffect( () => { 
//         var map = tt.map({
//             key: APIKEY,
//             container: "mapContainer", 
//             center: Dallas,
//             zoom: 14
//         });
//     }, [] )

    // var map = tt.map({
    //         key: APIKEY,
    //         container: "mapContainer", 
    //         center: Dallas,
    //         zoom: 14
    //     });

    // var moveMap = function(lnglat){
    //     map.flyTo({
    //         center: lnglat,
    //         zoom: 14
    //     })
    // }

    // var handleResults = function(result){
    //     console.log(result);
    //     console.log(result.results);
    //     console.log(result.results.length);
    //     result.results.map(r => console.log(r.poi.name + r.poi.phone + r.poi.url))
    //     if (result){
    //         for (let x = 0; x < result.results.length; x++){
    //             var marker = new tt.Marker()
    //             .setLngLat(result.results[x].position)
    //             .addTo(map);
    //             var newDiv = document.createElement("div");
    //             newDiv.innerHTML = `${x + 1}: ${result.results[x].poi.name}`
    //             document.body.append(newDiv);
    //         } 
    //     }
    // }

    // var search = function(){
    //     tt.services.fuzzySearch({
    //         key: APIKEY,
    //         query: document.getElementById("query").value,
    //         boundingBox: map.getBounds()
    //     }).then(handleResults)
    // }

//     return (
//         <div>
            
//         </div>
//     )
// }


export default Search;