import { useEffect, useRef, useState, Fragment } from "react";
import DEALER_ARTIKEL_DATA from "../../components/jsx-literal-content/__dealer-artikel-data";
import DEALER_OUTLET_DATA from "../../components/jsx-literal-content/__dealer-outlet-data";
import Footer1 from "../../components/_footer-1";
import Footer2 from "../../components/_footer-2";
import Layout from "../../components/_layout";
import LayoutCard from "../../components/_layout-card";
import LayoutCardArticle from "../../components/_layout-card-article";
import Navbar from "../../components/_navbar";
import NavbarMain from "../../components/_navbar-main";

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
        <div className="body">
          <div className="row">
            <div className="offset-md-4 col-md-4">

              <div className="layout-cards-content">
                <div className="layout-content-title">
                  <h2>Temukan Outlet Suzuki terdekat di daerah sekitar Anda</h2>
                </div>
                <div className="layout-cards-container">
                  {DEALER_OUTLET_DATA.map((data, index) => {
                    return <LayoutCard data={data} key={index}/>
                  })}
                </div>
              </div>

              <div className="layout-cards-content">
                <div className="layout-content-title">
                  <h2 className="mb-2">Informasi Terbaru</h2>
                  <p>Seputar Promo, Berita, dan Event dari Suzuki</p>
                </div>
                <div className="layout-cards-container">
                  {DEALER_ARTIKEL_DATA.map((data, index) => {
                    return <LayoutCardArticle data={data} key={index}/>
                  })}
                </div>
              </div>

            </div>
          </div>
        </div>
        <Footer1/>
        <Footer2 classList="color primary-bg white"/>
        {/* <a href="#">Click Me!</a> */}
      </Layout>
    </Fragment>
  );
}

export default DealerHome;