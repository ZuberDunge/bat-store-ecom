import React, { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { products } from '../../backend/db/products'
import { CartContext } from '../context/cartContext'
import { WishListContext } from '../context/wishListContext'
import { calculateDiscount } from './discount'


export default function WishlistPage() {
    const { wishList, deleteItemWishList } = useContext(WishListContext);
    const { addItem, } = useContext(CartContext)
    const moveToCart = (item) => {
        addItem(item);
        deleteItemWishList(item._id)
    }
    const navigate = useNavigate()

    useEffect(() => {
        if (localStorage.getItem("userToken") == null) {
            navigate('/login')
        }
    }, [])
    return (
        <>
            <div class="wishlist">
                {wishList.length == 0 ? <div className="empty-cart">
                    Add something here
                </div> : null}
                <div class="wish-list-container">
                    {
                        wishList.map(item => <div class="bat-card card-with-badge">
                            <img
                                src={item.imgSrc}
                                alt={item.title}
                            />
                            <div
                                class="bat-flex bat-flx-dir-col bat-justify-between bat-m-r-8px"
                            >
                                <div class="fs-1r bold-600 text-color-primary-dark">
                                    {item.title}
                                </div>
                                <div class="bat-badge bold-600">{item.label}</div>
                                <div class="bat-badge-close">
                                    <i class="fas fa-times-circle"></i>
                                </div>
                                <div class="fs-1r bold-500">{item.categoryName}</div>
                                <div class="bat-flex bat-align-center bat-justify-between">
                                    <div>
                                        <span class="bat-fs-14px bold-500 bat-m-r-8px">₹ {calculateDiscount(item.price, item.discount)}</span>
                                        <span class="bat-line-through bat-fs-12px bold-500"
                                        >₹ {item.price}</span
                                        >
                                        <span class="bat-discount-tag bat-m-l-8px margin-t-1"
                                        >{item.discount}% off</span
                                        >
                                    </div>
                                </div>
                                <div class="bat-flex bat-gap-1 bat-align-center m-tb-8">
                                    <div class="rating">
                                        {item.rating} <span class="material-icons"> star </span>
                                    </div>
                                    <div class="bat-fs-12px">Free Delivery</div>
                                </div>
                                <div class="bat-flex bat-justify-between bat-align-center m-tb-8">
                                    <button onClick={() => moveToCart(item)}
                                        class="bat-btn bat-justify-center bat-br-3px bat-btn-with-icon"
                                    >
                                        <span>Move to Cart</span>
                                    </button>
                                    <div onClick={() => deleteItemWishList(item._id)} class="material-icons"> delete_outline </div>
                                </div>
                            </div>
                        </div>
                        )
                    }





                </div>
            </div>



        </>
    )
}