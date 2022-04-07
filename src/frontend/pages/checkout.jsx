import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../context/cartContext'
import { useNavigate } from 'react-router-dom'
import { calculateDiscount, calculateTotalDiscount } from './discount'


export default function Checkout() {
    const { cart, setCart } = useContext(CartContext)
    const [couponAmount, setcouponAmount] = useState(0)
    const [couponCode, setCouponCode] = useState("")
    const [couponApplied, setCouponApplied] = useState(false)
    const [invalidCoupon, setinvalidCoupon] = useState(false)
    const [orderPlaced, setorderPlaced] = useState(false)
    const applyCoupon = () => {
        if (couponCode == "NEW10") {
            setcouponAmount(100)
            setCouponApplied(true)
            setTimeout(() => {
                setCouponApplied(false)
            }, 2000)
        } else if (couponCode == "NEW20") {
            setcouponAmount(200)
            setCouponApplied(true)
            setTimeout(() => {
                setCouponApplied(false)
            }, 2000)
        } else if (couponCode == "NEW500") {
            setcouponAmount(500)
            setCouponApplied(true)
            setTimeout(() => {
                setCouponApplied(false)
            }, 2000)
        } else {
            setinvalidCoupon(true)
            setTimeout(() => {
                setinvalidCoupon(false)
            }, 2000)
        }

    }

    const navigate = useNavigate()
    const plcaeOrder = () => {
        setorderPlaced(true)
        setTimeout(() => {
            setorderPlaced(false)
            navigate("/")
        }, 2000)
        console.log(orderPlaced);
    }
    useEffect(() => {
        if (localStorage.getItem("userToken") == null) {
            navigate('/login')
        }
    }, [])
    return (<>
        {cart.length == 0 || cart == null ? <div className="empty-cart">
            Add something here
        </div> :
            <div className="cart">
                <div className="cart-grid">
                    <div className="cart-items">

                        <div
                            className="bat-flex wrap-on-500 bat-align-center flex-gap-1 bat-pad-1 bat-justify-between"
                        >
                            <div className="fs-18px bold-500">Place Order</div>
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
                                    <div>Quantity : {item.qty}</div>
                                </div>
                            </div>

                        </div>
                        )}

                    </div>

                    <div className="total-bill-section bat-flex bat-flx-dir-col">
                        <div className="bat-fw-600 grey-color">Bill Summary</div>
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
                        <div className="bat-flex bat-justify-between">
                            <div>Coupons for you</div>
                            <span className="discount-color"> − ₹ {couponAmount}</span>
                        </div>
                        <div className="bat-flex border-btm-grey-dotted bat-justify-between">
                            <div>Delivery Charges</div>
                            <span className="discount-color"> FREE</span>
                        </div>
                        <div className="bat-fs-14px bat-fw-500">Try NEW10, NEW200, NEW500</div>
                        <div
                            className="bat-flex apply-coupon border-btm-grey-dotted flex-gap-1"
                        >
                            <input type="text" value={couponCode} onChange={(e) => setCouponCode(e.target.value)} placeholder="Apply Coupon" />
                            <button onClick={() => applyCoupon()}
                                className="bat-btn apply-coupon-btn bat-br-3px bat-btn-primary-outlined"
                            >
                                <i className="fas fa-tags"></i> Apply
                            </button>
                        </div>

                        <div
                            className="bat-flex border-btm-grey-dotted bat-fw-600 bat-justify-between"
                        >
                            <div>Total Amount</div>
                            <span className="discount-color"> ₹ {cart.reduce(function (total, currentValue) {
                                let discountedPrice = calculateDiscount(currentValue.price, currentValue.discount)
                                return total + (discountedPrice * currentValue.qty) - couponAmount
                            }, 0)}</span>
                        </div>
                        <div className="bat-flex discount-color bat-fw-600 bat-justify-between">
                            You will save ₹{cart.reduce(calculateTotalDiscount, 0) + couponAmount} on this order
                        </div>
                        <button onClick={plcaeOrder} className="bat-btn plcae-order-btn bat-br-3px bat-btn-primary">
                            PLACE ORDER
                        </button>
                    </div>
                </div>
            </div>}
        {couponApplied ? <div class="bat-alert bat-alert-dismiss bat-alert-success">
            <span>
                <i class="fas fa-check-circle"></i> Yayyy -{couponAmount} Applied!
            </span>

        </div> : null}
        {invalidCoupon ? <div class="bat-alert bat-alert-error">
            <i class="fas fa-exclamation-circle"></i> Invalid Coupon!
        </div> : null}

        {orderPlaced ?
            <div style={{ bottom: "40%" }} class="bat-alert bat-flex bat-flx-dir-col bat-justify-center bat-align-center bat-alert-info">
                <i style={{ fontSize: "4rem", textAlign: "center" }} class="fas fa-check-circle"></i> <br />
                Order Placed!
            </div> : null
        }
    </>)
}