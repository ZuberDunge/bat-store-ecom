import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FilterContext } from '../context/filterContext'
import NetflixLoader from '../../loader'
export default function Header() {
    const { products, loading } = useContext(FilterContext)
    return (
        <>
            <header class="landing-header bat-pad-t-8px">
                <div class="category-list bat-flex bat-align-center flex-gap-1">
                    <div>
                        <img
                            src="https://batstore-404.netlify.app/images/Batman-Comics-10-Essentials-You-Need-To-Read.jpg"
                            alt=""
                        />
                        <Link to="/category/dc/BATMAN">
                            <div class="bat-overlay-bg">
                                <div class="bat-overlay-text pointer">Batman</div>
                            </div>
                        </Link>
                    </div>

                    <div>
                        <img
                            src="https://batstore-404.netlify.app/images/jbareham_201217_0988_2020_wwoman_comics.jpg"
                            alt=""
                        />
                        <Link to="/category/dc/WONDERWOMAN">
                            <div class="bat-overlay-bg">
                                <div class="bat-overlay-text pointer">Wonder Woman</div>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <img
                            src="https://www.denofgeek.com/wp-content/uploads/2017/11/thor-comics-reading-guide-ragnarok.jpg?fit=1024%2C544"
                            alt=""
                        />
                        <Link to="/category/marvel/THOR">
                            <div class="bat-overlay-bg">
                                <div class="bat-overlay-text pointer">Thor</div>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <img
                            src="https://batstore-404.netlify.app/images/jbareham_201027_0988_grids_superman_vrs02.jpg"
                            alt=""
                        />
                        <Link to="/category/dc/SUPERMAN">
                            <div class="bat-overlay-bg">
                                <div class="bat-overlay-text pointer">Superman</div>
                            </div></Link                        >
                    </div>
                    <div>
                        <img src="https://sportshub.cbsistatic.com/i/2021/04/25/4ab47976-fb8f-40a7-84ff-e5b2a2d883ba/sinister-war-spider-man-image-1265406.jpg" alt="" />
                        <Link to="/category/marvel/SPIDERMAN">
                            <div class="bat-overlay-bg">
                                <div class="bat-overlay-text pointer">SPIDERMAN</div>
                            </div>
                        </Link>
                    </div>
                </div>
            </header>
            {loading ? <div class="slider-box">
                <Link to={`/comics/${products[0]._id}`} id="slider">
                    <div class="slider-item">
                        <img
                            src={products[0].imgSrc}
                            alt={products[0].title}
                        />
                        <div class="slider-badge bat-flex bat-align-center">
                            New Arrival <span class="material-icons"> star </span>
                        </div>
                        <div class="slider-title">
                            {products[0].title} <br />
                            <span class="small-text"> Tuesday, Jan 4th, 2022 </span>
                        </div>
                    </div>



                </Link>

            </div> : <NetflixLoader />}


        </>)
} 