import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"

const LayoutCard = ({data}) => {
  return data 
  ? <div className="layout-card mb-7">
      {data?.img ? <div className="layout-card-header" style={{backgroundImage: `url(${data?.img})`}}/> : null}
      <div className="layout-card-body">
        {
          data?.tags
          ? <div className="layout-card-tags mb-4">
              {data?.tags}
            </div>
          : null
        }
        {
          data?.date
          ? <p className="mb-2">
              {data?.date}
            </p>
          : null
        }
        {
          data?.title
          ? <h3 className="mb-4">{data?.title}</h3>
          : null
        }
        {
          data?.tel
          ? <p className="mb-4">
              <FontAwesomeIcon icon={['fas', 'map-marker-alt']}/>&ensp;{data?.tel}
            </p>
          : null
        }
        {
          data?.address
          ? <p className="mb-5">
              <FontAwesomeIcon icon={['fas', 'phone-alt']}/>&ensp;{data?.address}
            </p>
          : null
        }
        {
          data?.url
          ? <Link to={data?.url} className="layout-button button color white-bg primary-border primary white-hover primary-bg-hover">
              Kunjungi Website Outlet
            </Link>
          : null
        }
      </div>
    </div> 
  : null
}

export default LayoutCard