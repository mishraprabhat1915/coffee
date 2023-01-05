import React, { useEffect, useState } from 'react'
import "../css/index.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import Footer from './Footer';
import Header from "./Header";
import useGetProducts from "./useGetProducts";
import { MagnifyingGlass } from 'react-loader-spinner'
import { Link } from 'react-router-dom';




const Menu = ({ children }) => {
    const [data, loading] = useGetProducts()
    const [products, setProducts] = useState([])

    const dispatch = useDispatch()

    useEffect(() => {
        if (data.length > 0) {
            setProducts(data)
        }
    }, [data])

    const filterData = (category) => {
        const filterdData = [...data].filter((val) => {
            return val.category === category;
        })
        console.log("after filtering:", filterData)
        setProducts(filterdData)
        console.log("after filtered is set to data:", data)
    }

    return (
        <>
            <Header />
            <section className="menu" id="menu">
                <h1 className="heading"> our menu <span>popular menu</span> </h1>

                <div className='coffe-options'>
                    <button className='btn' onClick={() => filterData("cold coffee")} >ICED COFFEE</button>
                    <button className='btn' onClick={() => filterData("hot coffee")} >HOT COFFEE</button>
                    <button className='btn' onClick={() => filterData("dessert")} >DESSERTS</button>
                    <button className='btn' onClick={() => filterData("drink")} >DRINKS</button>
                    <button className='btn' onClick={() => filterData("burger")} >BURGER</button>
                </div>
                <br></br>
                <br></br>
                <div className="box-container">
                    {loading ? <MagnifyingGlass
                        visible={true}
                        height="80"
                        width="80"
                        ariaLabel="MagnifyingGlass-loading"
                        wrapperStyle={{}}
                        wrapperclassName="MagnifyingGlass-wrapper"
                        glassColor='#c0efff'
                        color='#e15b64'
                    /> :
                        products.map((item) => {
                            return (
                                <Link to="#" className="box" key={item.id}>
                                    <img src={item.image} alt={item.title} />
                                    <div className="content">
                                        <h3>{item.title}</h3>
                                        <p>{item.description}</p>
                                        <span><b>${item.price}</b></span>

                                    </div>
                                    <button className='btn' onClick={() =>
                                        dispatch(addToCart(item))
                                    }><FontAwesomeIcon icon={faCartShopping} /></button>
                                </Link>
                            )
                        })
                    }
                </div>

            </section>
            <Footer />
        </>
    )
}

export default Menu

//image,id,description,price,quantity,title