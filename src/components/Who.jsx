import '../styles/Who.css'
import wc1 from '../assets/wc1.svg'
import wc2 from '../assets/wc2.svg'
import wc3 from '../assets/wc3.svg'
function Who() {
    return (
        <>
            <div className="who section-div">
                <div className="who-heading">Who is it for?</div>
                <div className="who-cards">
                    <div className="who-card">
                        <div className="wc-top">
                            <img src={wc1} alt="Student" />
                        </div>
                        <div className="wc-bottom">
                            <div className="wc-heading">Students</div>
                            <div className="wc-line"></div>
                            <div className="wc-text">Learners who want to gain practical experience and use their skills in real projects.</div>

                        </div>
                    </div>
                    <div className="who-card">
                        <div className="wc-top">
                            <img src={wc2} alt="Working Professionals" />
                        </div>
                        <div className="wc-bottom">
                            <div className="wc-heading">Working Professionals</div>
                            <div className="wc-line"></div>
                            <div className="wc-text">Those looking to upskill, explore new career paths, or work on side projects to expand their expertise.</div>

                        </div>
                    </div>
                    <div className="who-card">
                        <div className="wc-top">
                            <img src={wc3} alt="Freelancers" />
                        </div>
                        <div className="wc-bottom">
                            <div className="wc-heading">Freelancers</div>
                            <div className="wc-line"></div>
                            <div className="wc-text">Self-starters seeking to sharpen their skills, expand their portfolio by working on meaningful projects.</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Who;