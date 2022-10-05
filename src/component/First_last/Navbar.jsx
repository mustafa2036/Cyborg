import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../images/logo.png'
import '../Styles/Components.css'

export default function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg py-3 fixed-top">
        <div className="container">
            <a className="navbar-brand text-uppercase fw-bold d-flex" href="home">
                <img src={Logo} alt="Cyborg" className='w-100 logo' />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <i className="fa-solid fa-bars-staggered"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <input className="form-control ms-auto py-2 px-3" placeholder="Type Something"/>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link className="nav-link mx-1" aria-current="page" to="home">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link mx-1" to="browse">Browse</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link mx-1" to="details">Details</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link mx-1" to="streams">Streams</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link mx-1" to="porflio">porflio</Link>
                </li>
            </ul>
            </div>
        </div>
    </nav>
    </>
  )
}
