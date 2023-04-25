import "./navbar.css"
import logo from "../../SVG/Asset 1@2x.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {   faUser, } from '@fortawesome/free-solid-svg-icons'
import Registerproperty from "../../pages/Registerproperty/Registerproperty"
import { Link } from 'react-router-dom';

const Navbar = () => {

    return(
        <div className="navbar">
            <div className="navContainer">
                {/* <span className="logo">Sstoker</span> */}
                {/* <img className="logo" src={logo}/> */}
                <img src={logo} alt="" className="logo" />
                
                <div className="navItems">
                    {/* <button className="navButton">Register Property</button> */}

                    <button>
                        <Link className = "navButton" to="/Registerproperty"> Register Property</Link>
                    </button>

                    <button className="navButton2" href="../../pages/Registeruser">
                    <FontAwesomeIcon icon={faUser} />
                    </button>

                </div>
            </div>
        </div>
    )
}

export default Navbar