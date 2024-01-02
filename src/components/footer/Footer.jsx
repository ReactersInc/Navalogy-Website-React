import { ICONS } from '../../assets'
import { NavLink } from 'react-router-dom'

import './footer.css'

const Footer = () => {
    return (
        <div id='footerContainer' >

            <div id="footer">
                <div className="main">
                    <img src={ICONS.logo} alt="Navalogy Logo" className='logo' />
                    <h2>We Would Love <br /> to hear from you </h2>
                    <p>Feel free to reach out  if you want to collaborate with us, or simply have a chat</p>


                    {/* create a mailto link  */}
                    <a href="mailto:team.navalogy@gmail.com" className="email">
                        <span>team.navalogy@gmail.com</span>
                        <img src={ICONS.arrow} />
                    </a>

                </div>

                <div className="info">

                    <div className="info1">
                        <div id="addressContainer">
                            <h3>Our Address</h3>
                            <p>Dept. of CSE, Tezpur University, Napaam, SDN-IoMT Lab, Tezpur, Assam 784028, IN</p>
                            <p>Tezpur Assam</p>
                            {/* <p>Phone: (123) 456-7890</p> */}
                        </div>

                        <div id="socialContainer">
                            <h3>Follow Us</h3>
                            <a href="instagram"><img src={ICONS.instagram} alt="Instagram" /></a>
                            <a href="https://www.linkedin.com/company/navalogy-club/?originalSubdomain=in"><img src={ICONS.linkedin} alt="Linkedin" /></a>
                        </div>
                    </div>

                    <div id="footerLinks">
                        <NavLink to="/" className="navLink" activeclassname="active" exact='true' >Home</NavLink>
                        <NavLink to="/portfolio" className="navLink" activeclassname="active" exact='true' >Portfolio</NavLink>
                        <NavLink to="/team" className="navLink" activeclassname="active" exact='true' >Team</NavLink>
                        <NavLink to="/contact" className="navLink" activeclassname="active" exact='true' >Contact</NavLink>
                        <NavLink to="/publication" className="navLink" activeclassname="active" exact='true' >Publications</NavLink>
                    </div>
                </div>

            </div>

        </div>
    )
}





export default Footer