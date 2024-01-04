import { ICONS} from '../../assets'
import { Button } from '../'
import { Link, NavLink } from 'react-router-dom'

import './header.css'

const Header = () => {
  return (
    <header id='header' >
        <Link to="/" className="logoLink">
            <div id="logoContainer">
                <div id="mainLogo">
                    <img src= {ICONS.logo} alt="./Navalogy-Logo"/> 
                </div>
                <h2 id="logoText">Navalogy</h2>  
                
            </div>
        </Link>

        <div id="navLinks">
            <NavLink to="/portfolio" className="navLink" activeclassname="active" exact = 'true' >Portfolio</NavLink>
            <NavLink to="/team" className="navLink" activeclassname="active" exact = 'true' >Team</NavLink>
            <NavLink to="/contact" className="navLink" activeclassname="active" exact = 'true' >Contact</NavLink>
            <NavLink to="/publication" className="navLink" activeclassname="active" exact = 'true' >Publications</NavLink>
        </div>

        <div className="btnContainer" /*style={{visibility : 'hidden'}}*/>
            <Link to = "#" className="btnLink">
                <Button text="Get Started"/>
            </Link>
        </div>
    </header>
  )
}

export default Header