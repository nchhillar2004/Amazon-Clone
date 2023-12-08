import React from 'react'
import './ProductViews.css'

function MainProduct(props) {
  return (
    <div className="main_product">
        <div className="product_card">
            <h1>{props.offer}</h1>
              <a href={props.href}>  
              <img src={props.image} /></a>
            <a href={props.href}>See all offers</a>
        </div>
    </div>
  )
}

export default MainProduct