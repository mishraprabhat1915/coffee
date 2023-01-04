import React, { useEffect } from 'react'
import "../index.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMugHot, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import avatar from "../image/avatar.png"
import { motion } from 'framer-motion';
import { useHistory, Link } from 'react-router-dom';
import { auth } from "../firebase"
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { useSelector } from 'react-redux';
// import { useSelector,useDispatch } from 'react-redux'
// import { getCartTotal } from '../features/cartSlice';

const Header = () => {
  const cart = useSelector(
    (state) => state.cart
  );

  const noOfItems = cart.reduce((acc, curr) => acc + curr.quantity, 0)
  console.log({noOfItems})
  // const {cart,totalQuantity} = useSelector((state) => state.allCart)
  // const dispatch = useDispatch();
  // useEffect(() => {
  //     dispatch(getCartTotal())
  // }, [cart])

  const history = useHistory();
  const profilePic = localStorage.getItem("profilePic")
  const user = localStorage.getItem("Name")
  let isLoggedIn = user ? true : false;
  const provider = new GoogleAuthProvider();
  const signInwithGoogle = () => {
    signInWithPopup(auth, provider).then((result => {
      localStorage.setItem("Name", result.user.displayName)
      localStorage.setItem("Email", result.user.email)
      localStorage.setItem("profilePic", result.user.photoURL)
      window.location.reload();
    })).catch((error) => console.log(error))
  }

  const loggingOut = () => {
    localStorage.clear();
    history.push("/");
    window.location.reload();
  }
  return (
    <header class="header">

      <div id="menu-btn" class="fas fa-bars"></div>

      <Link to="/" class="logo"> coffee <FontAwesomeIcon icon={faMugHot} />
      </Link>

      <nav class="navbar">
        <Link to="/">HOME</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/menu">MENU</Link>
        <Link to="/review">REVIEW</Link>
        <Link to="/book">BOOK</Link>
      </nav>

      {/* <a href="#" class="btn">BOOK A TABLE</a> */}
      <div className='side-menu'>
        <Link to="/cart"><motion.p className='btn1' whileTap={{ scale: 0.5 }}> <FontAwesomeIcon icon={faCartShopping} className="logo" /> </motion.p></Link>
        <p className='cart-data'>{noOfItems}</p>

        {isLoggedIn &&
          (<>
            <motion.img whileTap={{ scale: 0.5 }} src={profilePic} className="Avatar" />
            <motion.button whileTap={{ scale: 0.5 }} onClick={loggingOut} className='btn'>LOGOUT</motion.button>
          </>)}

        {!isLoggedIn && (<>
          <motion.img whileTap={{ scale: 0.5 }} src={avatar} className="Avatar" />
          <motion.button whileTap={{ scale: 0.5 }} onClick={signInwithGoogle} className='btn'>LOGIN</motion.button>
        </>)}
      </div>


    </header>
  )
}

export default Header