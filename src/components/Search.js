import React, {useEffect, useState} from 'react';
import {dogData} from "../shared/DogData"
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
    
    //tt.setProductInfo('<your-product-name>', '<your-product-version>');

    useEffect( () => { 
        const createdMap = tt.map({
            key: APIKEY,
            container: "mapContainer", 
            center: Dallas,
            zoom: 14
        });
        setMap(createdMap);
    }, [] )
    

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
            
            //result.results.length in the for loop for up to 10 nearest options
            for (let x = 0; x < result.results.length; x++){
                //creates custom marker on map
                // const element = document.createElement('div');
                // element.id= "marker";
                // const marker = new tt.Marker({element:element}).setLngLat(result.results[x].position).addTo(map);
                const marker = new tt.Marker().setLngLat(result.results[x].position).addTo(map);
                const randomRating = ((Math.random() * 2) + 3).toFixed(1);
                const newRating = document.createElement("span");
                newRating.id = "rating";
                newRating.innerHTML=randomRating;
                
                //creates popup on map
                // var popupOffsets = {
                //     top: [0, 0],
                //     bottom: [0, -70],
                //     'bottom-right': [0, -70],
                //     'bottom-left': [0, -70],
                //     left: [25, -35],
                //     right: [-25, -35]
                //   }
                  
                //   var popup = new tt.Popup({offset: popupOffsets}).setHTML("your company name, your company address");
                //   marker.setPopup(popup).togglePopup();
                
                

                //creates card for each object
                const newCard = document.createElement("div");
                newCard.classList.add("card");
                newCard.id = `card${x}`
                //creates + appends card header for each object
                const newCardHeader = document.createElement("div");
                newCardHeader.classList.add("card-header");
                newCardHeader.innerHTML=`<b style='color:white'>${result.results[x].poi.name}</b>`;
                newCardHeader.append(newRating)
                newCard.append(newCardHeader)
                

                //creates + appends card body for each object
                const newCardBody = document.createElement("div");
                
                newCardBody.classList.add("card-body");

                let phoneNumber = "1-715-444-3324"
                function phoneNum(phone){
                    if (phone === undefined){
                        console.log(`num is ${phoneNumber}`)
                        return phoneNumber = phoneNumber
                    } else {
                        console.log(`phone is` + phone)
                        return phoneNumber = phone
                    }
                }

                newCardBody.innerHTML=`
                Allows Dog: ${dogData[x].allowsDog} | Seating: ${dogData[x].seating} | Dog Snacks: ${dogData[x].feedDog}
                <hr>
                ${phoneNum(result.results[x].poi.phone)}
                <br>
                ${result.results[x].address.freeformAddress}
                `;
                newCard.append(newCardBody);
                

                // newCard.innerHTML = `${x + 1}: ${result.results[x].poi.name}`
                document.getElementById("resultsText").append(newCard);
                
                
                
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
                            <input type="text" id="query" value={searchName} onChange={handleInputChange} placeholder='Ex: "Restaurants"'/>
                            <button onClick={search} id='searchBtn' autofill="off" autocomplete="off">SEARCH</button>
                            <div id="mapContainer" className="mapContainer"></div>
                        </div>
                        <div className="col-6" id="resultsBox">
                            <div id="resultsText">
                                <b className="d-flex">Results</b>
                                    {/* results go here */}
                            </div>
                        </div>
                    </div>    
                </div>           
            </div>
        )
    }    



export default Search;