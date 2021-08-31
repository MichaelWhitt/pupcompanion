import React from 'react';
import {Card} from 'react-bootstrap';




function RenderResults({result}){
    
        return (
            <div>
                <Card id="resultsCard">
                    <div className="row">
                        <div className="col-3" id="resultVisual">
                            <img src={result.image} alt={result.image} height="120px" width="120px" id="resultImg"></img>
                            <br/>
                            <b id="resultRating">{result.rating}</b>
                        </div>
                        <div className="col-9" id="resultInfo">
                            <Card.Header id="resultHeader">
                                <strong>{result.name}</strong>
                            </Card.Header>
                            <Card.Body id="resultBody" className="row">
                                <div className="col-6">
                                    
                                    <div><b>Allows Dog: </b>{result.allowsDog}</div>
                                    <div><b>Seating: </b>{result.seating}</div>
                                    <div><b>Feed Dog: </b>{result.feedDog}<br/></div>
                                    
                                    
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

function RenderBannedResults({result}){
    return (
        <div>
            <Card id="resultsCard">
                    <div className="row">
                        <div className="col-3" id="resultVisual">
                            <img src={result.image} alt={result.image} height="120px" width="120px" id="resultImg"></img>
                            <br/>
                            <b id="resultRating">{result.rating}</b>
                        </div>
                        <div className="col-9" id="resultInfo">
                            <Card.Header id="resultHeader">
                                <strong>{result.name}</strong>
                            </Card.Header>
                            <Card.Body id="resultBody" className="row">
                                <div className="col-6">
                                    <div><strong>Dogs not allowed.</strong></div>
                                    <div id="redX">ⓧ</div>
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
    )
}

function ShowResults(props){
    
    const newResults = props.results.map(result => {
        
        return(
            result.allowsDog === "Yes" ?
            <div key={result.id} id="resultCard"><RenderResults result={result}/></div> :
            <div key={result.id} id="resultCard"><RenderBannedResults result={result}/></div>
        )

        // if(result.allowsDog === "Yes"){
        //     return(
        //         <div key={result.id} id="resultCard">
        //             <RenderResults result={result}/>
                    
        //         </div>
        //     );
        // } else { return <RenderBannedResults result={result}/>

        // }
        
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