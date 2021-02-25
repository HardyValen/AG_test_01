import { forwardRef, useState } from "react";

const Hamburger = forwardRef((props, ref) => {

  return (
    // <div className="hamburger" onClick={props.handler.handleClick}>
    //   <div className="line line1" onClick={props.handler.handleChildClick}></div>
    //   <div className="line line2" onClick={props.handler.handleChildClick}></div>
    // </div>
    <div className="hamburger" onClick={props.sidebarHandler} ref={ref}>
      <div className="line line1" ></div>
      <div className="line line2" ></div>
    </div>
  )
})

export default Hamburger;