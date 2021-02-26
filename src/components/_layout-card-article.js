import { Link } from "react-router-dom"

const LayoutCardArticle = ({data}) => {
  return data 
  ? <Link className="layout-card card-article mb-7" to={data?.url}>
      {data?.img ? <div className="layout-card-header" style={{backgroundImage: `url(${data?.img})`}}/> : null}
      <div className="layout-card-body">
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
      </div>
    </Link> 
  : null
}

export default LayoutCardArticle