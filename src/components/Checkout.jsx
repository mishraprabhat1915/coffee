import React from 'react'
import Footer from './Footer'
import Header from './Header'
import checkoutImage from "../image/coffee.gif"
import "../css/CheckoutPage.css"
const Checkout = () => {
  return (
    <>
    <Header/>
    
    <section className='menu checkout'>
    <h1 className="heading"> THANK YOU FOR <span>SHOPPING</span> </h1>
        <img src={checkoutImage} alt='checkout'/>
    </section>
    <Footer/>
    </>
  )
}

export default Checkout