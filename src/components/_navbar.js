import { forwardRef } from "react";

const Navbar = forwardRef((props, ref) => {
  return (
    <nav className="navbar" ref={ref}>
      {props.children}
    </nav>
  )
})

export default Navbar