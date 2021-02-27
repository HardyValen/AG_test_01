import { Link } from "react-router-dom";
import Assets from "../assets/AssetsCommon";
import FrontendRoutes from "../routes/FrontendRoutes";

const OutletArticle = ({data}) => {
  if (data) {
    return (
      <div className="layout-outlet-article" style={{
        background: `linear-gradient(0deg, rgba(22, 60, 128, 0.8) 0%, rgba(22, 60, 128, 0.8) 100%), url(${data?.img}) no-repeat center`,
        backgroundSize: "cover"
      }}>
        <h3>{data?.title}</h3>
        <p className="mt-3">{data?.text}</p>
        <Link to={data?.url} className="mt-6 button color white primary-border-hover primary-bg-hover">
          <b>{data?.linkText}</b>
        </Link>
      </div>
    )
  } else return null;
}

export default OutletArticle;