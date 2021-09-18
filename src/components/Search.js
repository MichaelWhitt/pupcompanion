import React, { useEffect, useState } from 'react';
import '@tomtom-international/web-sdk-maps/dist/maps.css';
import tt from '@tomtom-international/web-sdk-maps';
import { services } from '@tomtom-international/web-sdk-services';
import { Row, Col, Container, ListGroup, Card } from 'react-bootstrap';
import ResultItem from './RenderResults';


function SearchPage() {

    //array destructering
    const [searchName, setSearchName] = useState("");
    const [searchData, setSearchData] = useState([]);
    const [map, setMap] = useState(null);

    const APIKEY = "OTesSbZQ5Tvq0TUHV8gKbv2ecpFPAaz2";
    const Dallas = [-96.79621, 32.77798];


    //tt.setProductInfo('<your-product-name>', '<your-product-version>');

    useEffect(() => {
        const createdMap = tt.map({
            key: APIKEY,
            container: "mapContainer",
            center: Dallas,
            zoom: 14
        });
        setMap(createdMap);
    }, [])

    

    const handleResults = function (result) {
        
        if (result) {
            for (let x = 0; x < result.results.length; x++) {
                const marker = new tt.Marker().setLngLat(result.results[x].position).addTo(map);
                const currData = result.results[x];
                setSearchData(setSearchData => [...setSearchData, currData])
            }
        }
    }

    const search = function () {
        services.fuzzySearch({
            key: APIKEY,
            query: searchName,
            boundingBox: map.getBounds()
        })
            .then(handleResults)
    }

    const handleInputChange = (event) => {
        setSearchName(event.target.value)
    }
    return (
        <Container fluid id="section2">
            <Row className="searchRow" id="searchDiv">
                <Col md className="px-0">
                    <div className="searchFieldBtn">
                        <input type="text" id="query" value={searchName} onChange={handleInputChange} placeholder='Ex: "Cafe"' />
                        <button onClick={search} id='searchBtn' autofill="off" autocomplete="off">Search</button>
                    </div>
                    <div id="mapContainer" className="mapContainer"></div>
                </Col>
                <Col md className="resultsList">
                        <div  id="resultsContainer">
                            {searchData.length < 10 ? <div /> : <ResultItem data={searchData} />}
                        </div>
                    
                </Col>
            </Row>
        </Container>
    )
}


export default SearchPage;