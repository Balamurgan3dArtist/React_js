import PropsTypes from'prop-types'

export const Func = (props) => {
    const {click}=props;
  return (
    <div>
        <p>this is a func</p>
        <button onClick={click}>click me</button>
    </div>
  )
}
Func.prototype={
    click:prototype.func.isrequired
}