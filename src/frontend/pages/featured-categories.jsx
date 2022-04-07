import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import { products } from '../../backend/db/products'
import { FilterContext } from '../context/filterContext'
import { WishListContext } from '../context/wishListContext'
import { calculateDiscount } from './discount'
export default function Featured() {
    const { products } = useContext(FilterContext)
    const { checkAndAddToWishList, checkIfInWishList, isLogged } = useContext(WishListContext)
    return (<>

        <main>
            <div class="bat-flex bat-mar-tb-1 bat-justify-between bat-align-center">
                <div class="fs-1-5r text-color-primary bold-600">Comics By DC</div>
                <Link
                    to="/category/DC"
                    class="pointer show-more-text bat-flex bat-align-center"
                >
                    Explore DC <span class="material-icons"> trending_flat </span>
                </Link>
            </div>
            <div
                class="bat-flex flex-gap-1 home-cards-media-query bat-align-center bat-justify-center margin-tb-2"
            >
                {products.filter(item => item.categoryName == "DC").map(item => <div class="bat-card card-with-badge">
                    <Link to={`/comics/${item._id}`}>
                        <img
                            src={item.imgSrc}
                            alt={item.title}
                        />

                        <div
                            class="bat-flex bat-flx-dir-col bat-justify-between bat-m-r-8px margin-t-1"
                        >
                            <div class="fs-1r bold-600 text-color-primary-dark">
                                {item.title}
                            </div>
                            <div class="bat-badge bold-600">{item.label}</div>
                            <div class="bat-badge-close">
                                <i class="fas fa-times-circle"></i>
                            </div>
                            <div class="fs-1r bold-500">{item.categoryName} Comics</div>
                            <div class="bat-flex bat-align-center bat-justify-between">
                                <div>
                                    <span class="bat-fs-14px bold-500 bat-m-r-8px margin-t-1"
                                    >₹ {calculateDiscount(item.price, item.discount)}</span
                                    >
                                    <span class="bat-line-through bat-fs-12px bold-500"
                                    >₹ {item.price}</span
                                    >
                                    <span class="bat-discount-tag bat-m-l-8px margin-t-1"
                                    >{item.discount}% off</span
                                    >
                                </div>

                            </div>
                            {!item.stockAvailability ? <div class="sold-out bat-overlay-bg">
                                <div class="bat-overlay-text">Sold Out</div>
                            </div> : null}
                        </div>
                    </Link>
                    <button onClick={() => checkAndAddToWishList(item)} style={{ color: checkIfInWishList(item._id) ? "red" : "#c8c8c8" }} class="wishlist-btn material-icons">favorite</button>
                </div>
                ).slice(0, 5)}
            </div>
            <div class="bat-flex bat-mar-tb-1 bat-justify-between bat-align-center">
                <div class="fs-1-5r text-color-primary bold-600">Comics By MARVEL</div>
                <Link
                    to="/category/MARVEL"
                    class="pointer show-more-text bat-flex bat-align-center"
                >
                    Explore MARVEL <span class="material-icons"> trending_flat </span>
                </Link>
            </div>
            <div
                class="bat-flex flex-gap-1 home-cards-media-query bat-align-center bat-justify-center margin-tb-2"
            >
                {products.filter(item => item.categoryName == "MARVEL").map(item => <div class="bat-card card-with-badge">
                    <Link to={`/comics/${item._id}`} >
                        <img
                            src={item.imgSrc}
                            alt={item.title}
                        />
                    </Link>
                    <div
                        class="bat-flex bat-flx-dir-col bat-justify-between bat-m-r-8px margin-t-1"
                    >
                        <div class="fs-1r bold-600 text-color-primary-dark">
                            {item.title}
                        </div>
                        <div class="bat-badge bold-600">{item.label}</div>
                        <div class="bat-badge-close">
                            <i class="fas fa-times-circle"></i>
                        </div>
                        <div class="fs-1r bold-500">{item.categoryName} Comics</div>

                        <div class="bat-flex bat-align-center bat-justify-between">
                            <div>
                                <span class="bat-fs-14px bold-500 bat-m-r-8px margin-t-1"
                                >₹ {calculateDiscount(item.price, item.discount)}</span
                                >
                                <span class="bat-line-through bat-fs-12px bold-500"
                                >₹ {item.price}</span
                                >
                                <span class="bat-discount-tag bat-m-l-8px margin-t-1"
                                >{item.discount}% off</span
                                >
                            </div>
                            <button onClick={() => checkAndAddToWishList(item)} style={{ color: checkIfInWishList(item._id) ? "red" : "#c8c8c8" }} class="wishlist-btn material-icons">favorite</button>
                        </div>
                        {!item.stockAvailability ? <div class="sold-out bat-overlay-bg">
                            <div class="bat-overlay-text">Sold Out</div>
                        </div> : null}
                    </div>
                </div>
                ).slice(0, 5)}
            </div>
        </main>
        {isLogged ? null :
            <div class="bat-alert bat-alert-dismiss bat-alert-error">
                <span>
                    <i class="fas fa-exclamation-circle"></i> Login to add!
                </span>
                <Link to="/login">Login
                </Link>
            </div>
        }

    </>)
} 