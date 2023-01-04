import React from 'react'
import "../index.css"
import Header from "./Header"
const Booking = () => {
  return (
<>
<Header/>
<br></br>
<br></br>
<br></br>
<section class="book" id="book">

    <h1 class="heading"> booking <span>reserve a table</span> </h1>

    <form action="">

        <input type="text" placeholder="Name" class="box"/>
        <input type="email" placeholder="Email" class="box"/>
        <input type="tel" placeholder="Phone Number" class="box"/>

        <textarea name="" placeholder="Message" class="box" id="" cols="30" rows="10"></textarea>

        <input type="submit" value="send message" class="btn"/>

    </form>
</section>

</>
  )
}

export default Booking