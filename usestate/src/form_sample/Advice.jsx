import {useEffect, useState} from 'react'
import "./advice.css"
export const Advice = () => {
    const [advice,setadvice]=useState("pls click button to get Advice")
    const [count,setcount]=useState(0)
    function clickadvice(){
       const res =fetch("https://api.adviceslip.com/advice");
       const data = res.json();
       setadvice(data.slip.advice)
       setcount((c) => c + 1);
    }
   useEffect(function(){
    clickadvice();
   },[])
  return (
    <div>
        <h1>Advice App</h1>
        <h2>{advice}</h2>
    <button onClick={clickadvice} >Get Advice</button>
    <p>you are in <b>{count}</b> count</p>
    </div>
    
  )
}
