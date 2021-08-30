import React, {Component} from 'react';
import {Card} from 'react-bootstrap';
import {RESULTS} from '../shared/results';


// function ShowResult({results}){
//     return(
//         <Card>{results.name}</Card>
//     )
// }

class Search extends Component {
    constructor(props){
        super(props);
        this.state = {
            results: RESULTS
        };
    }
    
    // renderResults(result){
    //     const newResult = this.state.results.map(result => {
    //         return (
    //             <div  className="col-md-5 m-1">
    //                 <ShowResult result={result}/>
    //             </div>
    //         );
    //     });
    // }

    render(){
        return(
            
            <div id="section2" >
                <div className="container">
                    <div className="row text-center" id="searchDiv">
                        <div className="col-6">
                            <div id="instructionsText">Type in your area code to explore!</div>
                            <div className="col">
                                <span><input type="text" id="searchInput" placeholder="ex: 75050"></input></span>
                                <button type="submit" className="btn btn-primary m-2">Search</button> 
                            </div>
                            <div  id="searchBox">
                                <div id="instructionsText">Type in your area code to explore!</div>
                            </div>
                        </div>
                        <div className="col-6" id="resultsBox">
                            <div id="resultsText">Results go here</div>
                                <Card id="resultsCard">
                                        <div className="row">
                                            <div className="col-3">
                                                <img src={this.state.results[0].image} height="120px" width="120px"></img>
                                                <br/>
                                                <b id="resultsRating">4.5/5</b>
                                            </div>
                                            <div className="col-9">
                                                <Card.Header>
                                                    {this.state.results[0].name}
                                                </Card.Header>
                                                <Card.Body>
                                                    {this.state.results[0].location.addressStreet.toUpperCase()}<br/>
                                                    {this.state.results[0].location.addressCity.toUpperCase()}, 
                                                    {this.state.results[0].location.addressState.toUpperCase()}<br/>
                                                    {this.state.results[0].phone}
                                                </Card.Body>
                                            </div>
                                        </div>
                                </Card>
                            {/* <Card>
                                <Card.Header>{this.state.results[0].name}<br/></Card.Header>
                                <Card.Body>
                                    
                                    {this.state.results[0].location.addressStreet.toUpperCase()}<br/>
                                    {this.state.results[0].location.addressCity.toUpperCase()}, 
                                    {this.state.results[0].location.addressState.toUpperCase()}

                                </Card.Body>
                            </Card> */}
                        </div>
                    </div>    
                </div>           
            </div>
        )
    }    
}

export default Search;