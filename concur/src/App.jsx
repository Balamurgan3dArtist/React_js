import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [amount,setamount]=useState(0);
  const [fromcurrency,setfromcurrency]=useState("USA");
  const [tocurrency,settocurrency]=useState("INR");
  const [convertedamount,setconvertedamount]=useState(null);
  const [exchange,setexchange]=useState(null)

  useEffect(()=>{
    const getExchangeRate = async () =>{
      try{
        let url=`https://api.exchangerate-api.com/v4/latest/${fromcurrency}`;
        const res=await axios.get(url);
        setexchange(res.data.rate[tocurrency])
      }catch(error){
        console.log("error occured:",error.message);
      }
    }
    getExchangeRate();
  },[fromcurrency,tocurrency]);

useEffect(()=>{
  if(exchange !== null){
    setconvertedamount((amount * exchange).toFixed(2))
  }
},[amount,exchange])

  const handleamount =(e)=>{
    const value=parseFloat(e.target.value);
    setamount(value);
  }
  const from =(e=>{
    setfromcurrency(e.target.value)
  })
  const to =(e=>{
    settocurrency(e.target.value)
  })


  return (
    <>
      <div className="convertor">
        <div className="box"></div>
        <div className="data">
          <h1>currency convertor</h1>
          <div className="input-container">
            <label htmlFor="amt">Amount:</label>
            <input type="number"  id="amt" value={amount} onChange={handleamount}/>
          </div>
          <div className="input-container">
            <label htmlFor="fromcurrency">From Amount:</label>
            <select  id="fromcurrency" value={fromcurrency} onChange={from}>
              <option value="UDS">USD - United States Dollar</option>
              <option value="INR">INR - Indian Rupee</option>
              <option value="EUR">EUR - Euro</option>
              <option value="JPY">JPY - Japanese Yen</option>
            </select>
          </div>
          <div className="input-container" >
            <label htmlFor="tocurrency">To Amount:</label>
            <select  id="tocurrency" value={tocurrency} onChange={to}>
              <option value="UDS">USD - United States Dollar</option>
              <option value="INR">INR - Indian Rupee</option>
              <option value="EUR">EUR - Euro</option>
              <option value="JPY">JPY - Japanese Yen</option>
            </select>
          </div>
          <div className="result">
            <p>{amount} {fromcurrency} is equal to {convertedamount} {tocurrency}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
