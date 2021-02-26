const Layout = ({children, style}) => {

  return (
    <div className="layout" style={style}>
      {children}
    </div>
  )
}

export default Layout;