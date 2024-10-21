import { useState } from 'react';
import '../styles/Curriculum.css'
import lightdot from '../assets/lightdot.svg'
import darkdot from '../assets/darkdot.svg'
import smalldot from '../assets/smalldot.svg'
function Curriculum() {
    const [currArr, setCurrArr] = useState([
        {
            ques: "Content creation & generating inbound leads",
            ans: "Learn the essentials of creating engaging, high-quality content that attracts potential leads. This week focuses on strategies for boosting visibility and driving organic traffic to your business.",
            open: true
        },
        {
            ques: "Influencer partnership via email marketing",
            ans: "Learn the essentials of creating engaging, high-quality content that attracts potential leads. This week focuses on strategies for boosting visibility and driving organic traffic to your business.",
            open: false
        },
        {
            ques: " Instagram Marketing & target interested leads",
            ans: "Learn the essentials of creating engaging, high-quality content that attracts potential leads. This week focuses on strategies for boosting visibility and driving organic traffic to your business.",
            open: false
        },
        {
            ques: " Conclusion",
            ans: "Learn the essentials of creating engaging, high-quality content that attracts potential leads. This week focuses on strategies for boosting visibility and driving organic traffic to your business.",
            open: false
        },
    ])
    const handleFaqOpen = (idx) => {
        let newArr = currArr.map((item, i) => {
            if (i == idx) {
                item.open = !item.open;
                return item
            }
            else {
                item.open = false;
                return item
            }
        })
        setCurrArr(newArr);
    }
    return (
        <>
            <div className="curriculum">
                <div className="curriculum-heading">
                    Curriculum
                </div>
                <div className="curr-acc-outer">
                    <div className="curr-acc-left">
                        {
                            currArr.map((item, idx) => <div className="curr-accl-div" key={idx}>
                                {
                                    (item.open) ? <img src={darkdot} alt="Darkdot" /> : <img src={lightdot} alt="LightDot" />
                                }
                                {((idx != currArr.length - 1) || (idx == 2 && currArr[3].open)) && <img src={smalldot} alt='Small Dot' className="small-dot" />}
                                {
                                    ((item.open && idx != currArr.length - 1) || (idx == 2 && currArr[3].open)) && [1, 2].map((it, id) => <img key={id} src={smalldot} alt='Small Dot' className="small-dot" />)
                                }
                                { }
                            </div>)
                        }
                    </div>
                    <div className="curr-acc">
                        {
                            currArr.map((item, idx) => (<div className="curr-faq" key={idx}>
                                <div className="curr-faq-top"
                                    onClick={() => handleFaqOpen(idx)}
                                >

                                    <div className="curr-faq-ques">
                                        <span className="text-orange">Week {idx + 1} : </span>
                                        <span className="">{item.ques}</span>
                                    </div>
                                    <div className="curr-faq-arrow" style={{ rotate: item.open ? "180deg" : "0deg" }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="15" viewBox="0 0 25 15" fill="none">
                                            <path d="M23 13.5L12.5 3L2 13.5" stroke="#FE3900" strokeWidth="4.2" />
                                        </svg>
                                    </div>
                                </div>
                                {
                                    item.open && <div className="curr-faq-ans">
                                        {item.ans}
                                    </div>
                                }
                            </div>))
                        }
                    </div>
                </div>

            </div>
        </>
    );
}

export default Curriculum;