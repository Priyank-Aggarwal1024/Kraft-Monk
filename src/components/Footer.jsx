import '../styles/Footer.css'
import logo from '../assets/logo.svg'
import insta from '../assets/insta.svg'
import twitter from '../assets/twitter.svg'
import youtube from '../assets/youtube.svg'
import linkedin from '../assets/linkedin.svg'
function Footer() {
    return (
        <>
            <div className="footer-35"></div>
            <div className="footer">
                <div className="footer-top">
                    <div className="footer-logo">
                        <img src={logo} alt="Logo" />
                        <div className="footer-logo-name">Kraft Monk.</div>
                    </div>
                    <div className="footer-top-right">
                        <div className="">
                            <div className="footer-link">About us</div>
                            <div className="footer-link">We&apos;re hiring</div>
                            <div className="footer-link">Hire interns for your company</div>
                            <div className="footer-link">Post a Job</div>
                        </div>
                        <div className="">
                            <div className="footer-link">Team Diary</div>
                            <div className="footer-link">Blog</div>
                            <div className="footer-link">Our Services</div>
                        </div>
                        <div className="">
                            <div className="footer-link">Terms & Conditions</div>
                            <div className="footer-link">Privacy</div>
                            <div className="footer-link">Contact us</div>
                        </div>
                        <div className="">
                            <div className="footer-link">Sitemap</div>
                            <div className="footer-link">College TPO registration</div>
                            <div className="footer-link">List of Companies</div>
                        </div>
                    </div>
                </div>
                <div className="fotter-bottom">
                    <div className="footer-bottom-left">
                        <img src={insta} alt="Insta" />
                        <img src={twitter} alt="Twitter" />
                        <img src={youtube} alt="You Tube" />
                        <img src={linkedin} alt="Linkedin" />
                    </div>
                    <div className="fotter-bottom-copyright fotter-bottom-copyright-large">
                        © Copyright 2024 Kraft Monk
                        (Tutedude Private Limited)
                    </div>
                </div>
            </div>
            <div className="fotter-bottom-copyright-small">
                © Copyright 2024 Kraft Monk
                <p className="">(Tutedude Private Limited)</p>
            </div>
        </>
    );
}

export default Footer;