import React from 'react'
import "../index.css"
import Img1 from "../image/home-img-1.png"
import Img2 from "../image/home-img-2.png"
import Img3 from "../image/home-img-3.png"
import Header from './Header';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <section class="home" id="home">
        <Header />
        <div class="row">

          <div class="content">
            <h3>fresh coffee in the morning</h3>
            <Link to="/menu" class="btn">BUY ONE NOW</Link>
          </div>

          <div class="image">
            <img src={Img1} class="main-home-image" alt="image" />
          </div>

        </div>

        <div class="image-slider">
          <img src={Img1} alt="image" />
          <img src={Img2} alt="image" />
          <img src={Img3} alt="image" />

        </div>
      </section>
    </>

  )
}

export default Home