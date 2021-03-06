import { useRef, useState, useEffect } from "react";
import Assets from "../assets/AssetsCommon";
import Backdrop from "./_backdrop";
import Hamburger from "./_navbar-hamburger";
import Sidebar from "./_sidebar";

const NavbarMain = ({height, title, subtitle}) => {
  const hamburgerEl = useRef(null);
  const sidebarEl = useRef(null);
  const backdropEl = useRef(null);
  const [sidebarActive, setSidebarActive] = useState(false);

  function handleClick() {
    setSidebarActive(!sidebarActive);

    if (!sidebarActive) {
      // Opens Sidebar
      hamburgerEl.current.classList.add("active")
      backdropEl.current.classList.remove("backdrop-hide")
      sidebarEl.current.style.right = "0px";
    } else {
      // Closes Sidebar
      hamburgerEl.current.classList.remove("active")
      sidebarEl.current.style.right = `${-sidebarEl.current.clientWidth}px`;
      backdropEl.current.classList.add("backdrop-hide")
    }
  }

  useEffect(() => {
    sidebarEl.current.style.paddingTop = `${height}px`;
  }, [height])

  return (
    <div className="navbar-tabs navbar-main">
      <div className="navbar-main-company">
        <img src={Assets.logo} alt="" className="navbar-main-img"/>
        <div className="navbar-main-text">
          <p className="navbar-main-text-title">{title || "PT. Nusantara Jaya Sentosa"}</p>
          <p className="navbar-main-text-subtitle">{subtitle || "Main Dealer Suzuki Jawa Barat"}</p>
        </div>
      </div>
      {/* <div className="navbar-main-hamburger" onClick={() => {console.log("click")}}> */}
        <Hamburger sidebarHandler={handleClick} ref={hamburgerEl}/>
      {/* </div> */}
        <Sidebar ref={sidebarEl}/>
        <Backdrop ref={backdropEl} visibilityHandler={handleClick}/>
    </div>
  )
}

export default NavbarMain;