import PropsTypes from 'prop-types'

export const Multi = (props) => {
  return (
    <div>
        <p>this value is:{props.value}</p>
    </div>
  )
}
Multi.prototype={
    value:PropsTypes.oneOfType([
        PropsTypes.string,PropsTypes.number
    ])
}