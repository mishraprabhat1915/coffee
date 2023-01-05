import React from 'react'
import "../css/Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <section className="footer">

    <div className="box-container">
    {/* <i className="fas fa-arrow-right"></i> */}
        <div className="footer-box">
            <h3 className='footerHeader'>our branches</h3>
            <Link className='footerLinks' to="#">  <FontAwesomeIcon icon={faArrowRight} /> USA </Link>
            <Link className='footerLinks' to="#">  <FontAwesomeIcon icon={faArrowRight} /> AFRICA </Link>
            <Link className='footerLinks' to="#">  <FontAwesomeIcon icon={faArrowRight} /> INDIA </Link>
            <Link className='footerLinks' to="#">  <FontAwesomeIcon icon={faArrowRight} /> FRANCE </Link>
            <Link className='footerLinks' to="#">  <FontAwesomeIcon icon={faArrowRight} /> JAPAN </Link>
        </div>

        <div className="footer-box">
            <h3  className='footerHeader'>quick links</h3>
            <Link className='footerLinks' to="/">  <FontAwesomeIcon icon={faArrowRight} /> HOME </Link>
            <Link className='footerLinks' to="/about">  <FontAwesomeIcon icon={faArrowRight} /> ABOUT </Link>
            <Link className='footerLinks' to="/menu">  <FontAwesomeIcon icon={faArrowRight} /> MENU </Link>
            <Link className='footerLinks' to="/review">  <FontAwesomeIcon icon={faArrowRight} /> REVIEW </Link>
            <Link className='footerLinks' to="/book">  <FontAwesomeIcon icon={faArrowRight} /> BOOK </Link>
        </div>

        <div className="footer-box">
            <h3 className='footerHeader'>contact info</h3>
            <Link className='footerLinks' to="#"> <FontAwesomeIcon icon={faPhone} /> +123-456-7890 </Link>
            <Link className='footerLinks' to="#"> <FontAwesomeIcon icon={faPhone} />  +111-222-3333 </Link>
            <Link className='footerLinks' to="#"> <FontAwesomeIcon icon={faEnvelope} /> mishraprabhat104@gmail.com </Link>
            <Link className='footerLinks' to="#"> <FontAwesomeIcon icon={faEnvelope} /> Allahabad,Uttar Pradesh, India </Link>
        </div>

        <div   className="footer-box">
            <h3 className='footerHeader'>contact info</h3>
            <Link className='footerLinks' to="#"> <FontAwesomeIcon icon={faFacebook} /> FACEBOOK </Link>
            <Link className='footerLinks' to="#"> <FontAwesomeIcon icon={faTwitter} /> TWITTER </Link>
            <Link className='footerLinks' to="#"> <FontAwesomeIcon icon={faInstagram} /> INSTAGRAM </Link>
            <Link className='footerLinks' to="#"> <FontAwesomeIcon icon={faLinkedin} /> LINKEDIN </Link>
        </div>

    </div>

    <div className="credit"> Creatd by <span>Prabhat Mishra</span> | All rights reserved </div>

</section>
  )
}

export default Footer