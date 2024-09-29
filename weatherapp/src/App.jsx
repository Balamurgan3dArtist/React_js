import { useState } from 'react'
import './App.css'
import searchIcon from "./assets/icons8-search-50.png"
import clearIcon from "./assets/icons8-clear-50.png"
import cloudIcon from "./assets/icons8-cloud-50.png"
import drizzleIcon from "./assets/icons8-drizzle-50.png"
import windIcon from "./assets/icons8-wind-50.png"
import snowIcon from "./assets/icons8-snow-50.png"
import sunIcon from "./assets/icons8-sun-48.png"
import humidityIcon from "./assets/icons8-humidity-50.png"

const Weatherdetail = ({icon,temp,city,country,lat,log,humidity,wind}) =>{
  return(
    <>
    <div className="image">
      <img src={icon} alt="image" />
    </div>
    <div className="temp">{temp} C</div>
    <div className="location">{city}</div>
    <div className="country">{country}</div>
    <div className="cood">
      <div>
        <span className="lat">lattitude</span>
        <span>{lat}</span>
      </div>
      <div>
      <span className="log">longtitude</span>
      <span>{log}</span>
      </div>
    </div>
    <div className="data-conatiner">
      <div className="element">
        <img src={humidityIcon} alt="humidity" />
        <div className="data">
          <div className="humidity-percent">{wind} %</div>
          <div className="text">Humidity</div>
        </div>
      </div>
      <div className="element">
        <img src={windIcon} alt="wind" />
        <div className="data">
          <div className="wind-percent">{humidity} km/hr</div>
          <div className="text">Wind speed</div>
        </div>
      </div>
    </div>
    </>
  )
};



function App() {
  let api_key="7b4dcdd9a057ebdf50ea450412da563d";
 const [text,settext]= useState("")
 const [icon,seticon]=useState(sunIcon)
 const [temp,settemp]=useState(30)
 const [city,setcity]=useState("karur")
 const [country,setcountry]=useState("india")
 const [lat,setlat]=useState(9)
 const [log,setlog]=useState(9)
 const [humidity,sethumidity]=useState(0)
 const [wind,setwind]=useState(0)
 const [citynotfound,setcitynotfound]=useState(false)
 const [loading,setloading]=useState(false)
  
 const search = async () =>{

  setloading(true)
  
  let url =`https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=${api_key}&units=Metric
`
try{
let res= await fetch(url);
let data = await res.json();
if(data.code == "404"){
  console.log("city not found")
  setcitynotfound(true)
  setloading(false)
  return;
}
sethumidity(data.main.humidity);
setwind(data.wind.speed);
settemp(Math.floor(data.main.temp));
setcity(data.name)
setcountry(data.sys.country);
setlat(data.coord.lat)
setlog(data.coord.lon)
}catch(error){
  console.error("error occurred:",error.message);
}finally{
  setloading(false);
}
}
const handle = (e) =>{
  settext(e.target.value);
};
const enter  = (e)=>{
  if(e.key == "Enter"){
    search();
  }
}
  return (
    <>
     <div className="container">
      <div className="input-container">
        <input type="text" className='cityname' placeholder='cityName' onChange={handle} value={text} onKeyDown={enter}/>
        <div className="searchIcon">
          <img src={searchIcon} alt="search" onClick={()=>search()}/>
        </div>
      </div>
      <Weatherdetail icon={icon} temp={temp} city={city} country={country} lat={lat} log={log} humidity={humidity} wind={wind}/>
      <p>Design by balamurugan karmuhil</p>
     </div>
    </>
  )
}

export default App


