import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NotFound from './component/First_last/404'
import Footer from './component/First_last/Footer'
import Loading from './component/First_last/Loading'
import Navbar from './component/First_last/Navbar'
import Browse from './component/Pages/Browse'
import Details from './component/Pages/Details'
import Home from './component/Pages/Home'
import Porflio from './component/Pages/Porflio'
import Stream from './component/Pages/Stream'
import './component/Styles/Components.css';

export default function App() {
  return (
    <>
      <Navbar/>
      <Loading/>
      <div className='container py-5 px-5 bg'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='home' element={<Home/>}/>
          <Route path='browse' element={<Browse/>}/>
          <Route path='details' element={<Details/>}/>
          <Route path='streams' element={<Stream/>}/>
          <Route path='porflio' element={<Porflio/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </div>
      <Footer/>
    </>
  )
}