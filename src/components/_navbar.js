import { forwardRef, useRef } from "react";
import { Link } from "react-router-dom"
import Assets from "../assets/AssetsCommon";
import FrontendRoutes from "../routes/FrontendRoutes"
import Hamburger from "./_navbar-hamburger";

const Navbar = forwardRef((props, ref) => {
  return (
    // <nav>
    //   <p>
    //     <Link to={FrontendRoutes.dealer.home}>Dealer</Link>
    //   </p>
    //   <p>
    //     <Link to={FrontendRoutes.outlet.home}>Outlet</Link>
    //   </p>
    //   <p>
    //     <Link to={FrontendRoutes.cars.xl7.home}>XL7</Link>
    //   </p>
    // </nav>
    <nav className="navbar" ref={ref}>
      {props.children}
    </nav>
  )
})

export default Navbar