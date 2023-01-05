import React from 'react'
import "../css/Cart.css"
import { useSelector, useDispatch } from "react-redux";
import { decrementQuantity, incrementQuantity, removeItem } from '../redux/cartSlice';
import Header from './Header';
import Footer from './Footer';
import EmptyCart from './EmptyCart';
import { Link } from 'react-router-dom';
const Cart = () => {
  const cart = useSelector(
    (state) => state.cart
  );
  const dispatch = useDispatch();
  const totalPrice=cart.reduce((total, item)=>total+(item.price*item.quantity),0)
  console.log(totalPrice)
  return (
    <>
      <Header />
      <section className='box-cart'>

        <div>

          <h1 className="heading"> OUR CART  </h1>
          {cart.length === 0 ? <EmptyCart /> : cart?.map((val) => {
            return (
              (<Link to="#" className="box cart-items" key={val.id} >
                <img src={val.image} alt="card" />
                <div className="content">
                  <h3>{val.title}</h3>
                  <span><b>${val.price}</b></span>
                </div>
                <div className='cart-buttons'>
                  <button onClick={() => val.quantity === 1 ? dispatch(removeItem(val.id)) : dispatch(decrementQuantity(val.id))} className='btn'>-</button>
                  <span className='item-count'>{val.quantity}</span>
                  <button
                    onClick={() => dispatch(incrementQuantity(val.id))}
                    className='btn'>+</button>
                </div>
                <div className='cart-removeItem'>
                  <button className='btn'
                    onClick={() => dispatch(removeItem(val.id))}

                  >Remove</button>
                </div>
              </Link>)
            )
          })}


        </div>
        
        <div className='cart-details'>
          <h1 className="title"><span>TOTAL PRICE: <span className='price-data'>${totalPrice}</span> </span></h1>
         <Link to="/checkout"> <button className='btn'><h1><span>CHECKOUT</span></h1></button></Link>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Cart