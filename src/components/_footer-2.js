import LC_COPYRIGHT from "./jsx-literal-content/__copyright"

const Footer2 = ({classList, children}) => {
  return (
    <div className={["footer-2"].concat(classList).join(" ")}>
      <LC_COPYRIGHT/>
      {children}
    </div>
  )
}

export default Footer2;