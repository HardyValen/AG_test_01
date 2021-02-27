import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
const CollapsibleHeader = ({title, active = false}) => {

  return (
    <div className="collapsible-header px-5 py-4">
      <p className="font weight-bold">{title}</p>
      <p className="font weight-bold"><FontAwesomeIcon icon={['fas', (!active ? 'chevron-down' : 'chevron-up')]}/></p>
    </div>
  )  
}

export default CollapsibleHeader