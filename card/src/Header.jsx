import React from "react";
export const Header = () => {
    let css="error";
    const bool=true;
    const log=bool?<p>welcome back!</p>:<p>Please log in..</p>
    const item=["1","2","3","4"];
  return (
//   React.createElement("div",null,React.createElement("h1",{classname:"header"},"Header")
    <div>
        <div>
            <h1 className="header">Header</h1>
            <p className="sl">this is my first react web app</p>
        </div>
        <p className={css} >25+45={25+45}</p>
        {log}

        <ul>
            {item.map((item,index)=>(<li key={index}>{item}</li>))}
        </ul>
    </div>
  )
  
}
