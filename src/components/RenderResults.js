import React from 'react';
import { Card } from 'react-bootstrap';
import {dogData} from "../shared/DogData"


function ResultItem(props) {
    const data = props.data;
    let searchItems = [];
    
    console.log(data)

    let phoneNumber = "1-715-444-3324"
    function phoneNum(phone){
        if (phone === undefined){
            console.log(`num is ${phoneNumber}`)
            return phoneNumber
        } else {
            console.log(`phone is` + phone)
            return phone
        }
    }

    
    for (let i = 0; i < data.length; i++) {
        
        const randomRating = ((Math.random() * 2) + 3).toFixed(1);
        searchItems.push(
            <>
                <Card id={data[i].id}>
                        <Card.Header className="d-flex justify-content-between">
                            
                                <span>{data[i].poi.name}</span>
                                <span style={{color: "cyan"}}>{randomRating}</span>
                            
                            </Card.Header>
                        <Card.Body>
                            <div className="d-flex justify-content-around">
                                    <span>Allows Dog: <b>{dogData[i].allowsDog}</b></span>
                                    <span>Seating: <b>{dogData[i].seating}</b></span> 
                                    <span>Snacks: <b>{dogData[i].feedDog}</b></span>
                            </div>  
                            <hr/>
                            <div className="text-center mt-2">
                                <div>{data[i].address.freeformAddress}</div>
                                <div className="text-muted">{phoneNum(data[i].poi.phone)}</div>
                            </div>
                        </Card.Body>
                </Card>
            </>
        );
    }
    return (searchItems);
}

export default ResultItem;

