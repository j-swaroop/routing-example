// Write your JS code here
import {Link} from "react-router-dom"
import "./index.css"

const Header = () => {
    return(
        <nav className="nav-header">
            <div className="nav-items">
                <div className="logo-container">
                    <img className="logo" src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png " 
                        alt="wave"/>
                    <p className="title"> Wave</p>
                </div>
                <ul className="nav-headers">
                    <li>
                        <Link className="nav-link" to="/"> Home </Link>
                    </li>
                    <li>
                        <Link className="nav-link" to="/about"> About </Link>
                    </li>
                    <li> 
                        <Link className="nav-link" to="/contact"> Contact </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header