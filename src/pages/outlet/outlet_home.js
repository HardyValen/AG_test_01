import { useEffect, useRef, useState, Fragment } from "react";
import Slider from "react-slick";
import OUTLET_SLIDER_DATA from "../../components/jsx-literal-content/__outlet-slider-data";
import Footer1 from "../../components/_footer-1";
import Footer2 from "../../components/_footer-2";
import Layout from "../../components/_layout";
import Navbar from "../../components/_navbar";
import NavbarMain from "../../components/_navbar-main";
import SliderContent from "../../components/_outlet-slider-content";
import SliderArrow from "../../components/__outlet-slider-arrow";

const DealerHome = () => {
  const navbarEl = useRef(null);
  const [navbarHeight, setNavbarHeight] = useState(null)

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
    // nextArrow: <SiteComponents.Carousel.NextArrow width={width}/>,
    // prevArrow: <SiteComponents.Carousel.PrevArrow width={width}/>,
    // beforeChange: (current, next) => setActiveSlide(next)
  };

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
                {OUTLET_SLIDER_DATA.map((data, index) => {
                  return <SliderContent data={data} key={index}/>
                })}
              </Slider>
            </div>
          </div>
        </div>
        <Footer1/>
        <Footer2 classList="color primary-bg white"/>
      </Layout>
    </Fragment>
  );
}

export default DealerHome;