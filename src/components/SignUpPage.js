import React from 'react'
import "../index.css"
const SignUpPage = () => {
    return (
        <>
            <section class="book" id="book">

                <h1 class="heading"> WELCOME TO THE COFFEE SHOP <span>REGISTER </span> </h1>

                <form action="">

                    <input type="text" placeholder="Name" class="box" />
                    <input type="email" placeholder="Email" class="box" />
                    <input type="tel" placeholder="Password" class="box" />
                    <input type="submit" value="SIGN IN" class="btn" />

                </form>
            </section></>
    )
}

export default SignUpPage