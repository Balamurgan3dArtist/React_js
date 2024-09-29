import PropsTypes from "prop-types";

export const Student = (props) => {
  return (
    <div  className="Student">
        <table>
       <tbody>
       <tr>    
               <th>Name</th>
               <td>{props.name}</td>
       </tr>
       <tr>
           <th>Age</th>
               <td>{props.age}</td>
       </tr>
       <tr>
           <th>Maried</th>
               <td>{props.ismaried?"yes":"no"}</td>
       </tr>
       </tbody>
        </table>
    </div>
  );
};

Student.PropsTypes={
    name:PropsTypes.string,
    age:PropsTypes.number,
    ismaried:PropsTypes.bool,
};
// Student.defaultProps={
//     name:"no name",
//     age:0,
//     ismaried:"Not",
// };
