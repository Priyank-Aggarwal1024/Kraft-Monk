import { useState } from 'react';
import '../styles/Faq.css'
function Faq() {
    const [faq, setFaq] = useState([
        {
            ques: "I can't register for classes or tests online. What should I do?",
            ans: "I can't register for classes or tests online. What should I do?",
            open: true
        },
        {
            ques: "Is there a fee for the Orientation Test?",
            ans: "I can't register for classes or tests online. What should I do?",
            open: false
        },
        {
            ques: " Can I skip a level if I’ve passed the DELF exam?",
            ans: "I can't register for classes or tests online. What should I do?",
            open: false
        },
        {
            ques: "What’s the difference between DELF/DALF and the Orientation Test?",
            ans: "I can't register for classes or tests online. What should I do?",
            open: false
        },
        {
            ques: " How can I prepare for the DELF/TCF exams?",
            ans: "I can't register for classes or tests online. What should I do?",
            open: false
        },
        {
            ques: " Will I get a certificate after finishing my course?",
            ans: "I can't register for classes or tests online. What should I do?",
            open: false
        },
        {
            ques: "Can I change my batch or get a refund?",
            ans: "I can't register for classes or tests online. What should I do?",
            open: false
        },
        {
            ques: "Can I choose or change my teacher?",
            ans: "I can't register for classes or tests online. What should I do?",
            open: false
        },
        {
            ques: "Do you provide conversational classes?",
            ans: "I can't register for classes or tests online. What should I do?",
            open: false
        },
    ])
    const handleFaqOpen = (idx) => {
        let newArr = faq.map((item, i) => {
            if (i == idx) {
                item.open = !item.open;
                return item
            }
            else {
                item.open = false;
                return item
            }
        })
        setFaq(newArr);
    }
    return (
        <>
            <div className="faq section-div">
                <h2 className="section-heading text-center">Frequently Asked Questions</h2>
                <div className="faq-container">
                    {
                        faq.map((item, idx) => {
                            return (
                                <div className={`faq-div ${!item.open && "faq-close-border"}`} key={idx}>
                                    <div className="faq-div-left">
                                        <div className={`faq-ques ${item.open && "text-orange"}`}
                                            onClick={() => handleFaqOpen(idx)}
                                        >{item.ques}</div>
                                        {
                                            item.open === true && <div className="faq-ans">{item.ans}</div>
                                        }
                                    </div>
                                    <div className="faq-div-right"
                                        onClick={() => handleFaqOpen(idx)}
                                    >
                                        {
                                            item.open ? <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                <path d="M15 12.5L10 7.5L5 12.5" stroke="#FE3900" strokeWidth="2" />
                                            </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                <path d="M15 7.5L10 12.5L5 7.5" stroke="#4C4C4C" strokeWidth="2" />
                                            </svg>
                                        }
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    );
}

export default Faq;