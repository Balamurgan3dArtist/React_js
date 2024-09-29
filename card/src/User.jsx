const userdata={
    name:"anna",
    city:"karur",
    position:"web dev",
    skills:["ui/ux","3D Animation","Blender","3D modeling","rigging","texturing"],
    profile:"public/images/bheema.png"
}

function Username(props){
    return <div className="container">
        <span className="pro">ONLINE</span>
        <img src={props.profile} alt="" />
        <h3>{props.name}</h3>
        <h1>{props.city}</h1>
        <p>{props.position}</p>
        <div className="buttons">
            <button className="primary">message</button>
            <button className="primaryoutline">follow</button>
        </div> 
            <div className="skills">
                <h6>Skills</h6>
                <ul>
                    {props.skills.map((skills,index)=>(
                        <li key={index}>{skills}</li>
                    ))}
                </ul>
            </div>
     

    </div>
}

export const User = () => {
  return (
   <>
   <Username name="balamurugan" city="karur" position="3D Artist" skills={["ui/ux","3D Animation","Blender","3D modeling","rigging","texturing"]} online={true} profile="public/images/1.jpg"/>
{/* {userdata.map((Username,index)=>(
    <user key={index} name={Username.name}
    city={Username.city}
    position={Username.position}
    profile={Username.profile}
    skills={Username.skills}
    />
))} */}
   </>
  )
}


