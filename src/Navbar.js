import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/CalcApp" className="site-title">Calculator</Link>
      <Link to="/About" className="site-title AH" >About</Link>
      <Link to="/Help" className="site-title AH">Help</Link>
    </nav>
  )
}