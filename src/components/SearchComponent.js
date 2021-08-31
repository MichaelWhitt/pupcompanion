import React from 'react';
import {Card} from 'react-bootstrap';
// import { CheckAllow } from '../shared/results';




function RenderResults({result}){
    
        return (
            <div>
                <Card id="resultsCard">
                    <div className="row">
                        <div className="col-3" id="resultVisual">
                            <img src={result.image} alt={result.image} height="120px" width="120px" id="resultImg"></img>
                            <br/>
                            <b id="resultsRating">{result.rating}</b>
                        </div>
                        <div className="col-9">
                            <Card.Header>
                                <strong>{result.name}</strong>
                            </Card.Header>
                            <Card.Body id="resultBody" className="row">
                                <div className="col-6">
                                    <div><b>Allows Dog: </b>{result.allowsDog}</div>
                                    <div><b>Seating: </b>{result.seating}</div>
                                    <div><b>Feed Dog: </b>{result.feedDog}<br/></div>
                                    {/* <CheckAllow allow={result.allowDog}/> */}
                                    
                                </div>
                                <div className="col-6">
                                    {result.location.addressStreet.toUpperCase()}<br/>
                                    {result.location.addressCity.toUpperCase()}, 
                                    {result.location.addressState.toUpperCase()}<br/>
                                    {result.phone}
                                </div>
                            </Card.Body>
                        </div>
                    </div>
                </Card>
            </div>
        );
}

function ShowResults(props){
    
    const newResults = props.results.map(result => {
    
        return(
            <div key={result.id} id="resultCard">
                {/* {console.log("line 43: " + result.name)} */}
                <RenderResults result={result}/>
            </div>
        );
    });

    // const newResults = props.results.map(function(result){
    //     return( console.log(result.name))
    // })
    

    return (
        <div>
            {newResults}
        </div>
    )

};

export default ShowResults;