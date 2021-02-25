import { forwardRef, useEffect, useState } from "react"

const Sidebar = forwardRef((props, ref) => {
  // const [opacity, setOpacity] = useState(150)

  return (
    <div className="sidebar" ref={ref}>
      Sidebar
    </div>
  )
})

export default Sidebar;