import React from 'react'
import '../Styles/Components.css'
import popular_1 from '../images/popular-01.jpg'
import popular_2 from '../images/popular-02.jpg'
import popular_3 from '../images/popular-03.jpg'
import popular_4 from '../images/popular-04.jpg'
import popular_5 from '../images/popular-05.jpg'
import popular_6 from '../images/popular-06.jpg'
import popular_7 from '../images/popular-07.jpg'
import popular_8 from '../images/popular-08.jpg'
import Game_1 from '../images/game-01.jpg'
import Game_2 from '../images/game-02.jpg'
import Game_3 from '../images/game-03.jpg'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
    <section className="home py-5">
        <div className="container">
            <div className='d-flex align-items-center px-4'>
                <div className='text-white'>
                    <p className='mb-4'>Welcome To Cyborg</p>
                    <h1 className='text-uppercase'><b>Browse</b> Our Popular</h1>
                    <h2 className='text-uppercase'> Games Here</h2>
                    <Link to="/browse" className='btn px-4 mt-3 py-2'>Browse Now</Link>
                </div>
            </div>
        </div>
    </section>
    <section className='popular bg-color py-5 my-5'>
        <div className='container px-4'>
            <div className='px-4 mb-4 content'>
                <h2 className='fw-bold'> <b>Most Popular</b> Right Now</h2>
            </div>
            <div className="row gy-4 px-4">
                <div className="col-lg-3 col-sm-6">
                    <div className='boxs py-3 px-2'>
                        <img src={popular_1} className='w-100 rounded-4' alt="popular" />
                        <div className='texts mt-3'>
                            <div>
                                <h6>Fortnite</h6>
                                <p className='text-muted'>Sandbox</p>
                            </div>
                            <div>
                                <span className='d-flex align-items-baseline justify-content-center'>
                                    <i className='fas fa-star mx-1'></i> 4.8
                                </span>
                                <span className='d-flex align-items-baseline justify-content-center'>
                                    <i className='fas fa-download mx-1'></i> 2.3M
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className='boxs py-3 px-2'>
                        <img src={popular_2} className='w-100 rounded-4' alt="popular" />
                        <div className='texts mt-3'>
                            <div>
                                <h6>PubG</h6>
                                <p className='text-muted'>Battle S</p>
                            </div>
                            <div>
                                <span className='d-flex align-items-baseline justify-content-center'>
                                    <i className='fas fa-star mx-1'></i> 4.8
                                </span>
                                <span className='d-flex align-items-baseline justify-content-center'>
                                    <i className='fas fa-download mx-1'></i> 2.3M
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className='boxs py-3 px-2'>
                        <img src={popular_3} className='w-100 rounded-4' alt="popular" />
                        <div className='texts mt-3'>
                            <div>
                                <h6>Dota2</h6>
                                <p className='text-muted'>Steam-X</p>
                            </div>
                            <div>
                                <span className='d-flex align-items-baseline justify-content-center'>
                                    <i className='fas fa-star mx-1'></i> 4.8
                                </span>
                                <span className='d-flex align-items-baseline justify-content-center'>
                                    <i className='fas fa-download mx-1'></i> 2.3M
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className='boxs py-3 px-2'>
                        <img src={popular_4} className='w-100 rounded-4' alt="popular" />
                        <div className='texts mt-3'>
                            <div>
                                <h6>CS-GO</h6>
                                <p className='text-muted'>Legendary</p>
                            </div>
                            <div>
                                <span className='d-flex align-items-baseline justify-content-center'>
                                    <i className='fas fa-star mx-1'></i> 4.8
                                </span>
                                <span className='d-flex align-items-baseline justify-content-center'>
                                    <i className='fas fa-download mx-1'></i> 2.3M
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className='boxs py-3 px-2'>
                        <img src={popular_5} className='w-100 rounded-4' alt="popular" />
                        <div className='texts mt-3'>
                            <div>
                                <h6>Mini Craft</h6>
                                <p className='text-muted'>Legendary</p>
                            </div>
                            <div>
                                <span className='d-flex align-items-baseline justify-content-center'>
                                    <i className='fas fa-star mx-1'></i> 4.8
                                </span>
                                <span className='d-flex align-items-baseline justify-content-center'>
                                    <i className='fas fa-download mx-1'></i> 2.3M
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className='boxs py-3 px-2'>
                        <img src={popular_6} className='w-100 rounded-4' alt="popular" />
                        <div className='texts mt-3'>
                            <div>
                                <h6>Eagles Fly</h6>
                                <p className='text-muted'>Matrix Games</p>
                            </div>
                            <div>
                                <span className='d-flex align-items-baseline justify-content-center'>
                                    <i className='fas fa-star mx-1'></i> 4.8
                                </span>
                                <span className='d-flex align-items-baseline justify-content-center'>
                                    <i className='fas fa-download mx-1'></i> 2.3M
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className='boxs py-3 px-2'>
                        <img src={popular_7} className='w-100 rounded-4' alt="popular" />
                        <div className='texts mt-3'>
                            <div>
                                <h6>Warface</h6>
                                <p className='text-muted'>Max 3D</p>
                            </div>
                            <div>
                                <span className='d-flex align-items-baseline justify-content-center'>
                                    <i className='fas fa-star mx-1'></i> 4.8
                                </span>
                                <span className='d-flex align-items-baseline justify-content-center'>
                                    <i className='fas fa-download mx-1'></i> 2.3M
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className='boxs py-3 px-2'>
                        <img src={popular_8} className='w-100 rounded-4' alt="popular" />
                        <div className='texts mt-3'>
                            <div>
                                <h6>Warcraft</h6>
                                <p className='text-muted'>Legend</p>
                            </div>
                            <div>
                                <span className='d-flex align-items-baseline justify-content-center'>
                                    <i className='fas fa-star mx-1'></i> 4.8
                                </span>
                                <span className='d-flex align-items-baseline justify-content-center'>
                                    <i className='fas fa-download mx-1'></i> 2.3M
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='d-flex justify-content-center align-items-center mt-5'>
                <Link to="" className='btn px-4 py-2'>Discover Popular</Link>
            </div>
        </div>
    </section>
    <section className="library bg-color py-5">
        <div className="container px-4">
            <div className='px-4 mb-4 content'>
                <h2 className='fw-bold'> <b>Your Gaming</b> Library</h2>
            </div>
            <div className="row gy-4 mb-md-3 mb-4 px-4">
                <div className="col-lg-3 col-md-4 col-sm-8 offset-sm-4 offset-lg-0">
                    <div className='d-flex text-white'>
                        <img src={Game_1} className='rounded-5 w-100' alt="Game" />
                        <div className='mx-5 mt-3'>
                            <h6>Dota 2</h6>
                            <p className='text-muted'>Sandbox</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-4">
                    <div className='text-white mt-3 d-flex justify-content-center'>
                        <div>
                            <h6 className='fw-bold'>Date Added</h6>
                            <p className='text-muted'>24/08/2030</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-4">
                    <div className='text-white mt-3 d-flex justify-content-center'>
                        <div>
                            <h6 className='fw-bold'>Hourse Played</h6>
                            <p className='text-muted'>634 H 22 Mins</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2 col-md-7 col-sm-4">
                    <div className='text-white mt-lg-3 mt-sm-3 d-flex justify-content-center'>
                        <div>
                            <h6 className='fw-bold'>Currently</h6>
                            <p className='text-muted'>Downloaded</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-5">
                    <div className="btns mt-lg-3 d-flex justify-content-center">
                        <button className='btn px-5'>Downloaded</button>
                    </div>
                </div>
            </div>
            <div className="row gy-4 mb-md-3 mb-4 px-4">
                <div className="col-lg-3 col-md-4 col-sm-8 offset-sm-4  offset-lg-0">
                    <div className='d-flex text-white'>
                        <img src={Game_2} className='rounded-5 w-100' alt="Game" />
                        <div className='mx-5 mt-3'>
                            <h6>Fortnite</h6>
                            <p className='text-muted'>Sandbox</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-4">
                    <div className='text-white mt-3 d-flex justify-content-center'>
                        <div>
                            <h6 className='fw-bold'>Date Added</h6>
                            <p className='text-muted'>22/06/2030</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-4">
                    <div className='text-white mt-3 d-flex justify-content-center'>
                        <div>
                            <h6 className='fw-bold'>Hourse Played</h6>
                            <p className='text-muted'>740 H 52 Mins</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2 col-md-7 col-sm-4">
                    <div className='text-white mt-lg-3 mt-sm-3 d-flex justify-content-center'>
                        <div>
                            <h6 className='fw-bold'>Currently</h6>
                            <p className='text-muted'>Downloaded</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-5">
                    <div className="btns mt-lg-3 d-flex justify-content-center">
                        <button className='btn px-5 color'>Download</button>
                    </div>
                </div>
            </div>
            <div className="row gy-4 px-4">
                <div className="col-lg-3 col-md-4 col-sm-8 offset-sm-4 offset-lg-0">
                    <div className='d-flex text-white'>
                        <img src={Game_3} className='rounded-5 w-100' alt="Game" />
                        <div className='mx-5 mt-3'>
                            <h6>CS-GO</h6>
                            <p className='text-muted'>Sandbox</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-4">
                    <div className='text-white mt-3 d-flex justify-content-center'>
                        <div>
                            <h6 className='fw-bold'>Date Added</h6>
                            <p className='text-muted'>21/04/2030</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-4">
                    <div className='text-white mt-3 d-flex justify-content-center'>
                        <div>
                            <h6 className='fw-bold'>Hourse Played</h6>
                            <p className='text-muted'>892 H 14 Mins</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2 col-md-7 col-sm-4">
                    <div className='text-white mt-lg-3 mt-sm-3 d-flex justify-content-center'>
                        <div>
                            <h6 className='fw-bold'>Currently</h6>
                            <p className='text-muted'>Downloaded</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-5">
                    <div className="btns mt-lg-3 d-flex justify-content-center">
                        <button className='btn px-5'>Downloaded</button>
                    </div>
                </div>
            </div>
            <div className='d-flex library justify-content-center align-items-center mt-5'>
                <Link to="" className='btn px-4 py-2'>View Your Library</Link>
            </div>
        </div>
    </section>
    </>
  )
}
