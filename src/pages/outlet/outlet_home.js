import { useEffect, useRef, useState, Fragment } from "react";
import Slider from "react-slick";
import OUTLET_SLIDER_DATA from "../../components/jsx-literal-content/__outlet-slider-data";
import Footer1 from "../../components/_footer-1";
import Footer2 from "../../components/_footer-2";
import Layout from "../../components/_layout";
import Navbar from "../../components/_navbar";
import NavbarMain from "../../components/_navbar-main";
import SliderContent from "../../components/_outlet-slider-content";
import SliderArrow from "../../components/_outlet-slider-arrow";
import OutletNavContent from "../../components/_outlet-nav-content";
import OUTLET_MOBIL_COMMERCIAL from "../../components/jsx-literal-content/__outlet-mobil-commercial-data";
import OUTLET_MOBIL_PASSENGER from "../../components/jsx-literal-content/__outlet-mobil-passenger-data";
import FrontendRoutes from "../../routes/FrontendRoutes";
import { Link } from "react-router-dom";
import Assets from "../../assets/AssetsCommon";
import OUTLET_ARTICLE_DATA from "../../components/jsx-literal-content/__outlet-article-data";
import OutletArticle from "../../components/_outlet-articles";
import LayoutBody from "../../components/_layout-body-wrapper";

const DealerHome = () => {
  const navbarEl = useRef(null);
  const [navbarHeight, setNavbarHeight] = useState(null)
  const [active, setActive] = useState(1);

  useEffect(() => {
    setNavbarHeight(navbarEl.current.clientHeight)

    window.onresize = () => {
      setNavbarHeight(navbarEl.current.clientHeight)
    }
  }, [])

  const settings = {
    centerMode: true,
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: '0px',
    nextArrow: <SliderArrow orientation="right"/>,
    prevArrow: <SliderArrow orientation="left"/>,
  };

  return (
    <Fragment>
      <Navbar ref={navbarEl}>
        <NavbarMain height={navbarHeight} title={"SUZUKI NJS BUAH BATU"} subtitle={"PT. Nusantara Jaya Sentosa"}/>
      </Navbar>
      <Layout style={{"margin-top": navbarHeight}}>
        <LayoutBody>
          <Slider {...settings}>
            {OUTLET_SLIDER_DATA.map((data, index) => {
              return <SliderContent data={data} key={index}/>
            })}
          </Slider>

          <div className="layout-outlet">
            <div className="layout-outlet-header">
              <h3>Temukan Mobil Suzuki yang tepat untuk Anda</h3>
              <div className="outlet-nav row">
                <div className={`col-6 ${active === 1 ? "active" : null}`} onClick={(e) => setActive(1)}>Passenger Car</div>
                <div className={`col-6 ${active === 2 ? "active" : null}`} onClick={(e) => setActive(2)}>Commercial Car</div>
              </div>
            </div>
            <div className="layout-outlet-body">
              {
                active === 1
                ? <>
                    {OUTLET_MOBIL_PASSENGER.map((data, index) => {
                      return <OutletNavContent data={data} key={index}/>
                    })}
                  </>
                : null
              }
              {
                active === 2
                ? <>
                    {OUTLET_MOBIL_COMMERCIAL.map((data, index) => {
                      return <OutletNavContent data={data} key={index}/>
                    })}
                  </>
                : null
              }
              <hr/>
              <div className="px-5 py-6 flex justify-content-center">
                <Link to={FrontendRoutes.cars.xl7.home} className="button color primary white-hover primary-bg-hover">
                  Lihat Semua Mobil
                </Link>
              </div>

              {OUTLET_ARTICLE_DATA.map((data, index) => {
                return <OutletArticle data={data} key={index}/>
              })}

            </div>
          </div>
        </LayoutBody>
        <Footer1/>
        <Footer2 classList="color primary-bg white"/>
      </Layout>
    </Fragment>
  );
}

export default DealerHome;