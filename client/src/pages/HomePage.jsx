import React from 'react'
import Navbar from '../components/header/Navbar'
import MainComponent from '../components/home/MainComponent'
import Footer from '../components/footer/Footer'

function HomePage() {
  return (
    <div className="home_page">
        <Navbar/>
        <MainComponent/>
        <Footer/>
    </div>
  )
}

export default HomePage