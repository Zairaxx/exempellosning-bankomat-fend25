import { Link } from "react-router-dom"

const NavBar = () => {
    return <nav>
      <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/contact"> Contact us</Link>
        </li>
        <li></li>
      </ul>
    </nav>
}

export default NavBar