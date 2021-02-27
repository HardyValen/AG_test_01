import { useState } from "react";

const CarsXL7Nav = () => {
  const [activeSection, setActiveSection] = useState(0);
  const links = [
    {
      href: "#overview",
      value: "Overview"
    },
    {
      href: "#tipe-warna",
      value: "Tipe/Warna"
    },
    {
      href: "#exterior",
      value: "Exterior"
    },
    {
      href: "#interior",
      value: "Interior"
    },
    {
      href: "#spesifikasi",
      value: "Spesifikasi"
    },
    {
      href: "#harga",
      value: "Harga"
    },
  ]

  return (
    <div className="page-nav-wrapper font size-small">
      {links.map((data, index) => <a className={`page-nav-pill ${activeSection === index ? "active" : null}`} key={index} href={data.href} onClick={() => {setActiveSection(index)}}>{data.value}</a>)}
    </div>
  )
}

export default CarsXL7Nav;