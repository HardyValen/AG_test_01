import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const SliderArrow = ({orientation = "left", onClick} = {}) => {
  if (orientation.toLowerCase() === "left" || orientation.toLowerCase() === "right") {
    return (
      <span className={`slider-arrow-${orientation} color primary-light`} onClick={onClick}>
        <div>
          <FontAwesomeIcon icon={['fas', `arrow-circle-${orientation}`]} size={"lg"}/>
        </div>
      </span>
    )
  } else {
    return null;
  }
}

export default SliderArrow