import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="bat-footer">
            <div className="bat-footer-component">
                <div className="bat-footer-social bat-fs-14px">
                    <ul className="bat-footer-nav">
                        <li className="bold-600 bat-fs-14px">Navigation</li>
                        <li><Link to="/"> Home</Link></li>
                        <li><Link to="/category/DC"> Marvel</Link></li>
                        <li><Link to="/category/marvel"> DC</Link></li>
                        <li><Link to="/profile">Profile</Link></li>
                        <li><Link to="/cart">Cart</Link></li>
                        <li><Link to="/wishlist">Wishlist</Link></li>
                    </ul>
                </div>
                <div className="bat-footer-social bat-fs-14px">
                    <div className="bold-600 bat-fs-14px">Open Source</div>
                    <div>
                        We're open-sourced on GitHub. <br />
                        Contributions and feedback are welcome!
                    </div>
                    <div className="bat-github-btn">
                        <a className="link" href="https://github.com/ZuberDunge">
                            Contribute on Github <i className="fab fa-github social"></i
                            ></a>
                    </div>
                    <div>© BatStore, 2022 All rights reserved.</div>
                    <div className="bold-600 bat-fs-14px">Social</div>
                    <div>
                        <ul
                            className="bat-flex flex-gap-1 bat-social-links bat-list-non-bullets"
                        >
                            <li className="bat-icon-social">
                                <a className="link" href="https://github.com/ZuberDunge">
                                    <i className="fab fa-github social"></i
                                    ></a>
                            </li>
                            <li className="bat-icon-social">
                                <a className="link" href="https://www.instagram.com/zuberdunge/">
                                    <i className="fab fa-instagram social"></i
                                    ></a>
                            </li>
                            <li className="bat-icon-social">
                                <a
                                    className="link"
                                    href="https://www.linkedin.com/in/zuberdunge/"
                                >
                                    <i className="fab fa-linkedin-in social"></i
                                    ></a>
                            </li>
                            <li className="bat-icon-social">
                                <a className="link" href="https://www.twitter.com/zuberdunge/">
                                    <i className="fab fa-twitter social"></i
                                    ></a>
                            </li>
                            <li className="bat-icon-social">
                                <a className="link" href="mailto:iamZuberDunge@gmail.com">
                                    <i className="fas fa-envelope social"></i
                                    ></a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <a href="https://zuberdunge.tech">
                            Designed with 💕 By
                            <span className="bat-zub-ftr-link">
                                Zuber Dunge
                                <i className="fas fa-external-link-alt"></i>
                            </span>
                        </a>
                    </div>
                </div>
                <div className="bat-footer-social bat-fs-14px">
                    <ul className="bat-footer-nav">
                        <li className="bold-600 bat-fs-14px">Help</li>
                        <li>Payment</li>
                        <li>Term of use</li>
                        <li>Privacy</li>
                        <li>Payment options Available</li>
                    </ul>
                </div>
                <div className="bat-footer-social bat-fs-14px">
                    <ul className="bat-footer-nav">
                        <li className="bold-600 bat-fs-14px">Orders</li>
                        <li><a href="/docs/orders.html"> My Orders</a></li>
                        <li>Track Order</li>
                        <li>Return</li>
                        <li>Cancellation</li>
                    </ul>
                    <ul className="bat-footer-nav">
                        <li className="bold-600 bat-fs-14px">© Credits</li>
                        <li>Marvel Comics</li>
                        <li>DC Comics</li>
                    </ul>
                </div>
            </div>
        </footer>)
} 