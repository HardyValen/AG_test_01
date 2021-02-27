import { Link } from "react-router-dom"

const CarsXL7Pricelist = ({data, id = "harga"} = {}) => {
  const {prices, type, linkURL} = data

  if (data) {
    return (
      <div className="car-showcase color white-bg" id={id}>
        <div className="car-showcase-title py-6">
          <h3 className="mt-6">DAFTAR HARGA {type}</h3>
        </div>
      
        <div className="car-showcase-pills px-6">
          {prices.map((data, index) => {
            return (
              <div className="car-showcase-pill row px-5 py-3 my-2" key={index}>
                <div className="col-6 font size-small weight-bold">{data.type}</div>
                <div className="col-6 font size-small weight-bold">{data.value}</div>
              </div>
            )
          })}
        </div>

        <div className="flex justify-content-center py-6">
          <Link to={linkURL} className="button color primary white-bg primary-border primary-bg-hover white-hover">
            Lihat Semua Harga Mobil
          </Link>
        </div>
      </div>
    )
  }
  else return null
}

export default CarsXL7Pricelist