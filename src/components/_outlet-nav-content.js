import { Link } from "react-router-dom";

const OutletNavContent = ({data}) => {
  if (data) {
    return (
      <div className="outlet-nav-content row my-5">
        <div className="col-6 outlet-nav-content-image">
          <img src={data?.img} alt=""/>
        </div>
        <div className="col-6 outlet-nav-content-desc">
          <h3 className="outlet-nav-content-title">{data?.title}</h3>
          {
            data?.price
            ? <>
                <p className="color gray-3 mt-2"><small><i>Mulai dari</i></small></p>
                <p><b>{data?.price}</b></p>
              </>
            : null
          }
          {
            data?.link
            ? <Link to={data?.link} className="outlet-nav-content-button button color primary white-bg white-hover primary-bg-hover mt-4">Lihat Detail</Link>
            : null
          }
        </div>
      </div>
    )
  } else {
    return null;
  }
}

export default OutletNavContent;