import React, { useEffect, useContext, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { CartContext } from '../context/cartContext'
import { WishListContext } from '../context/wishListContext'
import { calculateDiscount } from './discount'
import { FilterContext } from '../context/filterContext'
import Footer from './footer'
import Navbar from './nav'
import axios from "axios"
import ContentLoader from 'react-content-loader'


export default function ProductPage(props) {
    const { id } = useParams()
    const [currentProduct, setcurrentProduct] = useState(null)
    const [isLoading, setisLoading] = useState(false)
    const [addedToCart, setAddedToCart] = useState(false)
    const { addItem } = useContext(CartContext)
    const navigate = useNavigate()
    useEffect(() => {
        axios.get("/api/products/" + id).then(res => {
            console.log(res.data.product);
            setcurrentProduct(res.data.product)
            setisLoading(true)
        }).catch((error) => {
            // here you will have access to error.response
            console.log(error.response.data)
        })


    }, [id])
    const { addToWishList, checkIfInWishList, checkAndAddToWishList, isLogged, setisLogged } = useContext(WishListContext)
    let token = localStorage.getItem("userToken")
    const checkAndAddToCart = (item) => {
        if (token == null) {
            setisLogged(false)
            setTimeout(() => {
                setisLogged(true)
            }, 2000)
            console.log("settime");
        } else {
            addItem(item)
            setAddedToCart(true)
            setTimeout(() => {
                setAddedToCart(false)
            }, 2000)
            console.log("add");
        }
    }

    const buyNow = (item) => {
        if (token == null) {
            setisLogged(false)
            setTimeout(() => {
                setisLogged(true)
            }, 2000)
            console.log("settime");
        } else {
            addItem(item)
            navigate("/cart")
            console.log("add");
        }
    }
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (<>

        <div class="product-container">
            {isLoading ?
                <div key={currentProduct._id} class="product-item-one">
                    <div class="product-item-one-img">
                        <img
                            src={currentProduct.imgSrc}
                            alt={currentProduct.name}
                        />
                        <div onClick={() => checkAndAddToWishList(currentProduct)} style={{ color: checkIfInWishList(currentProduct._id) ? "red" : "#c8c8c8" }} class="wishlist-btn material-icons">favorite</div>
                        <div class="bat-flex add-but-btns bat-align-center flex-gap-1">
                            {
                                currentProduct.stockAvailability ? <><button onClick={() => checkAndAddToCart(currentProduct)} class="bat-btn bat-br-3px bat-btn-with-icon">
                                    <i class="fas fa-shopping-cart"></i> Add to Cart
                                </button> <button onClick={() => buyNow(currentProduct)} class="bat-btn orange-bg bat-br-3px bat-btn-with-icon">
                                        <i class="fas fa-bolt"></i> Buy Now
                                    </button></>
                                    : <><button disabled style={{ cursor: "not-allowed" }} class="bat-btn bat-br-3px bat-btn-with-icon">
                                        Sold Out
                                    </button>
                                        <button disabled style={{ cursor: "not-allowed" }} class="bat-btn orange-bg bat-br-3px bat-btn-with-icon">
                                            Sold Out
                                        </button></>
                            }



                        </div>
                    </div>
                    <div class="product-data">
                        <div class="product-title-one">
                            <div class="bat-fs-1r bold-500 text-color-grey">{currentProduct.categoryName} Comics</div>
                            <div class="fs-24px">{currentProduct.title}</div>

                            <div class="comic-info">
                                <div class="bat-flex bat-align-center flex-gap-2">
                                    <div class="date-of-pub bat-fw-400">
                                        <span class="bat-fw-500"> Published: <br /> </span>
                                        {currentProduct.published_date}
                                    </div>
                                    <div class="date-of-pub bat-fw-400">
                                        <span class="bat-fw-500"> Writer: <br /> </span>
                                        {currentProduct.author}
                                    </div>
                                </div>

                                <div class="fs-14px bat-fw-400 m-tb-8">
                                    <span class="bat-fs-1r bat-fw-500"> Summary: <br /> </span>
                                    {currentProduct.summary},....
                                    <span class="text-color-primary-dark"> Read more. </span>
                                </div>
                            </div>

                            <div
                                class="bat-flex prod-price bat-align-center bat-justify-between"
                            >
                                <div>
                                    <span class="bold-500 bat-m-r-8px margin-t-1">₹ {calculateDiscount(currentProduct.price, currentProduct.discount)}</span>
                                    <span class="bat-line-through bat-fs-1r bold-500"
                                    >₹ {currentProduct.price}</span
                                    >
                                    <span
                                        class="bat-discount-tag bat-fs-1r bat-m-l-8px margin-t-1"
                                    > {currentProduct.discount} % off</span
                                    >
                                </div>
                            </div>
                            <span class="bat-discount-tag bat-m-l-8px bat-fs-1r margin-t-1"
                            >Special price</span
                            >
                            <div class="bat-flex bat-gap-1 bat-fs-1r bat-align-center m-tb-8">
                                <div class="rating bat-fs-1r">
                                    {currentProduct.rating} <span class="material-icons bat-fs-1r"> star </span>
                                </div>
                                <div class="bat-fs-1r">{currentProduct.delivery} Delivery</div>
                            </div>
                            <div
                                class="offers-section bat-mar-tb-1 bat-flex bat-gap-8px bat-flx-dir-col"
                            >
                                <div class="offer-list-item bat-fs-1r bat-fw-600">
                                    Available offers
                                </div>
                                {currentProduct.offers.map((offer, index) => <div key={index}
                                    class="offer-list-item bat-flex bat-gap-1 bat-fs-1r bat-align-center bat-fw-400"
                                >
                                    <i class="fas fa-tag"></i>{offer}
                                </div>)}


                                <div class="offer-list-item bat-fs-1r bold-500 text-color-grey">
                                    Services
                                </div>
                                <div
                                    class="offer-list-item bat-flex bat-gap-1 fs-14px bat-align-center bat-fw-400"
                                >
                                    <i class="fas fa-redo"></i> 14 Days Return Policy
                                </div>
                                <div
                                    class="offer-list-item bat-flex bat-gap-1 fs-14px bat-align-center bat-fw-400"
                                >
                                    <i class="fas fa-rupee-sign"></i>Cash on Delivery {currentProduct.COD == "available" ? "available" : "not available"}
                                </div>
                            </div>
                        </div>
                    </div>
                </div> :
                <div style={{ height: "calc(100vh - 60px)" }} className='bat-flex bat-justify-center bat-align-center'>
                    <ContentLoader
                        viewBox="0 0 400 160"
                        height={160}
                        width={400}
                        backgroundColor="var(--primary-red)"
                        {...props}
                    >
                        <circle cx="150" cy="86" r="8" />
                        <circle cx="194" cy="86" r="8" />
                        <circle cx="238" cy="86" r="8" />
                    </ContentLoader></div>}

            {isLogged ? null :
                <div class="bat-alert bat-alert-dismiss bat-alert-error">
                    <span>
                        <i class="fas fa-exclamation-circle"></i> Login to add!
                    </span>
                    <Link to="/login">Login
                    </Link>
                </div>

            }
            {
                addedToCart && <div class="bat-alert bat-alert-info">
                    <i class="fas fa-check-circle"></i> Succesfully Added!
                </div>
            }
        </div>

    </>)
} 