import React from 'react'
import '../Styles/Components.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import { Link } from 'react-router-dom';
import featured_1 from '../images/featured-01.jpg'
import featured_2 from '../images/featured-02.jpg'
import featured_3 from '../images/featured-03.jpg'
import Game_1 from '../images/game-01.jpg'
import Game_2 from '../images/game-02.jpg'
import Game_3 from '../images/game-03.jpg'
import Servcies_1 from '../images/service-01.jpg'
import Servcies_2 from '../images/service-02.jpg'
import Servcies_3 from '../images/service-03.jpg'
import Stream_1 from '../images/stream-01.jpg'
import Stream_2 from '../images/stream-02.jpg'
import Stream_3 from '../images/stream-03.jpg'
import Stream_4 from '../images/stream-04.jpg'
import Avtar_1 from '../images/avatar-01.jpg'
import Avtar_2 from '../images/avatar-02.jpg'
import Avtar_3 from '../images/avatar-03.jpg'
import Avtar_4 from '../images/avatar-04.jpg'

export default function Browse() {
  return (
    <>
    <section className='browse py-2'>
        <div className="container px-4">
            <div className="row gy-4">
                <div className="col-lg-7 bg-color py-4">
                    <div className='px-2 mb-2 content'>
                        <h2 className='fw-bold'> <b>Featured</b> Games</h2>
                    </div>
                    <OwlCarousel className='owl-theme'animateOut items='3' loop nav>
                        <div className="item py-4">
                            <div className='position-relative'>
                                <img src={featured_1} alt="clip" className='w-100 rounded-4 px-2' />
                                <div className="none px-4 py-2">
                                    <span className='fw-bold'>2.4K Streaming</span>
                                </div>
                            </div>
                            <div className='texts mt-3 px-2'>
                                <div>
                                    <h6 className='fw-bold'>Island Rusty</h6>
                                    <p className='text-muted'>249K Downloads</p>
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
                        <div className="item py-4">
                            <div className='position-relative'>
                                <img src={featured_2} alt="clip" className='w-100 rounded-4 px-2' />
                                <div className="none px-4 py-2">
                                    <span className='fw-bold'>2.4K Streaming</span>
                                </div>
                            </div>
                            <div className='texts mt-3 px-2'>
                                <div>
                                    <h6 className='fw-bold'>CS-Go</h6>
                                    <p className='text-muted'>249K Downloads</p>
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
                        <div className="item py-4">
                            <div className='position-relative'>
                                <img src={featured_3} alt="clip" className='w-100 rounded-4 px-2' />
                                <div className="none px-4 py-2">
                                    <span className='fw-bold'>2.4K Streaming</span>
                                </div>
                            </div>
                            <div className='texts mt-3 px-2'>
                                <div>
                                    <h6 className='fw-bold'>Gamezer</h6>
                                    <p className='text-muted'>249K Downloads</p>
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
                    </OwlCarousel>
                </div>
                <div className="col-lg-4 offset-lg-1 bg-color py-4 px-4">
                    <div className='mb-4 content'>
                        <h2 className='fw-bold'> <b>Top</b> <br /> Downloaded</h2>
                    </div>
                    <div className="row gy-4">
                        <div className="col-12">
                            <div>
                                <div className='texts px-2'>
                                        <img src={Game_1} className='rounded-4 me-3' alt="" />
                                        <div className='me-auto'>
                                            <h6 className='fw-bold'>Fortnite</h6>
                                            <p className='text-muted'>Sendbox</p>
                                        </div>
                                        <div>
                                            <span className='d-flex align-items-baseline justify-content-center'>
                                                <i className='fas fa-star mx-1'></i> 4.9
                                            </span>
                                            <span className='d-flex align-items-baseline justify-content-center'>
                                                <i className='fas fa-download mx-1'></i> 2.2M
                                            </span>
                                        </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div>
                                <div className='texts px-2'>
                                        <img src={Game_2} className='rounded-4 me-3' alt="" />
                                        <div className='me-auto'>
                                            <h6 className='fw-bold'>CS-GO</h6>
                                            <p className='text-muted'>Legendary</p>
                                        </div>
                                        <div>
                                            <span className='d-flex align-items-baseline justify-content-center'>
                                                <i className='fas fa-star mx-1'></i> 4.9
                                            </span>
                                            <span className='d-flex align-items-baseline justify-content-center'>
                                                <i className='fas fa-download mx-1'></i> 2.2M
                                            </span>
                                        </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div>
                                <div className='texts px-2'>
                                        <img src={Game_3} className='rounded-4 me-3' alt="" />
                                        <div className='me-auto'>
                                            <h6 className='fw-bold'>PupG</h6>
                                            <p className='text-muted'>Battle Royale</p>
                                        </div>
                                        <div>
                                            <span className='d-flex align-items-baseline justify-content-center'>
                                                <i className='fas fa-star mx-1'></i> 4.9
                                            </span>
                                            <span className='d-flex align-items-baseline justify-content-center'>
                                                <i className='fas fa-download mx-1'></i> 2.2M
                                            </span>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className='stream py-5 my-5'>
        <div className="container px-4">
            <div className='px-2 mb-5 content text-center'>
                <h2 className='fw-bold'> <b>How To Start You</b> Live Stream</h2>
            </div>
            <div className="row gy-4">
                <div className="col-lg-4 col-md-6">
                    <div className='text-white py-4 px-4 rounded-4'>
                        <img src={Servcies_1} className='mb-3 rounded-circle' alt="" />
                        <h3 className='mb-3'>Go To Your Porfile</h3>
                        <p className='text-muted'>Cyborg Gaming is free HTML CSS website template provided by 
                            TemplateMo. This is Bootstrap v5.2.0 layout.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className='text-white py-4 px-4 rounded-4'>
                        <img src={Servcies_2} className='mb-3 rounded-circle' alt="" />
                        <h3 className='mb-3'>Live Stream Button</h3>
                        <p className='text-muted'>If you wish to support us, you can make a 
                        <Link to=""> small contribution via PayPal </Link>to info [at] 
                        templatemo.com</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className='text-white py-4 px-4 rounded-4'>
                        <img src={Servcies_3} className='mb-3 rounded-circle' alt="" />
                        <h3 className='mb-3'>You Are Live</h3>
                        <p className='text-muted'>You are not allowed to redistribute this template's 
                        downloadable ZIP file on any other template collection website.</p>
                    </div>
                </div>
            </div>
            <div className='d-flex justify-content-center'>
                <button className="btn mt-4 fw-bold">Go To Profile</button>
            </div>
        </div>
    </section>
    <section className="most_popular py-4 bg-color">
        <div className="container px-4">
            <div className='px-2 mb-5 content'>
                <h2 className='fw-bold'> <b>Most Popular</b> Live Stream</h2>
            </div>
            <div className="row gy-4">
                <div className="col-lg-3 col-md-6">
                    <div>
                        <div className='none'>
                        <img src={Stream_1} className='rounded-4 w-100' alt="Stream" />
                            <div className="live">
                                <span>Live</span>
                            </div>
                            <div className="watch">
                                <ul className='d-flex'>
                                    <li>
                                        <Link to="">
                                            <span className='me-2'>
                                                <i className='fa fa-eye'></i> 1.2K
                                            </span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="">
                                            <span className='ms-2'>
                                                <i className='fa text-white fa-gamepad'></i> CS-Go
                                            </span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='mt-4 text-white d-flex align-items-start'>
                            <img src={Avtar_1} className='rounded-circle me-3' alt="" />
                            <div>
                                <span>
                                    <i className='fas fa-check me-2'></i> KenganC
                                </span>
                                <h5 className='mt-2'>Just Talking With Fans</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div>
                        <div className='none'>
                        <img src={Stream_2} className='rounded-4 w-100' alt="Stream" />
                            <div className="live">
                                <span>Live</span>
                            </div>
                            <div className="watch">
                                <ul className='d-flex'>
                                    <li>
                                        <Link to="">
                                            <span className='me-2'>
                                                <i className='fa fa-eye'></i> 1.2K
                                            </span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="">
                                            <span className='ms-2'>
                                                <i className='fa text-white fa-gamepad'></i> CS-Go
                                            </span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='mt-4 text-white d-flex align-items-start'>
                            <img src={Avtar_2} className='rounded-circle me-3' alt="" />
                            <div>
                                <span>
                                    <i className='fas fa-check me-2'></i> LunaMa
                                </span>
                                <h5 className='mt-2'>CS-GO 36 Hours Live Stream</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div>
                        <div className='none'>
                        <img src={Stream_3} className='rounded-4 w-100' alt="Stream" />
                            <div className="live">
                                <span>Live</span>
                            </div>
                            <div className="watch">
                                <ul className='d-flex'>
                                    <li>
                                        <Link to="">
                                            <span className='me-2'>
                                                <i className='fa fa-eye'></i> 1.2K
                                            </span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="">
                                            <span className='ms-2'>
                                                <i className='fa text-white fa-gamepad'></i> CS-Go
                                            </span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='mt-4 text-white d-flex align-items-start'>
                            <img src={Avtar_3} className='rounded-circle me-3' alt="" />
                            <div>
                                <span>
                                    <i className='fas fa-check me-2'></i> Areluwa
                                </span>
                                <h5 className='mt-2'>Maybe Nathej Allnight Chillin'</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div>
                        <div className='none'>
                        <img src={Stream_4} className='rounded-4 w-100' alt="Stream" />
                            <div className="live">
                                <span>Live</span>
                            </div>
                            <div className="watch">
                                <ul className='d-flex'>
                                    <li>
                                        <Link to="">
                                            <span className='me-2'>
                                                <i className='fa fa-eye'></i> 1.2K
                                            </span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="">
                                            <span className='ms-2'>
                                                <i className='fa text-white fa-gamepad'></i> CS-Go
                                            </span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='mt-4 text-white d-flex align-items-start'>
                            <img src={Avtar_4} className='rounded-circle me-3' alt="" />
                            <div>
                                <span>
                                    <i className='fas fa-check me-2'></i> GangTm
                                </span>
                                <h5 className='mt-2'>Live Streaming Till Morning</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='d-flex justify-content-center'>
                <button className="btn mt-4 fw-bold">Discover All Stream</button>
            </div>
        </div>
    </section>
    </>
  )
}
