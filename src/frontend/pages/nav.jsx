import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useContext, useEffect } from 'react'
import { FilterContext } from '../context/filterContext'
import { AuthContext } from '../context/authContext'

export default function Navbar() {
    const { products } = useContext(FilterContext)
    const { loggedIn, setLoggedIn } = useContext(AuthContext)
    const [search, setSearchData] = useState("")
    const [searchResult, setSearchResult] = useState([])
    useEffect(() => {
        console.log(search.length);
        if (search.length != 0) {
            setSearchResult(products.filter((item) =>
                item.title.toLowerCase().includes(search.toLowerCase()))
            );
        } else if (search.length == 0) {
            setSearchResult([])
        }
    }, [search, setSearchData])
    useEffect(() => {
        if (localStorage.getItem("userInfoData") != null) {
            setLoggedIn(true)
        } else {
            setLoggedIn(false)
        }
    }, [])

    console.log(searchResult);
    return (
        <div className="navbar">
            <nav className="bat-navbar">
                <div className="bat-flex media-nav bat-align-center flex-gap-1">
                    <span className="material-icons menu-icon"> menu </span>
                    <Link
                        to="/"
                        className="bat-logo bat-flex flex-gap-1 bat-align-center bold-600"
                    >
                        <i className="fad fa-bat"></i>BatStore
                    </Link>

                    <div className="search-bar  bat-flex bat-align-center bat-br-5px">
                        <span className="material-icons"> search </span>
                        <input
                            value={search}
                            onChange={(e) => setSearchData(e.target.value)}
                            className="search-input"
                            type="text"
                            placeholder="Search for Marvel, DC comics"
                        />
                        {searchResult.length > 0 ?
                            <div className="search-result-section">
                                {searchResult.map(item => <Link to={`/comics/${item._id}`} onClick={() => setSearchData("")}>{item.title} <br />
                                    <span >by {item.categoryName}</span></Link>)}
                            </div> : null
                        }
                    </div>
                </div>
                <div className="nav-menu bat-flex bat-align-center flex-gap-1">
                    <Link to="/login"
                    ><button
                        className="bat-flex bat-align-center flex-gap-8px bat-btn bat-br-3px bat-btn-light"
                    >
                            <span className="material-icons"> person </span>

                            <span className="hide-on-phone">{loggedIn ? "Profile" : "Login"} </span>
                        </button></Link                    >

                    <Link
                        to="/cart"
                        className="bat-flex bat-align-center bat-fs-1r pointer"
                    >
                        <span className="material-icons"> shopping_cart </span>
                        <span className="hide-on-phone"> Cart </span></Link
                    >

                    <Link to="/wishlist" className="material-icons"> favorite </Link>
                </div>
            </nav>
        </div>)
} 