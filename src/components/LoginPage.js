import React from 'react'
import "../index.css"
const LoginPage = () => {
    return (
        <>
            <section class="book" id="book">

                <h1 class="heading"> WELCOME TO THE COFFEE SHOP <span>Login</span> </h1>

                <form action="">

                    <input type="text" placeholder="Name" class="box" />
                    <input type="tel" placeholder="Password" class="box" />
                    <input type="submit" value="LOGIN" class="btn" />

                </form>
            </section>
        </>
    )
}

export default LoginPage