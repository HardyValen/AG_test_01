import { XL7_SPEC_RATIO_GEAR_DATA } from "./jsx-literal-content/__xl7-cars-spec-data"
import CollapsibleWrapper from "./__collapsible-wrapper"

const CarsXL7RatioCollapsible = () => {
  return (
    <CollapsibleWrapper title="TRANSMISI">
      <table className="cars-table-spec-wrapper">
        <tbody>
          <tr>
            <th>Perbandingan Gigi Akhir</th>
            <td>3.545 / 2.875</td>
          </tr>
          <tr>
            <th>Ratio Gear</th>
            <td>
              <table>
                <tbody>
                  {XL7_SPEC_RATIO_GEAR_DATA.map((data, index) => {
                    return (
                      <tr key={index}>
                        <td className="p-1">{data[0]}</td>
                        <td className="p-1">{data[1]}</td>
                        <td className="p-1">{data[2]}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </CollapsibleWrapper>
  )
}

export default CarsXL7RatioCollapsible