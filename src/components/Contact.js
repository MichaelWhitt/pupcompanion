import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBriefcase } from "@fortawesome/free-solid-svg-icons"; 



function Contact(props){
    return(
        
        <div id="section3">
            
            <div id="banner"><br/><h1 className="text-center">Contact Us!</h1><br/></div>
            <div className="container">
                <div className="row text-center mt-5">
                        
                    
                    <div className="col-4">
                        
                        <a href="https://www.github.com/MichaelWhitt" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} style={{fontSize:80}} />
                        </a>
                        <div>Github</div>
                    </div>
                    <div className="col-4">
                        <a href="https://www.linkedin.com/in/michaeldwhitt" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} style={{fontSize:80}}/>
                        </a>
                        <div>LinkedIn</div>
                    </div>
                    <div className="col-4">
                        <a href="https://www.michaeldwhitt.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faBriefcase} style={{fontSize:80}}/>
                        </a>
                        <div>Portfolio</div>
                    </div>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <div className="text-center mt-5">
                    <div>Address: 8787 Shiba Way, Dallas, TX 75001</div>
                    
                </div>
            </div>

        </div>
        
    )
}

export default Contact