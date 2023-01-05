import React from 'react'
import "../css/index.css"
import Header from "./Header";
import Footer from "./Footer";
const Booking = () => {
  return (
<>
<Header/>
<br></br>
<br></br>
<br></br>
<section className="book" id="book">

    <h1 className="heading"> booking <span>reserve a table</span> </h1>

    <form action="">

        <input type="text" placeholder="Name" className="box"/>
        <input type="email" placeholder="Email" className="box"/>
        <input type="tel" placeholder="Phone Number" className="box"/>

        <textarea name="" placeholder="Message" className="box" id="" cols="30" rows="10"></textarea>

        <input type="submit" value="send message" className="btn"/>

    </form>
</section>
<Footer/>
</>
  )
}

export default Booking