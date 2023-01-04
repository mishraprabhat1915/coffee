import React, { useEffect } from 'react'
import "./Cart.css"
import { useSelector, useDispatch } from "react-redux";
import { decrementQuantity, incrementQuantity, removeItem } from '../redux/cartSlice';
const Cart = () => {
  const cart = useSelector(
    (state) => state.cart
  );

  const dispatch = useDispatch();

  // useEffect(() => {

  // }, [cart]);

  console.log(cart)
  return (
    <section className='box-cart'>

      <div>

        {cart?.map((val) => {
          return (
            (<a href="#" class="box" >
              <img src={val.image} alt="card" />
              <div class="content">
                <h3>{val.title}</h3>
                <span><b>${val.price}</b></span>
              </div>
              <div className='cart-buttons'>
                <button   onClick={() => val.quantity === 1 ? dispatch(removeItem(val.id)) : dispatch(decrementQuantity(val.id))} className='btn'>-</button>
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
            </a>)
          )
        })}


      </div>
      {/* {totalQuantity} */}

    </section>
  )
}

export default Cart