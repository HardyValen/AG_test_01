const SliderContent = ({data, id}) => {
  return data 
    ? <div className="outlet-slider-content" id={id}>
        <img src={data?.image} alt=""/>
      </div> 
    : null
}

export default SliderContent