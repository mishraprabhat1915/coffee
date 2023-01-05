import React from 'react'
import "../css/EmptyCart.css"
import EmptyCartImage from "../image/emptyCardImage.webp"
const EmptyCart = () => {
  return (
    <div className='EmptyCart-Box'>
    <img src={EmptyCartImage} alt="Empty Cart"/>
    </div>
  )
}

export default EmptyCart