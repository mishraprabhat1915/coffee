import React from 'react'
import "../css/index.css"
import Img1 from "../image/home-img-1.png"
import Img2 from "../image/home-img-2.png"
import Img3 from "../image/home-img-3.png"
import { Link } from 'react-router-dom';
import Header from './Header'
import Footer from './Footer'


const Home = () => {
  return (
    <>
      <section className="home" id="home">
        <Header />
        <div className="row">

          <div className="content">
            <h3>fresh coffee in the morning</h3>
            <Link to="/menu" className="btn">BUY ONE NOW</Link>
          </div>

          <div className="image">
            <img src={Img1} className="main-home-image" alt="coffeeImage" />
          </div>

        </div>

        <div className="image-slider">
          <img src={Img1} alt="coffeeImage" />
          <img src={Img2} alt="coffeeImage" />
          <img src={Img3} alt="coffeeImage" />

        </div>
      </section>
      <Footer/>
    </>

  )
}

export default Home