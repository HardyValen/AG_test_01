import Assets from "../../assets/AssetsCommon";
import FrontendRoutes from "../../routes/FrontendRoutes";

const DEALER_ARTIKEL_DATA = [
  {
    id: 1,
    img: Assets.dealer.article01,
    title: "Promo Pembelian Berhadiah Periode Bulan September 2020",
    date: "18 Agustus 2020",
    url: FrontendRoutes.outlet.home
  },
  {
    id: 2,
    img: Assets.dealer.article02,
    title: "Suzuki Insurance – Ganti Mobil Anda Dengan Nilai yang Sama",
    date: "17 Agustus 2020",
    url: FrontendRoutes.outlet.home
  },
  {
    id: 3,
    img: Assets.dealer.article03,
    date: "16 Agustus 2020",
    title: "Suzuki Peduli Gempa Maluku 2019, Bentuk Kepedulian Untuk Korban",
    url: FrontendRoutes.outlet.home
  },
]

export default DEALER_ARTIKEL_DATA;