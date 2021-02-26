import { forwardRef } from "react"
import Assets from "../assets/AssetsCommon";
import LC_COPYRIGHT from "./jsx-literal-content/__copyright";
import LC_TELEPON from "./jsx-literal-content/__telepon";

const Sidebar = forwardRef((props, ref) => {

  return (
    <div className="sidebar" ref={ref}>
      <div className="sidebar-body">
        <div className="sidebar-links mb-6">
          <a className="sidebar-link mb-5" href="/">Beranda</a>
          <a className="sidebar-link mb-5" href="/">Tentang Kami</a>
          <a className="sidebar-link mb-5" href="/">Mobil</a>
          <a className="sidebar-link mb-5" href="/">Service</a>
          <a className="sidebar-link mb-5" href="/">Sparepart</a>
          <a className="sidebar-link mb-5" href="/">Hubungi Kami</a>
        </div>
        <div className="sidebar-button button color white primary-bg primary-2-bg-hover mb-6">
          <LC_TELEPON/>
        </div>
        <div className="sidebar-logos">
          <img className="img-1" src={Assets.haloSuzuki} alt=""/>
          <img className="img-2 ml-5" src={Assets.mySuzuki} alt=""/>
        </div>
      </div>
      <div className="sidebar-footer">
        <LC_COPYRIGHT/>
      </div>
    </div>
  )
})

export default Sidebar;