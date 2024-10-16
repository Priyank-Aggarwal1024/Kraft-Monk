import '../styles/Hero.css'
import rightarrow2 from '../assets/rightarrow2.svg'
import { FiArrowDownRight } from "react-icons/fi";
import bd1 from '../assets/bd1.svg'
function Hero() {
    return (
        <>
            <div className="hero">
                <div className="hero-top">
                    <p className="hero-para">
                        Kraft Monk - Internship
                    </p>
                    <h2 className="hero-heading">
                        <span> Sales,</span><span className="text-orange"> Marketing & branding</span> <span> internship program</span>
                        <img src={rightarrow2} alt="Right Arrow 2" className='right-arrow-2' />
                    </h2>
                </div>
                <div className="hero-bottom">
                    <span>Apply Now</span>
                    <FiArrowDownRight size="36" />

                </div>
            </div>
            <div className="craft-career">
                <img src={bd1} alt="Background-design" className="cc-background-design" />
                <div className="cc-main">
                    <div className="cc-heding">
                        Craft Your Career with Kraftmonk Intern and Earn Up to ₹10K!
                    </div>
                    <div className="cc-apply-top">
                        <div className="cc-apply">Apply now</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Hero;