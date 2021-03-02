import React, { Component } from "react";
import "./style.css"

const CityWeather = ({ current }) => {
  console.log(current)
  return <> <div className="container">
  
   <p className="description">{current.weather[0].description}</p>
  
   </div>
   </>
};

export default CityWeather;
