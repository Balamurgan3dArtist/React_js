import { useState } from 'react'

import './App.css'

function App() {
  const [height,setheight]=useState("")
  const [weight,setweight]=useState("")
 const [bmi,setbmi]=useState(null)
 const [bmistatus,setbmistatus]=useState("")
 const calu=()=>{
  if(height && weight){
    const heightinmeter=height/100;
    const bmivalue = weight/(heightinmeter * heightinmeter)
    setbmi(bmivalue.toFixed(2))
    if(bmivalue < 18.5){
      setbmistatus("underweight")
    }else if(bmivalue >= 18.5 && bmivalue<= 24.9){
      setbmistatus("normal weight")
    }else{
      setbmistatus("overweight")
    }
  }
  else{
    setbmi(null)
    setbmistatus("")
  }
 }
  return (
    <>
    <div className="container">
      <div className="box">

      </div>
      <div className="data">
        <h1>BMI Calculator</h1>
        <p></p>
        <div className="input-container">
          <label htmlFor='height'>
            Height (cm):
          </label>
          <input type="text" id="height" value={height} onChange={(e)=>setheight(e.target.value)}/>
        </div>
        <div className="input-container">
          <label htmlFor='wieght'>
            Weight (kg):
          </label>
          <input type="text" id="Weight" value={weight} onChange={(e)=>setweight(e.target.value)}/>
        </div>
        <button onClick={calu}>calculate BMI</button>
       {bmi !== null &&(
         <div className="result">
         <p>Your BMI is: {bmi}</p>
         <p>Status:{bmistatus}</p>
       </div>
       )}
      </div>
    </div>
    </>
  )
}

export default App
