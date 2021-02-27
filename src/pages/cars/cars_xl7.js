import { useEffect, useRef, useState, Fragment } from "react";
import Slider from "react-slick";
import Footer1 from "../../components/_footer-1";
import Footer2 from "../../components/_footer-2";
import Layout from "../../components/_layout";
import Navbar from "../../components/_navbar";
import NavbarMain from "../../components/_navbar-main";
import SliderContent from "../../components/_outlet-slider-content";
import SliderArrow from "../../components/_outlet-slider-arrow";
import XL7_SLIDER_DATA from "../../components/jsx-literal-content/__xl7-slider-data";
import CarsXL7Types from "../../components/_cars-xl7-types";
import CarsXL7Showcase from "../../components/_cars-xl7-showcase";
import XL7_INTERIOR_DATA from "../../components/jsx-literal-content/__xl7-cars-interior-data";
import XL7_EXTERIOR_DATA from "../../components/jsx-literal-content/__xl7-cars-exterior-data";
import LayoutBody from "../../components/_layout-body-wrapper";
import CarsXL7Pricelist from "../../components/_cars-xl7-pricelist";
import XL7_CARS_PRICE_DATA from "../../components/jsx-literal-content/__xl7-cars-pricelist-data";

const CarsXL7 = () => {
  const navbarEl = useRef(null);
  const [navbarHeight, setNavbarHeight] = useState(null)
  // const [active, setActive] = useState(1);

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
        <LayoutBody>
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

            <CarsXL7Types/>
            <CarsXL7Showcase data={XL7_EXTERIOR_DATA}/>
            <CarsXL7Showcase data={XL7_INTERIOR_DATA}/>

            <CarsXL7Pricelist data={XL7_CARS_PRICE_DATA}/>
          </div>
        </LayoutBody>
        <Footer1/>
        <Footer2 classList="color primary-bg white"/>
      </Layout>
    </Fragment>
  );
}

export default CarsXL7;