import { Link } from "react-router-dom"
const CarsXL7Showcase = ({data, id}) => {
  if (data) {
    return (
      <div className="car-showcase color primary-bg" id={id}>
        <div className="car-showcase-title color white py-6">
          <h3>{data?.title}</h3>
        </div>
        <img src={data?.img} alt=""/>
        <div className="flex justify-content-center py-6">
          <Link to={data?.linkURL} className="button color white primary-bg white-border white-bg-hover primary-hover">
            {data?.linkText}
          </Link>
        </div>
      </div>
    )
  } else return null
}

export default CarsXL7Showcase;