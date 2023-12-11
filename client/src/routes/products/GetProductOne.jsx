import React from 'react'
import './GetProductOne.css'
import { Divider } from '@mui/material'

function GetProductOne() {
  return (
    <div className="get_product_one">
        <div className="get_products_section">
            <div className="left_product">
              <div className="image_container">
                <img src="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/81ZSn2rk9WL._SX569_.jpg" alt="OnePlus 11 5G" height={400}/>
              </div>
              <Divider className='divider'/>
              <div className="seller_description">
                <p>Samsung Galaxy M14 5G (ICY Silver,6GB,128GB)|50MP Triple Cam|Segment's Only 6000 mAh</p>
              </div>
            </div>
            <div className="right_product">
              <div className="right_card">
                <h1>Samsung Galaxy M14 5G (ICY Silver,6GB,128GB)|50MP Triple Cam|Segment's Only 6000 mAh</h1>
                <div className="get_product_price">
                  <div className="get_flex">
                    <span className='discount'>-32%</span>
                    <sup>₹</sup><h2>56,999</h2>
                  </div>
                  <div className="get_flex grey">
                  <span>M.R.P.: </span><p className='mrp'>₹18,990</p></div>
                </div>
                <div className="offers">
                FREE delivery if ordered in 2 days.
                </div>
                <p className='in_stock'>In stock</p>
                <div className="buttons">
                <a className='add_to_cart'>Add to cart</a>
                <a className='buy_now'>Buy now</a></div>
                <Divider className='divider'/>
                <div className="product_description">
                  <b>About this item</b>
                  <ul>
                    <li>Camera: 50MP Main Camera with Sony IMX890 (OIS supported), 48MP Ultrawide Camera with Sony IMX581 (FOV: 115 degree) and 32MP Telephoto lens with Sony IMX709 (2X Optical Zoom); 16MP Front (Selfie) Camera with EIS support</li>
                    <li>Camera Modes: Photo, Video, Night, PRO, PANO, Portrait, TIME-LAPSE, SLO-MO, Text scanner, Movie, Long Exposure, Dual-view video, TILT-SHIFT, XPAN, Scan, STICKER, and AI ID photo</li>
                    <li>Display: 6.7 Inches; 120 Hz AMOLED QHD Display with Corning Gorilla Glass Victus; Resolution: 3216 X 1440 pixels; HDR 10+, sRGB, 10-bit Color Depth, PWM + DC dimming</li>
                    <li>Operating System: OxygenOS based on Android 13</li>
                  </ul>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default GetProductOne