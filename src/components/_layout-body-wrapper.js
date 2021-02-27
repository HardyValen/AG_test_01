const LayoutBody = ({children}) => {

  return (
    <div className="body">
      <div className="row">
        <div className="offset-md-4 col-md-4">
          {children}
        </div>
      </div>
    </div>
  )
}

export default LayoutBody;