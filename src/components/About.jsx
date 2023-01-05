import React from 'react'
import AboutIcon0 from "../image/about-img.png"
import AboutIcon1 from "../image/about-icon-1.png"
import AboutIcon2 from "../image/about-icon-2.png"
import AboutIcon3 from "../image/about-icon-3.png"
import { Link } from 'react-router-dom'
import Header from "./Header";
import Footer from './Footer';
import "../css/index.css"

const About = () => {
    return (
        <>
            <Header />
            <section className="about" id="about">

                <h1 className="heading"> about us <span>why choose us</span> </h1>

                <div className="row">

                    <div className="image">
                        <img src={AboutIcon0} alt="" />
                    </div>

                    <div className="content">
                        <h3 className="title">what's make our coffee special!</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse et commodi, ad, doloremque obcaecati maxime quam minima dolore mollitia saepe quos, debitis incidunt. Itaque possimus adipisci ipsam harum at autem.</p>
                        <Link to="#" className="btn">read more</Link>
                        <div className="icons-container">
                            <div className="icons">
                                <img src={AboutIcon1} alt="" />
                                <h3>quality coffee</h3>
                            </div>
                            <div className="icons">
                                <img src={AboutIcon2} alt="" />
                                <h3>our branches</h3>
                            </div>
                            <div className="icons">
                                <img src={AboutIcon3} alt="" />
                                <h3>free delivery</h3>
                            </div>
                        </div>
                    </div>

                </div>

            </section>
            <Footer />
        </>
    )
}

export default About