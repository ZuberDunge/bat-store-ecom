import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import FilterSection from '../../components/filters'
import NetflixLoader from '../../loader'
import { FilterContext } from '../context/filterContext'
import { WishListContext } from '../context/wishListContext'
import { calculateDiscount } from './discount'
export default function CategorPage() {
    const { publicationId, id } = useParams()
    const { products, dispatch, filteredProducts, filteredList } = useContext(FilterContext)
    console.log(products);
    const { addToWishList, checkIfInWishList, checkAndAddToWishList, isLogged, setisLogged } = useContext(WishListContext)
    console.log(filteredProducts);

    useEffect(() => {
        dispatch({ type: "CLEAR_FILTERS" })
        if (publicationId) {
            console.log(publicationId == true);
            dispatch({
                type: "SUPERHEROES",
                payload: id,
            })
        } else {
            dispatch({
                type: "CATEGORY",
                payload: id,
            })
        }


    }, [])

    return (<>
        <div>
            <div className="cat-grid">
                <FilterSection />

                <div className="cat-content">
                    <div className="cat-grid-cards">
                        {filteredProducts.length >= 1 ?
                            filteredProducts.map(item =>
                                <div className="bat-card card-with-badge">
                                    <Link to={`/comics/${item._id}`} >
                                        <img
                                            src={item.imgSrc}
                                            alt={item.title}
                                        />

                                        {console.log(item.title)}
                                        <div
                                            className="width-100 bat-flex bat-flx-dir-col bat-justify-between margin-t-1"
                                        >
                                            <div className="fs-1r bold-600 text-color-primary-dark">
                                                {item.title}
                                            </div>
                                            <div className="bat-badge bold-600">{item.label}</div>
                                            <div className="bat-badge-close">
                                                <i className="fas fa-times-circle"></i>
                                            </div>
                                            <div className="fs-1r bold-500 publication">{item.categoryName} COMICS</div>
                                            <div className="bat-flex bat-align-center bat-justify-between fm-roboto">
                                                <div>
                                                    <span className="bat-fs-14px bold-500 bat-m-r-8px margin-t-1"
                                                    >₹  {calculateDiscount(item.price, item.discount)}</span
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
                                                <div className="bat-fs-12px">{item.delivery}</div>
                                            </div>
                                            {!item.stockAvailability ? <div class="sold-out bat-overlay-bg">
                                                <div class="bat-overlay-text">Sold Out</div>
                                            </div> : null}
                                        </div>
                                    </Link>
                                    <button onClick={() => checkAndAddToWishList(item)} className="wishlist-btn material-icons">favorite</button>
                                </div>
                            ) : <NetflixLoader />
                        }
                    </div>
                </div>
            </div>

            {isLogged ? null :
                <div class="bat-alert bat-alert-dismiss bat-alert-error">
                    <span>
                        <i class="fas fa-exclamation-circle"></i> Login to add!
                    </span>
                    <Link to="/login">Login
                    </Link>
                </div>
            }
        </div>
    </>)
} 