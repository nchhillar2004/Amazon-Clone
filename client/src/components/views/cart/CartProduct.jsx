import React from 'react'
import './CartProduct.css'
import { Divider } from '@mui/material'

function CartProduct(props) {
  return (
    <div className="cart_product">
        <img src={props.image} alt="" />
        <div className="c_prdct_right">
            <div className="cpr_left">
            <h1>{props.name}</h1>
            <p>{props.description}</p>
            <a href="/">Delete</a></div>
            <div className="spr_right">
                <b>₹{props.price}</b>
            </div>
        </div>
    </div>
  )
}

export default CartProduct