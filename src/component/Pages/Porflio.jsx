import React from 'react'
import { Link } from 'react-router-dom'
import Game_1 from '../images/game-01.jpg'
import Game_2 from '../images/game-02.jpg'
import Game_3 from '../images/game-03.jpg'
import Porflio_1 from '../images/profile.jpg'
import Clip_1 from '../images/clip-01.jpg'
import Clip_2 from '../images/clip-02.jpg'
import Clip_3 from '../images/clip-03.jpg'
import Clip_4 from '../images/clip-04.jpg'


export default function Porflio() {
  return (
    <>
    <section className="popular porflio py-5 bg-color">
        <div className="container px-4">
            <div className="row gy-4 px-4">
                <div className="col-lg-6">
                    <img src={Porflio_1} className='rounded-5' alt="Porflio" />
                </div>
                <div className="col-lg-6 d-flex justify-content-center align-items-center">
                    <div className='title'>
                        <div className="box py-lg-5">
                            <span className='my-5'>Offline</span>
                            <h3 className='my-3'>Alan Smithee</h3>
                            <p className='text-muted mb-4'>
                            You Haven't Gone Live yet. Go Live By Touching The Button Below.
                            </p>
                            <button className='btn'>Start Live Stream</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row gy-4 px-4 mt-4">
                <div className="col-lg-3 col-sm-6">
                    <div className='boxs py-3 px-2'>
                        <img src={Clip_1} className='w-100 rounded-4' alt="popular" />
                        <div className='texts mt-3'>
                            <div>
                                <h6>First Clip</h6>
                            </div>
                            <div>
                                <span className='d-flex align-items-baseline justify-content-center'>
                                    <i className='fas fa-eye mx-1'></i> 250
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className='boxs py-3 px-2'>
                        <img src={Clip_2} className='w-100 rounded-4' alt="popular" />
                        <div className='texts mt-3'>
                            <div>
                                <h6>Second Clip</h6>
                            </div>
                            <div>
                                <span className='d-flex align-items-baseline justify-content-center'>
                                    <i className='fas fa-eye mx-1'></i> 183
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className='boxs py-3 px-2'>
                        <img src={Clip_3} className='w-100 rounded-4' alt="popular" />
                        <div className='texts mt-3'>
                            <div>
                                <h6>Third Clip</h6>
                            </div>
                            <div>
                                <span className='d-flex align-items-baseline justify-content-center'>
                                    <i className='fas fa-eye mx-1'></i> 141
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className='boxs py-3 px-2'>
                        <img src={Clip_4} className='w-100 rounded-4' alt="popular" />
                        <div className='texts mt-3'>
                            <div>
                                <h6>Fourth Clip</h6>
                            </div>
                            <div>
                                <span className='d-flex align-items-baseline justify-content-center'>
                                    <i className='fas fa-eye mx-1'></i> 91
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="library bg-color my-5 py-5">
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
                        <button className='btn px-5'>Downloaded</button>
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
