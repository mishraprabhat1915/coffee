import React from 'react'
import "../css/index.css"
import ReviewPic1 from "../image/pic-1.png"
import ReviewPic2 from "../image/pic-2.png"
import ReviewPic3 from "../image/pic-3.png"
import ReviewPic4 from "../image/pic-4.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import Header from './Header';
import Footer from './Footer'

const Review = () => {
  return (
    <>
    <Header/>
    <section className="review" id="review">

    <h1 className="heading"> reviews <span>what people says</span> </h1>

    <div className="swiper review-slider">

        <div className="swiper-wrapper">

            <div className="swiper-slide box">
                <i className="fas fa-quote-left"></i>
                <i className="fas fa-quote-right"></i>
                <img src={ReviewPic1} alt=""/>
                <div className="stars">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore aliquid eveniet qui, similique aut sit.</p>
                <h3>john deo</h3>
                <span>satisfied client</span>
            </div>

            <div className="swiper-slide box">
                <i className="fas fa-quote-left"></i>
                <i className="fas fa-quote-right"></i>
                <img src={ReviewPic2} alt=""/>
                <div className="stars">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore aliquid eveniet qui, similique aut sit.</p>
                <h3>john deo</h3>
                <span>satisfied client</span>
            </div>

            <div className="swiper-slide box">
                <i className="fas fa-quote-left"></i>
                <i className="fas fa-quote-right"></i>
                <img src={ReviewPic3} alt=""/>
                <div className="stars">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore aliquid eveniet qui, similique aut sit.</p>
                <h3>john deo</h3>
                <span>satisfied client</span>
            </div>

            <div className="swiper-slide box">
                <i className="fas fa-quote-left"></i>
                <i className="fas fa-quote-right"></i>
                <img src={ReviewPic4} alt=""/>
                <div className="stars">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore aliquid eveniet qui, similique aut sit.</p>
                <h3>john deo</h3>
                <span>satisfied client</span>
            </div>

        </div>

        <div className="swiper-pagination"></div>

    </div>

</section>
<Footer/>
</>
  )
}

export default Review