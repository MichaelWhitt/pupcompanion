import React, {Component} from 'react';
import {RESULTS} from '../shared/results';
import ShowResults from './SearchComponent';

class Search extends Component {
    constructor(props){
        super(props);
        this.state = {
            results: RESULTS
        };
    }
    
    
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
                            <div id="resultsText">
                                <b className="d-flex">Results</b>
                                <ShowResults results={this.state.results}/>
                            </div>
                        </div>
                    </div>    
                </div>           
            </div>
        )
    }    
}


export default Search;