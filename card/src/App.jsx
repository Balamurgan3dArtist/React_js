


import { Func } from "./Component/Func"

import { Multi } from "./Multi"

import { One } from "./Component/One"

import { Child } from "./Component/Child"
import { Student } from "./Component/Student"


function App() {
  
const click= ()=>{
alert("button click");
}
  return (
    <>
     <Header/> 
    <Student name="balamurugan" age={20} ismaried={false}/>
    <Student name="anna" age={19} ismaried={false}/>
    <Student name="asd" age={11} ismaried={true}/>
    <Student />
    <Child>
      <p>this is paragraph 1</p>
      <p>this is paragraph 2</p>
    </Child> 
    <One color="red"/> 
   <Multi value="Hello"/>
      <Multi value={42}/>
      <Func click={click}/>
    </>
  )
}

export default App
