import React from 'react'
import './MainComp.css'
import Banner from './Banner'
import MainProduct from '../views/MainProduct'
import SlideProducts from '../views/SlideProducts'

function MainComponent() {
  return (
    <div className="home_section">
        <div className="banner_section">
            <Banner/>
        </div>
        <div className="products_section">
          <div className="products_list">
          <MainProduct offer="Upto 40% dicount on mobile phones" image={"https://m.media-amazon.com/images/I/41qLZhKF5ZL._SL500_.jpg"}/>
          <MainProduct offer="Upto 12% dicount on men's fashion" image={"https://upload.wikimedia.org/wikipedia/en/thumb/5/52/American-psycho-patrick-bateman.jpg/220px-American-psycho-patrick-bateman.jpg"}/>
          <MainProduct offer="4+ Deals for you" image={"https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61KNJav3S9L._SX569_.jpg"}/>
          <MainProduct offer="Upto 75% Off on Home and kitchen" image={"https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71oZDj080YL._SL1440_.jpg"}/>
          </div>
          
        </div><div className="space"></div>
        <SlideProducts title="Deals of the day" href="/"/>
        <SlideProducts title="Amazon Prime Special" href="/"/>
        <div className="products_list">
          <MainProduct offer="Upto 40% dicount on mobile phones" image={"https://m.media-amazon.com/images/I/41qLZhKF5ZL._SL500_.jpg"}/>
          <MainProduct offer="Upto 12% dicount on men's fashion" image={"https://upload.wikimedia.org/wikipedia/en/thumb/5/52/American-psycho-patrick-bateman.jpg/220px-American-psycho-patrick-bateman.jpg"}/>
          <MainProduct offer="4+ Deals for you" image={"https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61KNJav3S9L._SX569_.jpg"}/>
          <MainProduct offer="Upto 75% Off on Home and kitchen" image={"https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71oZDj080YL._SL1440_.jpg"}/>
          </div>
          <SlideProducts title="From best sellers" href="/"/>
    </div>
  )
}

export default MainComponent