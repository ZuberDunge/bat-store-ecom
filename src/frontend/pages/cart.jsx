import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../context/cartContext'
import { useNavigate, Link } from 'react-router-dom'
import { calculateDiscount, calculateTotalDiscount } from './discount'
import axios from 'axios'
import { WishListContext } from '../context/wishListContext'

export default function Cart() {
    const { cart, increaseItem, deleteFromCart, decreaseQuantity } = useContext(CartContext)
    console.log(cart);


    const { addToWishList } = useContext(WishListContext)

    const moveToWishList = (item) => {
        deleteFromCart(item._id)
        addToWishList(item)
    }


    const navigate = useNavigate()

    useEffect(() => {
        if (localStorage.getItem("userToken") == null) {
            navigate('/login')
        }
    }, [])
    return (<>
        {cart.length == 0 || cart == null ? <div className="empty-cart">
            No Items in Cart, Start Adding!
        </div> :
            <div className="cart">
                <div className="cart-grid">
                    <div className="cart-items">

                        <div
                            className="bat-flex wrap-on-500 bat-align-center flex-gap-1 bat-pad-1 bat-justify-between"
                        >
                            <div className="fs-18px bold-500">My Cart ({cart.length})</div>
                            <div className="bat-flex delivery-flex bat-align-center flex-gap-1">
                                <div className="bat-flex color-primary bat-align-center">
                                    <span className="material-icons"> local_shipping </span>
                                    <span className="delivery-icon"> Deliver to </span>
                                </div>
                                <div
                                    className="address-bar-cart bat-flex bat-align-center bat-justify-between"
                                >
                                    Akola - 444 003
                                    <span className="material-icons"> arrow_drop_down </span>
                                </div>
                            </div>
                        </div>
                        {cart.map(item => <div className="mar-b-2 border-btm-grey">
                            <div className="bat-card horizointal-card card-with-badge">
                                <img
                                    src={item.imgSrc}
                                    alt={item.title}
                                />
                                <div
                                    className="bat-flex bat-flx-dir-col bat-justify-between bat-m-r-8px"
                                >
                                    <div className="fs-1r bold-600 text-color-primary-dark">
                                        {item.title}
                                    </div>
                                    <div className="bat-badge bold-600">{item.label}</div>
                                    <div className="bat-badge-close">
                                        <i className="fas fa-times-circle"></i>
                                    </div>
                                    <div className="grey-color fs-1r bold-500">{item.categoryName}</div>
                                    <div className="bat-flex bat-align-center bat-justify-between">
                                        <div>
                                            <span className="bat-fs-14px bold-500 bat-m-r-8px"
                                            >₹ {calculateDiscount(item.price, item.discount)}</span
                                            >
                                            <span className="bat-line-through bat-fs-12px bold-500"
                                            >₹ {item.price}</span
                                            >
                                            <span className="bat-discount-tag bat-m-l-8px margin-t-1"
                                            >{item.discount}% off</span
                                            >
                                        </div>
                                    </div>
                                    <div className="bat-flex bat-gap-1 bat-align-center m-tb-8">
                                        <div className="rating">
                                            {item.rating} <span className="material-icons"> star </span>
                                        </div>
                                        <div className="bat-fs-12px">Free Delivery</div>
                                    </div>
                                </div>
                            </div>
                            <div className="cart-save-later">
                                <div className="cart-add-qnt">
                                    <span style={{ cursor: item.qty <= 1 ? "not-allowed" : "pointer" }} onClick={() => decreaseQuantity(item)}>-</span>
                                    <span>{item.qty}</span>
                                    <span onClick={() => increaseItem(item._id)}>+</span>


                                </div>
                                <div className="save-for-later" onClick={() => moveToWishList(item)}>MOVE TO WISHLIST</div>
                                <div onClick={() => deleteFromCart(item._id)}>REMOVE</div>
                            </div>
                        </div>
                        )}

                    </div>

                    <div className="total-bill-section bat-flex bat-flx-dir-col">
                        <div className="bat-fw-600 grey-color">PRICE DETAILS</div>
                        <div className="bat-flex bat-justify-between">
                            <div>Price (3 items)</div>
                            <span> ₹ {cart.reduce(function (total, currentValue) {
                                return total + (currentValue.price * currentValue.qty)
                            }, 0)}</span>
                        </div>
                        <div className="bat-flex bat-justify-between">
                            <div>Discount</div>
                            <span className="discount-color"> − ₹ {cart.reduce(calculateTotalDiscount, 0)}</span>
                        </div>

                        <div className="bat-flex border-btm-grey-dotted bat-justify-between">
                            <div>Delivery Charges</div>
                            <span className="discount-color"> FREE</span>
                        </div>

                        <div
                            className="bat-flex border-btm-grey-dotted bat-fw-600 bat-justify-between"
                        >
                            <div>Total Amount</div>
                            <span className="discount-color"> ₹ {cart.reduce(function (total, currentValue) {
                                let discountedPrice = calculateDiscount(currentValue.price, currentValue.discount)
                                return total + (discountedPrice * currentValue.qty)
                            }, 0)}</span>
                        </div>

                        <Link to="/cart/checkout" style={{ textAlign: "center" }} className="bat-btn plcae-order-btn bat-br-3px bat-btn-primary">
                            Checkout
                        </Link>
                    </div>
                </div>
            </div>}
    </>)
}