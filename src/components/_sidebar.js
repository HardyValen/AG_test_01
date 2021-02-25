import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { forwardRef, useEffect, useState } from "react"
import Assets from "../assets/AssetsCommon";

const Sidebar = forwardRef((props, ref) => {
  // const [opacity, setOpacity] = useState(150)

  return (
    <div className="sidebar" ref={ref}>
      <div className="sidebar-body">
        <div className="sidebar-links mb-6">
          <a className="sidebar-link mb-5" href="#">Beranda</a>
          <a className="sidebar-link mb-5" href="#">Tentang Kami</a>
          <a className="sidebar-link mb-5" href="#">Mobil</a>
          <a className="sidebar-link mb-5" href="#">Service</a>
          <a className="sidebar-link mb-5" href="#">Sparepart</a>
          <a className="sidebar-link mb-5" href="#">Hubungi Kami</a>
        </div>
        <div className="sidebar-button button color white primary-bg mb-6">
          <FontAwesomeIcon icon={['fas', 'phone-alt']}/> (022) 5204645
        </div>
        <div className="sidebar-logos">
          <img className="img-1" src={Assets.haloSuzuki} alt=""/>
          <img className="img-2 ml-5" src={Assets.mySuzuki} alt=""/>
        </div>
      </div>
      <div className="sidebar-footer">
        <p>
          &copy; 2020 Suzuki Indonesia.<br/>
          All rights reserved.
        </p>
      </div>
    </div>
  )
})

export default Sidebar;