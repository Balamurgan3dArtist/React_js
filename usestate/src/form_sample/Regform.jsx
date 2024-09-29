import { useState }  from 'react'
import "./regfrom.css"
export const Regform = () => {
    const [user,setuser]=useState({
        Name:"balamurgan",
        age:21,
        gender:"male",
        isMarried:true,
        country:"india"
    })
    function changehandler(e){
        const name=e.target.name
const value =e.target.type == "checkbox"? e.target.checked:e.target.value;
setuser({...user,[name]:value})

    }
  return (
   <>
<table>
    <tbody>
        <tr>
            <td>Name</td>
            <td>{user.Name}</td>
        </tr>
        <tr>
            <td>Age</td>
            <td>{user.age}</td>
        </tr> 
        <tr>
            <td>Gender</td>
            <td>{user.gender}</td>
        </tr>
        <tr>
            <td>Married status</td>
            <td>{user.isMarried==true? "Married":"NotMarried"}</td>
        </tr>
        <tr>
            <td>select country</td>
            <td>{user.country}</td>
        </tr>
    </tbody>
</table>
    <form action="#">
        <input type="text"  placeholder='fullname' value={user.Name} onChange={changehandler} name='Name'/>
        <input type="number" placeholder='age' value={user.age} onChange={changehandler} name='age'/>
   <div className="gender">
    <label htmlFor=""><input type="radio" id='male' checked={user.gender == "male"} name='gender' value="male"onChange={changehandler}/>Male</label>
    <label htmlFor=""><input type="radio" id='female' name='gender' value="female" checked={user.gender == "female"}onChange={changehandler}/>Female</label>
   </div>
   <label htmlFor="isMarried">
    <input type="checkbox" id='isMarried' checked={user.isMarried }onChange={changehandler} name='isMarried'/>Is Married
   </label>
   <select name="country" onChange={changehandler}>
    <option value="india">india</option>
    <option value="usa">usa</option>
    <option value="uk">uk</option>
   </select>
    </form>
   </>
  )
}
