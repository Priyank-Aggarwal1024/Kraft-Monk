import '../styles/Navbar.css'
import arrowupright from '../assets/arrowupright.svg'
import hamburger from '../assets/hamburger.svg'
import { Link } from 'react-router-dom';
function Navbar() {
    return (
        <>
            <div className="navbar">
                <div className="logo">Kraft Monk.</div>
                <div className="navbar-right">
                    <Link to={"/"} className="navbar-right-link nav-link-1">Work</Link>
                    <Link to={"/"} className="navbar-right-link nav-link-1">Services</Link>
                    <div className="flex">
                        <div className="navbar-right-link navbar-link-orange">
                            <p className="">Schedule a call</p>
                            <img src={arrowupright} alt="Arrow Up Right" />
                        </div>
                        <img src={hamburger} alt="Hamburger" className="navbar-hamburger" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;