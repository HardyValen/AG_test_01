import { useEffect, createRef, useRef, useState, Fragment } from "react";
import Assets from "../../assets/AssetsCommon";
import Layout from "../../components/_layout";
import Navbar from "../../components/_navbar";
import NavbarMain from "../../components/_navbar-main";
import Sidebar from "../../components/_sidebar";

const DealerHome = () => {
  const navbarEl = useRef(null);
  const [navbarHeight, setNavbarHeight] = useState(null)

  useEffect(() => {
    setNavbarHeight(navbarEl.current.clientHeight)

    window.onresize = () => {
      setNavbarHeight(navbarEl.current.clientHeight)
    }
  }, [])

  return (
    <Fragment>
      <Navbar ref={navbarEl}>
        <NavbarMain height={navbarHeight}/>
      </Navbar>
      <Layout style={{"margin-top": navbarHeight}}>
        <p>Hello World</p>
        <a href="#">Click Me!</a>
      </Layout>
    </Fragment>
  );
}

export default DealerHome;