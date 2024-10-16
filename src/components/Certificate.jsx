import '../styles/Certificate.css'
import cert from '../assets/certificate.webp'
function Certificate() {
    return (
        <>
            <div className="certificate section-div">
                <div className="certificate-top">
                    <h2 className="section-heading">Certificate of internship</h2>
                    <div className="certificate-text">Along with a stipend of ₹10K, we are also providing an official internship certificate to all successful candidates, validating your experience and contribution to Kraftmonk.</div>
                </div>
                <img src={cert} alt="Certificate" className="certificate-img" />
            </div>
        </>
    );
}

export default Certificate;