import React, { useEffect, useState,useContext } from 'react'
import "../index.css"
import Header from './Header';
import useGetProducts from './useGetProducts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { addToCart } from "../features/cartSlice";
// import axios from 'axios';
// import {db} from "../firebase"
// import { collection, getDocs } from 'firebase/firestore';




const Menu = ({ children }) => {
    const [data, loading] = useGetProducts()
    const [products, setProducts] = useState([])
    const dispatch=useDispatch()

    useEffect(() => {
        if (data.length > 0) {
            setProducts(data)
        }
    }, [data])

    console.log(data)
    console.log(data)
    const filterData = (category) => {
        const filterdData = [...data].filter((val) => {
            return val.category === category;
        })
        console.log("after filtering:", filterData)
        setProducts(filterdData)
        console.log("after filtered is set to data:", data)
    }
    console.log({ children })
    
    return (
        <>
            <Header />
            <section class="menu" id="menu">
                <h1 class="heading"> our menu <span>popular menu</span> </h1>

                <div className='coffe-options'>
                    <button className='btn' onClick={() => filterData("cold coffee")} >ICED COFFEE</button>
                    <button className='btn' onClick={() => filterData("hot coffee")} >HOT COFFEE</button>
                    <button className='btn' onClick={() => filterData("dessert")} >DESSERTS</button>
                    <button className='btn' onClick={() => filterData("drink")} >DRINKS</button>
                    <button className='btn' onClick={() => filterData("burger")} >BURGER</button>
                </div>
                <br></br>
                <br></br>
                <div class="box-container">
                    {loading ? <h1>Loading....</h1> :
                        products.map((item) => {
                            return (
                                (<a href="#" class="box" key={item.id}>
                                    <img src={item.image} alt={item.title} />
                                    <div class="content">
                                        <h3>{item.title}</h3>
                                        <p>{item.description}</p>
                                        <span><b>${item.price}</b></span>
                                        
                                    </div>
                                    <button className='btn' onClick={() => dispatch(addToCart(item))}><FontAwesomeIcon icon={faCartShopping}  /></button>
                                </a>)
                            )
                        })
                    }
                </div>

            </section>
        </>
    )
}

export default Menu