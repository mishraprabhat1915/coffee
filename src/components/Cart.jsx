import React,{useEffect} from 'react'
import "./Cart.css"
import { useSelector, useDispatch } from "react-redux";
import { getCartTotal,removeItem } from '../features/cartSlice'
const Cart = () => {
  const { cart, totalQuantity, totalPrice } = useSelector(
    (state) => state.allCart
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);
  return (
    <section className='box-cart'>

      <div>

        {cart.map((val) => {
          return (
            (<a href="#" class="box" >
              <img src={val.image} alt="card" />
              <div class="content">
                <h3>{val.title}</h3>
                <span><b>${val.price}</b></span>
              </div>
              <div className='cart-buttons'>
                <button className='btn'>-</button>
                <span className='item-count'>{val.quantity}</span>
                <button className='btn'>+</button>
              </div>
              <div className='cart-removeItem'>
                <button className='btn' onClick={(dispatch(removeItem(val.id)))}>Remove</button>
              </div>
            </a>)
          )
        })}


      </div>
      {totalQuantity}

    </section>
  )
}

export default Cart