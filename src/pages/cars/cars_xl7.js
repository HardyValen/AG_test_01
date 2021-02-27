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
import XL7_SLIDER_DATA from "../../components/jsx-literal-content/__xl7-slider-data";

const CarsXL7 = () => {
  const navbarEl = useRef(null);
  const [navbarHeight, setNavbarHeight] = useState(null)
  const [active, setActive] = useState(1);

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

  useEffect(() => {
    setNavbarHeight(navbarEl.current.clientHeight)

    window.onresize = () => {
      setNavbarHeight(navbarEl.current.clientHeight)
    }
  }, [])

  return (
    <Fragment>
      <Navbar ref={navbarEl}>
        <NavbarMain height={navbarHeight} title={"SUZUKI NJS BUAH BATU"} subtitle={"PT. Nusantara Jaya Sentosa"}/>
      </Navbar>
      <Layout style={{"margin-top": navbarHeight}}>
        <div className="body">
          <div className="row">
            <div className="offset-md-4 col-md-4">

              <Slider {...settings}>
                {XL7_SLIDER_DATA.map((data, index) => {
                  return <SliderContent data={data} key={index}/>
                })}
              </Slider>

              <div className="layout-cars">
                <div className="layout-cars-header">
                  <img src="https://sibaturaspirman.github.io/suzuki/assets/images/content/xl7-overview.png" alt=""/>
                  <p className="color white mb-5">Suzuki XL7 hadir dengan tampilan maskulin, tangguh dan berkarakter. Desain modern SUV 7-Seater memberikan kebanggaan dan kepercayaan bagi penggunanya. Dilengkapi dengan fitur canggih semakin membuat XL7 menjadi SUV yang luar biasa di kelasnya</p>
                  <hr className="mb-5"/>
                  <div className="header-buttons">
                    <span className="header-button color white primary-bg white-border primary-hover white-bg-hover">UNDUH BROSUR</span>
                    <span className="header-button color white primary-bg white-border primary-hover white-bg-hover">HARGA</span>
                  </div>
                </div>
              </div>

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

            </div>
          </div>
        </div>
        <Footer1/>
        <Footer2 classList="color primary-bg white"/>
      </Layout>
    </Fragment>
  );
}

export default CarsXL7;