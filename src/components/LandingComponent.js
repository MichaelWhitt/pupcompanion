import React, {Component} from 'react';

function Landing(props) {
    
        return(
            <div id="section1">
                <div className="container d-flex flex-row-reverse">
                    <div className="row text-left" id="landingDiv">
                        <div className="col">
                            <p id="landingText">Find the perfect place for you and your pup, completely free!</p>
                        </div>
                        <div className="col my-auto" >
                            <a href="#section2" class="btn btn-primary btn-lg">Get Started</a>
                        </div>
                        
                    </div>
                </div>
                <video autoPlay muted loop id="myVideo" src="https://michaeldwhitt.com/wp-content/uploads/2021/08/dogs.mp4" type="video/mp4">
                </video>                   
            </div>
        )
    }    


export default Landing;