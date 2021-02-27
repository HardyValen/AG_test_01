import { Fragment, useState } from "react"
import Assets from "../assets/AssetsCommon";
import XL7_CARS_DATA from "./jsx-literal-content/__xl7-cars-data"

const CarsXL7Types = () => {
  const [slide, setSlide] = useState(0);
  const [subSlide, setSubSlide] = useState(0);


  return (
    <div className="layout-cars-types p-5 color white-bg">
      <h3 className="my-5">TIPE & WARNA</h3>
      <div className="cars-types-tabs">
        {Object.keys(XL7_CARS_DATA).map((data, index) => {
          return (
            <div className={`${slide === index ? "active" : null} cars-types-tab px-5 py-3`} key={index} onClick={() => {setSlide(index)}}>{data}</div>
          )
        })}
      </div>

      {(() => {
        let cars_data = Object.values(XL7_CARS_DATA);

        return (
          <div className="cars-info">
            <img src={cars_data[slide][subSlide].img} alt=""/>
            <span className="cars-info-title mb-5">{cars_data[slide][subSlide].name}</span>
            <div className="cars-info-color-tabs">
              {cars_data[slide].map((variant, index) => {
                return (
                  <div className={`cars-info-color-tab mx-2 ${subSlide === index ? "active" : null}`} style={{backgroundColor: `${variant.color}`}} key={index} onClick={() => {setSubSlide(index)}}/>
                )
              })}
            </div>
          </div>
        )
      })()}
      <div className="cars-info-colors"></div>
    </div>
  )
}

export default CarsXL7Types;