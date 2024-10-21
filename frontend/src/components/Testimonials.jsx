import '../styles/Testimonials.css'
import quotes from '../assets/quotes.svg'
import starf from '../assets/star_full.svg'
import starh from '../assets/star_half.svg'
import avatar1 from '../assets/avatar1.svg'
import avatar2 from '../assets/avatar2.svg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import RightArrow from './RightArrow'
import LeftArrow from './LeftArrow'
import graystar from '../assets/graystar.svg'
import { useState } from 'react'
function Testimonials() {
    const testimonial = [
        {
            head: "Must-have app for students",
            desc: "I got my first internship from here. Kraftmonk is must for career oriented students. This app has a lot of opportunities for every kind of students.",
            name: "Yogesh Singh",
            star: 4,
            avatar: avatar1
        },
        {
            head: "I landed a job at Amazon",
            desc: "I applied to Amazon and got the job! It was my dream. I wanted to get in tech but I was from electrical background. My friend suggested Data Science Placement Guarantee Course. In the course, I learnt SQL, Python, Tableau & worked on a lot of projects which came in handy in my interviews. I was able to explain the concepts and applications well. The placement team helped me with everything.",
            name: "Yaswanth Mandapati",
            star: 5,
            avatar: avatar2
        }
    ]
    const [width, setWidth] = useState(window.innerWidth);
    window.addEventListener("resize", () => {
        setWidth(window.innerWidth);
    })
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: width > 840 ? 2 : 1,
        slidesToScroll: 1,
        nextArrow: <RightArrow />,
        prevArrow: <LeftArrow />
    };
    return (
        <>
            <div className="testimonials">
                <div className="testmonial-left">
                    <img src={quotes} alt="Quotation Mark" className="test-quot" />
                    <div className="test-l-head">Join the pool of 21Mn+
                        students and get started with
                        your career</div>
                    <div className="test-rating">
                        <div className="test-rating-left">
                            4.2
                        </div>
                        <div className="test-rating-right">
                            <div className="test-rr-top">
                                <img src={starf} alt="Star Full" />
                                <img src={starf} alt="Star Full" />
                                <img src={starf} alt="Star Full" />
                                <img src={starf} alt="Star Full" />
                                <img src={starh} alt="Star Half" />
                            </div>
                            <div className="test-rr-bottom">(39K Reviews)</div>
                        </div>
                    </div>
                </div>
                <Slider
                    {...settings}
                    className="testimonial-cards"
                >
                    {
                        testimonial.map((item, idx) =>
                            <div className="testmonial-card" key={idx} style={{ display: "flex" }}>
                                <div className="">
                                    <div className="test-card-top">{item.head}</div>
                                    <div className="test-card-middle">{item.desc}</div>
                                </div>
                                <div className="test-card-bottom">
                                    <div className="tcb-avatar">
                                        <img src={item.avatar} alt={item.head} />
                                    </div>
                                    <div className="tcb-detail">
                                        <div className="tcb-name">{item.name}</div>
                                        <div className="tcb-rating">
                                            {
                                                Array.from({ length: item.star }).map((it, id) => <img key={id} src={starf} className="tcb-rating-star" />)
                                            }
                                            {
                                                Array.from({ length: 5 - item.star }).map((it, id) => <img key={id} src={graystar} className="tcb-rating-star" />)
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </Slider>
            </div>
        </>
    );
}

export default Testimonials;