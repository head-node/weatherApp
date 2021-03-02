import React, { Component } from 'react';
import "./style.css" 
import {Form,Button, Container} from "react-bootstrap";

const CityInput=({city,setCity,fetchCityWeather,setCityWeather})=> {

        
         const [error,setError] = React.useState("");   

          const handleInputChange=(event)=>{
            
                setCity(event.target.value);
                setCityWeather("");
               
          }  
          // if we have written console inside our function
          // it should have consoled initial value of target 
          //then have had called the setCity()
          
          const handleSubmit  =()=>{
            if(!city)
            setError("City field is empty");
            else 
            { 
                setError("");
                //make API call 
                fetchCityWeather();
            }
          }

        return (
            <Form className="container"  >
            <Form.Group className="input_c"  controlId="formBasicEmail">
              <Form.Label>City</Form.Label> 
              <Form.Control className="input" type="text" placeholder="Enter City" input={city} onChange={handleInputChange} />
            <p className="text-danger">{error}</p>
            </Form.Group>
            <div className="button">
            <Button variant="primary" onClick={handleSubmit}>
              Search
            </Button>
            </div> 
          </Form>
        );
    
}

export default CityInput;