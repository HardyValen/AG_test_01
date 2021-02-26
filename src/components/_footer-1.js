import LC_TELEPON from "./jsx-literal-content/__telepon"
import LC_LOCATION from "./jsx-literal-content/__google-maps"
import Assets from "../assets/AssetsCommon"

const Footer1 = ({classList, children}) => {
  return (
    <div className={["footer-1"].concat(classList).join(" ")}>
      <div className="footer-1-links">
        <a href="/">Beranda</a>
        <a href="/">Tentang&nbsp;Kami</a>
        <a href="/">Mobil</a>
        <a href="/">Service</a>
        <a href="/">Sparepart</a>
        <a href="/">Hubungi&nbsp;Kami</a>
      </div>
      <div className="footer-1-body">
        <div className="my-6">
          <h3 className="my-3">ALAMAT</h3>
          <p className="my-3">
            <b>SUZUKI Nusantara Jaya Sentosa</b><br/>
            Jl. Soekarno - Hatta no. 289, Bojongloa Kidul Bandung 40234
          </p>
          <div className="footer-1-buttons mt-4">
            <div className="button color primary white-bg primary-border primary-bg-hover white-hover mb-1">
              <b><LC_LOCATION/></b>
            </div>
            <div className="button color white primary-bg primary-2-bg-hover mb-1">
              <b><LC_TELEPON/></b>
            </div>
          </div>
        </div>

        <div className="my-6">
            <h3 className="my-3">HOTLINE 24 JAM (Bebas Pulsa)</h3>
            <div>
              <img src={Assets.haloSuzuki} alt=""/>
            </div>
        </div>

        <div className="my-6">
          <h3 className="my-3">DOWNLOAD MY SUZUKI</h3>
          <div>
            <img src={Assets.mySuzuki} alt=""/>
          </div>
          <div>
            <img src={Assets.ecstar} alt=""/>
          </div>
        </div>

      </div>
      {children}
    </div>
  )
}

export default Footer1;