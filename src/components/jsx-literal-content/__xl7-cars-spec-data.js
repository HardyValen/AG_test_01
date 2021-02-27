const XL7_SPEC_DATA = [
  {
    value: "DIMENSI",
    data: {
      "Panjang Keseluruhan": "4,450 mm",
      "Lebar Keseluruhan": "1,775 mm",
      "Tinggi Keseluruhan": "1,710 mm",
      "Jarak Poros Roda": "2,740 mm",
      "Jarak Pijak Depan": "1,515 mm",
      "Jarak Pijak Belakang": "1,530 mm",
      "Jarak Terendah": "5,1",
      "Radius Putar Minimum": "200 mm"
    }
  },
  {
    value: "MESIN",
    data: {
      "Jenis": "K15B",
      "Isi Silinder": "4",
      "Jumlah Katup": "16",
      "Jumlah Silinder": "1.462 cc",
      "Diameter x Langkah": "74,7 x 85,0 mm",
      "Perbandingan Kompresi": "10,5",
      "Daya Maksimum": "77 kW, (104,7ps / 6000) KW / rpm",
      "Momen Inersia Maksimum": "138 / 4.400 Nm / rpm",
      "Sistem Bahan Bakar": "Multipoint Injection"
    }
  },
  {
    value: "BERAT",
    data: {
      "Berat Kosong": "1.145 kg (5 MT), 1.165 kg (6 AT)",
      "Berat Kotor": "1.670 kg",
    }
  },
  {
    value: "RANGKA",
    data: {
      "Sistem Kemudi": "Rack & Pinion",
      "Suspensi Depan": "McPherson Strut with Coil Spring",
      "Suspensi Belakang": "Drum, leading & trailing",
      "Rem Depan": "Ventilated Disc",
      "Rem Belakang": "Torsion Beam with Coil Spring",
      "Ukuran Ban": "195 / 60 R16"
    }
  },
  {
    value: "KAPASITAS",
    data: {
      "Tempat Duduk": "7 Persons",
      "Tangki Bahan Bakar": "45 liters",
    }
  },
]

const XL7_SPEC_RATIO_GEAR_DATA = [
  ["Gear", "M/T", "A/T"],
  ["1st", "3.909", "2.875"],
  ["2st", "2.043", "1.568"],
  ["3rd", "1.407", "1.000"],
  ["4th", "1.065", "0.697"],
  ["5th", "0.769", "N/A"],
  ["Reverse", "3.250", "2.300"],
]

export { XL7_SPEC_DATA, XL7_SPEC_RATIO_GEAR_DATA }