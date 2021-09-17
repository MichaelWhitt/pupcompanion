import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBriefcase } from "@fortawesome/free-solid-svg-icons"; 



function Contact(props){
    return(
        
        <div id="section3">
            <div id="banner"><br/><h1 className="text-center">Contact Us!</h1><br/></div>
            <div className="container" id="s3container">
                <div className="row text-center mt-5">
                        
                    <div className="col-6">
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
                    
                    <div className="col-6">
                        <div className="text-center mt-5">
                            <div><b>Phone: </b> +1 888-242-5454</div>
                            <div><b>Address:</b> 8787 Shiba Way, Dallas, TX 75001</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className='text-center'>
                    <div><a href="#section1" id="contactLink">Home</a></div>
                    
                    <div><a href="#section2" id="contactLink">Search</a></div>
            </div>
            
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#007bff" fill-opacity="1" d="M0,256L26.7,256C53.3,256,107,256,160,234.7C213.3,213,267,171,320,160C373.3,149,427,171,480,160C533.3,149,587,107,640,128C693.3,149,747,235,800,256C853.3,277,907,235,960,186.7C1013.3,139,1067,85,1120,80C1173.3,75,1227,117,1280,144C1333.3,171,1387,181,1413,186.7L1440,192L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path></svg>
            </div>
        </div>
        
        
    )
}

export default Contact