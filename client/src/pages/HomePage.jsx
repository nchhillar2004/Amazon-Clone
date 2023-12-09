import React from 'react'
import Navbar from '../components/header/Navbar'
import MainComponent from '../components/home/MainComponent'
import Footer from '../components/footer/Footer'
import { Routes, Route } from 'react-router-dom'
import CartRoute from '../routes/CartRoute'
import Orders from '../routes/Orders'
import Error from '../routes/Error'
import '../App.css'

function HomePage() {
  return (
    <div className="app_routes">
        <Navbar/>
        <div className="main_routes">
        <Routes>
            <Route exact path='/' element={<MainComponent/>}></Route>
            <Route path='/cart' element={<CartRoute/>}></Route>
            <Route path='/orders' element={<Orders/>}></Route>
            <Route path='*' element={<Error code="404" error="Page not found"/>}></Route>
            
        </Routes>
        </div>
        <Footer/>
    </div>
  )
}

export default HomePage