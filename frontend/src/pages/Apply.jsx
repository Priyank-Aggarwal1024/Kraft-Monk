import '../styles/Apply.css'
import logo from '../assets/logo.svg'
import { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
function Apply() {
    const [data, setData] = useState(null);
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const handleChange = ({ target }) => {
        const { name, value } = target;
        setData(() => ({ ...data, [name]: value }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(data)
        if (!data?.name) {
            setError("Name is required");
            return;
        }
        else if (!data?.email) {
            setError("Email is required");
            return;
        }
        else if (!data?.number) {
            setError("WhatsApp Number is required");
            return;
        }
        try {
            const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/apply`, { details: data })
            console.log(res)
            if (!res.data?.error) {
                navigate("/congrats")
            }
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <>
            <div className="apply-main">
                <div className="apply-main-inner">
                    <div className="ami-top">
                        <img src={logo} alt="Logo" />
                        <div className="ami-logo-name">Kraft Monk.</div>
                    </div>
                    <form className="apply-form">
                        <div className="apply-form-inner">
                            <input type="text" className="apply-input" name="name" onChange={handleChange} value={data?.name || ""} placeholder="Name" />
                            <input type="email" className="apply-input" name="email" onChange={handleChange} value={data?.email || ""} placeholder="Email" />
                            <input type="text" className="apply-input" name="number" onChange={handleChange} value={data?.number || ""} placeholder="WhatsApp Number" />
                            <div className="apply-input-profession">
                                <div className="apply-input-radiogroup">
                                    <input type="radio" name="profession" onChange={handleChange} value={"College student"} id='prof-college-student' />
                                    <label htmlFor="prof-college-student">College student</label>
                                </div>
                                <div className="apply-input-radiogroup">
                                    <input type="radio" name="profession" onChange={handleChange} value={"Fresh graduate"} id='prof-fresh-grad' />
                                    <label htmlFor="prof-fresh-grad">Fresh graduate</label>
                                </div>
                                <div className="apply-input-radiogroup">
                                    <input type="radio" name="profession" onChange={handleChange} value={"Working professional"} id='prof-wprking-profess' />
                                    <label htmlFor="prof-wprking-profess">Working professional</label>
                                </div>

                            </div>
                            {
                                error && <p className="apply-form-error">{error}</p>
                            }
                        </div>
                        <button className="apply-form-button" onClick={handleSubmit}>Apply now</button>
                    </form>

                </div>
            </div>
        </>
    );
}

export default Apply;