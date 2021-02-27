import Collapsible from "react-collapsible"
import CollapsibleHeader from "./__collapsible-header"

const CollapsibleWrapper = ({children, title}) => {
  return (
    <div className="color white-bg my-4">
      <Collapsible 
        trigger={<CollapsibleHeader title={title} active={false}/>} 
        triggerWhenOpen={<CollapsibleHeader title={title} active={true}/>}
        easing="ease-in-out" 
        transitionTime={100}
      >
        <div className="p-5">
          {children}
        </div>
      </Collapsible>
    </div>
  )
}

export default CollapsibleWrapper