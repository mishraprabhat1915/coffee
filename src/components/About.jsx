import React from 'react'
import AboutIcon0 from "../image/about-img.png"
import AboutIcon1 from "../image/about-icon-1.png"
import AboutIcon2 from "../image/about-icon-2.png"
import AboutIcon3 from "../image/about-icon-3.png"
import Header from './Header'
const About = () => {
  return (
<>
<Header/>
<section class="about" id="about">

<h1 class="heading"> about us <span>why choose us</span> </h1>    

<div class="row">

    <div class="image">
        <img src={AboutIcon0} alt=""/>
    </div>

    <div class="content">
        <h3 class="title">what's make our coffee special!</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse et commodi, ad, doloremque obcaecati maxime quam minima dolore mollitia saepe quos, debitis incidunt. Itaque possimus adipisci ipsam harum at autem.</p>
        <a href="#" class="btn">read more</a>
        <div class="icons-container">
            <div class="icons">
                <img src={AboutIcon1} alt=""/>
                <h3>quality coffee</h3>
            </div>
            <div class="icons">
                <img src={AboutIcon2} alt=""/>
                <h3>our branches</h3>
            </div>
            <div class="icons">
                <img src={AboutIcon3} alt=""/>
                <h3>free delivery</h3>
            </div>
        </div>
    </div>

</div>

</section>

</>
  )
}

export default About