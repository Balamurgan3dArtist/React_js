import {useState} from 'react'

export const UserDetail = () => {
    // const [userName,setusername]=useState("Ram");
    // const [userAge,setuserAge]=useState(21);
    const [user,setuser]=useState({Name:"ram",Age:21})
    const nameChange=()=>{
        //setusername("bala");
       // userName=="Ram"?setusername("Sam"):setusername("Ram");
       setuser({...user,Name:"sam"})
    }
    const nameAge=()=>{
       // setuserAge(22);
      // userAge==21?setuserAge(22):setuserAge(21);
      setuser({...user,Age:22})
    }
  return (
    <>
    <h1>User Detail</h1>
    <h3>{user.Name}</h3>
    <h3>{user.Age}</h3>
    <button onClick={nameChange}>changeName</button>
    <button onClick={nameAge}>changeAge</button>
    <form action="#">
        <br />
    <input type="text" placeholder="enter name" onChange={ch}/>
    </form>

    </>
  )
}
