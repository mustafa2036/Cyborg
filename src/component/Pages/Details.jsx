import React, { useEffect, useState } from 'react'
import Axios  from 'axios';
import Game_1 from '../images/game-01.jpg'
import Game_2 from '../images/game-02.jpg'
import Game_3 from '../images/game-03.jpg'
import { Link } from 'react-router-dom';

export default function Details() {
    const [games, setGames] = useState([]);

    const  nums = new Array(10).fill(1).map((ele , index) => index + 1);

    async function getGamesApi(pageNumber){
        const {data} = await Axios.get(`https://api.rawg.io/api/games?key=630f1dd87d0c4ddfa8b52c9da7cee00d&page=${pageNumber}`);
        setGames(data.results);
    }
    useEffect(()=> {
        getGamesApi(1);
    } , [])

  return (
    <>
    <section className="details bg-color py-5">
        <div className="container px-4">
            <div className='mb-5 content'>
                <h2 className='fw-bold'> <b>Details</b> Featured</h2>
            </div>
            <div className="row d-flex justify-content-center gy-4">
                {games.map((game , i) =>
                    <div className="col-lg-4 col-md-6" key={i}>
                            <div className='box text-white' key={i}>
                                <img src={game.background_image} className='w-100' alt="" />
                                <span className='rate'>
                                    <i className='fas fa-star'></i> {game.rating}
                                </span>
                                <div className='boxs'>
                                    <h3>{game.name}</h3>
                                    <span>{game.released}</span>
                                    <p className='my-3'>Playing {game.added_by_status.playing} </p>
                                    <span>precent: {game.ratings[1].percent} </span>
                                    <p className='my-3'>
                                        <i className="fas fa-gamepad"></i> {game.genres[0].name} 
                                    </p>
                                    <span className='d-flex align-items-baseline justify-content-center'>
                                        <i className='fas fa-download mx-1'></i> {game.added}
                                    </span>
                                </div>
                            </div>
                    </div>
                )}
            </div>
            <nav aria-label="..." className='pt-5'>
                <ul className="pagination pagination-sm d-flex justify-content-center">
                    {nums.map((ele) => 
                        <li className="page-item" key={ele}>
                            <Link to="" onClick={()=> getGamesApi(ele)} 
                            className="page-link px-3 py-2">{ele}</Link>
                        </li>
                    )}
                </ul>
            </nav>
            <div className='d-flex justify-content-center'>
                <span className='text-muted'>Please Wait Is Loading Data!</span>
            </div>
        </div>
    </section>
    <section className="library bg-color py-5 my-5">
        <div className="container px-4">
            <div className='mb-4 content'>
                <h2 className='fw-bold'> <b>Other Related</b> Games</h2>
            </div>
            <div className="row gy-4">
                <div className="col-lg-6 col-md-6">
                    <div className='d-flex text-white d-flex text-white justify-content-between'>
                        <div className='d-flex align-items-center mt-3'>
                            <img src={Game_1} className='rounded-3' alt="Game" />
                            <div className='mx-4 mt-3'>
                                <h6>Dota 2</h6>
                                <p className='text-muted'>Sandbox</p>
                            </div>
                        </div>
                        <div className='d-flex align-items-center'>
                            <div>
                                <span className='d-flex align-items-baseline justify-content-center'>
                                    <i className='fas fa-star mx-1 my-1'></i> 4.8
                                </span>
                                <span className='d-flex align-items-baseline justify-content-center'>
                                    <i className='fas fa-download mx-1 my-1'></i> 2.3M
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                    <div className='d-flex text-white d-flex text-white justify-content-between'>
                        <div className='d-flex align-items-center mt-3'>
                            <img src={Game_2} className='rounded-3' alt="Game" />
                            <div className='mx-4 mt-3'>
                                <h6>Fortnite</h6>
                                <p className='text-muted'>Sandbox</p>
                            </div>
                        </div>
                        <div className='d-flex align-items-center'>
                            <div>
                                <span className='d-flex align-items-baseline justify-content-center'>
                                    <i className='fas fa-star mx-1 my-1'></i> 4.8
                                </span>
                                <span className='d-flex align-items-baseline justify-content-center'>
                                    <i className='fas fa-download mx-1 my-1'></i> 2.3M
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                    <div className='d-flex text-white d-flex text-white justify-content-between'>
                        <div className='d-flex align-items-center mt-3'>
                            <img src={Game_3} className='rounded-3' alt="Game" />
                            <div className='mx-4 mt-3'>
                                <h6>CS-GO</h6>
                                <p className='text-muted'>Sandbox</p>
                            </div>
                        </div>
                        <div className='d-flex align-items-center'>
                            <div>
                                <span className='d-flex align-items-baseline justify-content-center'>
                                    <i className='fas fa-star mx-1 my-1'></i> 4.8
                                </span>
                                <span className='d-flex align-items-baseline justify-content-center'>
                                    <i className='fas fa-download mx-1 my-1'></i> 2.3M
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                    <div className='d-flex text-white d-flex text-white justify-content-between'>
                        <div className='d-flex align-items-center mt-3'>
                            <img src={Game_2} className='rounded-3' alt="Game" />
                            <div className='mx-4 mt-3'>
                                <h6>Fortnite</h6>
                                <p className='text-muted'>Sandbox</p>
                            </div>
                        </div>
                        <div className='d-flex align-items-center'>
                            <div>
                                <span className='d-flex align-items-baseline justify-content-center'>
                                    <i className='fas fa-star mx-1 my-1'></i> 4.8
                                </span>
                                <span className='d-flex align-items-baseline justify-content-center'>
                                    <i className='fas fa-download mx-1 my-1'></i> 2.3M
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                    <div className='d-flex text-white d-flex text-white justify-content-between'>
                        <div className='d-flex align-items-center mt-3'>
                            <img src={Game_3} className='rounded-3' alt="Game" />
                            <div className='mx-4 mt-3'>
                                <h6>CS-GO</h6>
                                <p className='text-muted'>Sandbox</p>
                            </div>
                        </div>
                        <div className='d-flex align-items-center'>
                            <div>
                                <span className='d-flex align-items-baseline justify-content-center'>
                                    <i className='fas fa-star mx-1 my-1'></i> 4.8
                                </span>
                                <span className='d-flex align-items-baseline justify-content-center'>
                                    <i className='fas fa-download mx-1 my-1'></i> 2.3M
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                    <div className='d-flex text-white d-flex text-white justify-content-between'>
                        <div className='d-flex align-items-center mt-3'>
                            <img src={Game_1} className='rounded-3' alt="Game" />
                            <div className='mx-4 mt-3'>
                                <h6>Dota 2</h6>
                                <p className='text-muted'>Sandbox</p>
                            </div>
                        </div>
                        <div className='d-flex align-items-center'>
                            <div>
                                <span className='d-flex align-items-baseline justify-content-center'>
                                    <i className='fas fa-star mx-1 my-1'></i> 4.8
                                </span>
                                <span className='d-flex align-items-baseline justify-content-center'>
                                    <i className='fas fa-download mx-1 my-1'></i> 2.3M
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}