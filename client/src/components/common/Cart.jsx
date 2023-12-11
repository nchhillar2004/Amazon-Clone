import React from 'react'
import cart from '../../assets/cart.png'

function Cart(props) {
  return (
    <div className="border-button cart-btn">
        <div className="cart-items">
            <span>0</span>
      <img src={cart} alt="Amazon cart" width={50}/></div>
        <a href={props.href}>{props.name}</a>
    </div>
  )
}

export default Cart