import Proptypes from 'prop-types'

export const One = (prop) => {
    const {color}=prop;
  return (
    <div
     style ={{backgroundColor:color, color:'white',padding:"20px"}}><p>this has a background color of {color}</p></div>
  )
}
One.Proptypes={
    color:Proptypes.oneOf(["red","yellow","green"]).isRequired
}