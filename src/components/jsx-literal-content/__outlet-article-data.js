import Assets from "../../assets/AssetsCommon";
import FrontendRoutes from "../../routes/FrontendRoutes";

const OUTLET_ARTICLE_DATA = [
  {
    id: 1,
    img: Assets.outlet.pemesanan,
    title: "PEMESANAN SERVIS",
    text: "Tetap nyaman dan aman berkendara dengan servis rutin kendaraan Suzuki",
    linkText: "PESAN SERVIS",
    url: FrontendRoutes.cars.xl7.home
  },
  {
    id: 2,
    img: Assets.outlet.sukucadang,
    title: "SUKU CADANG & AKSESORIS",
    text: "Temukan berbagai suku cadang dan aksesoris kendaraan Suzuki Anda",
    linkText: "SELENGKAPNYA",
    url: FrontendRoutes.cars.xl7.home
  },
]

export default OUTLET_ARTICLE_DATA