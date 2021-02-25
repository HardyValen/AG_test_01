import { forwardRef } from "react"

const Backdrop = forwardRef((props, ref) => {

  return (
    <div className="backdrop backdrop-hide" ref={ref} onClick={props.visibilityHandler}/>
  )
})

export default Backdrop