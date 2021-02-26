const SliderContent = ({data}) => {
  return data 
    ? <div className="outlet-slider-content">
        <img src={data?.image} alt=""/>
      </div> 
    : null
}

export default SliderContent