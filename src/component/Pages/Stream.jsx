import React from 'react'
import '../Styles/Components.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';

import featured_1 from '../images/featured-01.jpg'
import featured_2 from '../images/featured-02.jpg'
import featured_3 from '../images/featured-03.jpg'

import Avtar_1 from '../images/avatar-01.jpg'
import Avtar_2 from '../images/avatar-02.jpg'
import Avtar_3 from '../images/avatar-03.jpg'
import Avtar_4 from '../images/avatar-04.jpg'
import Stream_5 from '../images/stream-05.jpg'
import Stream_6 from '../images/stream-06.jpg'
import Stream_7 from '../images/stream-07.jpg'
import Stream_8 from '../images/stream-08.jpg'
import { Link } from 'react-router-dom';

export default function Stream() {
  return (
    <>
    <section className='browse py-2 mb-4 stream'>
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
                                <div className='texts px-2 d-flex streams'>
                                    <img src={Avtar_1} className='rounded-5 me-3' alt="" />
                                    <div className='me-auto d-flex'>
                                        <i className='fas fa-check me-2'></i>
                                        <p>LatutaM</p>
                                    </div>
                                    <div>
                                        <span className='d-flex align-items-baseline justify-content-center'>
                                            Follow
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div>
                                <div className='texts px-2 d-flex streams'>
                                    <img src={Avtar_2} className='rounded-5 me-3' alt="" />
                                    <div className='me-auto d-flex'>
                                        <i className='fas fa-check me-2'></i>
                                        <p>Kengan</p>
                                    </div>
                                    <div>
                                        <span className='d-flex align-items-baseline justify-content-center'>
                                            Follow
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div>
                                <div className='texts px-2 d-flex streams'>
                                    <img src={Avtar_3} className='rounded-5 me-3' alt="" />
                                    <div className='me-auto d-flex'>
                                        <i className='fas fa-check me-2'></i>
                                        <p>Areluwa</p>
                                    </div>
                                    <div>
                                        <span className='d-flex align-items-baseline justify-content-center'>
                                            Follow
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div>
                                <div className='texts px-2 d-flex streams'>
                                    <img src={Avtar_4} className='rounded-5 me-3' alt="" />
                                    <div className='me-auto d-flex'>
                                        <i className='fas fa-check me-2'></i>
                                        <p>Omeg</p>
                                    </div>
                                    <div>
                                        <span className='d-flex align-items-baseline justify-content-center'>
                                            Follow
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div>
                                <div className='texts px-2 d-flex streams'>
                                    <img src={Avtar_1} className='rounded-5 me-3' alt="" />
                                    <div className='me-auto d-flex'>
                                        <i className='fas fa-check me-2'></i>
                                        <p>LatutaM</p>
                                    </div>
                                    <div>
                                        <span className='d-flex align-items-baseline justify-content-center'>
                                            Follow
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
    <section className="most_popular py-4 bg-color">
        <div className="container px-4">
            <div className='px-2 mb-5 content'>
                <h2 className='fw-bold'> <b>Most Popular</b> Live Stream</h2>
            </div>
            <div className="row gy-4">
                <div className="col-lg-3 col-md-6">
                    <div>
                        <div className='none'>
                        <img src={Stream_5} className='rounded-4 w-100' alt="Stream" />
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
                        <img src={Stream_6} className='rounded-4 w-100' alt="Stream" />
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
                        <img src={Stream_7} className='rounded-4 w-100' alt="Stream" />
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
                        <img src={Stream_8} className='rounded-4 w-100' alt="Stream" />
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
                <div className="col-lg-3 col-md-6">
                    <div>
                        <div className='none'>
                        <img src={Stream_7} className='rounded-4 w-100' alt="Stream" />
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
                        <img src={Stream_8} className='rounded-4 w-100' alt="Stream" />
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
                <div className="col-lg-3 col-md-6">
                    <div>
                        <div className='none'>
                        <img src={Stream_5} className='rounded-4 w-100' alt="Stream" />
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
                        <img src={Stream_6} className='rounded-4 w-100' alt="Stream" />
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
            </div>
            <div className='d-flex justify-content-center'>
                <button className="btn mt-4 fw-bold">Load All Streams</button>
            </div>
        </div>
    </section>
    </>
  )
}
