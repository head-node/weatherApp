import logo from './logo.svg';
import './App.css'; 
import React from "react"
import CityInput from "./components/CityInput"
import CityWeather from "./components/CityWeather"

function App() { 
  const[city,setCity]=React.useState("");  
  const [cityWeather,setCityWeather]=React.useState("");

  const fetchCityWeather =()=>{
    
    fetch( 
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f477fbf1028b1963c63b17e148823ffd`)
    
    
    .then((res)=>res.json())
    .then((result)=>{
    setCityWeather(result); 
    })

  }  
  // console.log(cityWeather)
  return (
    <div className="body">
    <CityInput city={city} setCity={setCity} fetchCityWeather={fetchCityWeather} setCityWeather={setCityWeather}/> 
    { 
    cityWeather==""?(<></>):(
      <CityWeather className="result" current={cityWeather}/>
    )
     }
    </div>
  ); 
}

export default App;
 