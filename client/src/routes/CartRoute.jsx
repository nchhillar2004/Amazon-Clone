import React from "react";
import "./cart.css";
import { Divider } from "@mui/material";
import CartProduct from "../components/views/cart/CartProduct";

function CartRoute() {
    return (
        <div className="cart_route">
            <div className="cart_left">
                <div className="card_container">
                    <div className="cart_card">
                        <h1>Shopping Cart</h1>
                        <p className="hide">Price</p>
                        <Divider className="divider" />
                        <CartProduct
                            image="https://m.media-amazon.com/images/I/71j9Pd9OvjL._AC_AA180_.jpg"
                            name="BoostMonster Energy Can, 500Ml, Halal, Adult, Caffeine Boost"
                            description="BoostMonster Energy Can, 500Ml,"
                            price="265.00"
                        />
                        <Divider />
                        <div className="flex_end flex">
                            <h3>Subtotal (1 item):</h3>
                            <span>
                                <sup>₹</sup>265.00
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cart_right">
                <div className="card_container">
                    <div className="cart_card">
                        <div className="flex_start flex">
                            <h3>Subtotal (1 item): </h3>
                            <span>
                                <sup>₹</sup>265.00
                            </span>
                        </div>
                        <div className="cart_button">
                            <a href="/" className="proceed_to_buy">
                                Proceed to Buy
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartRoute;
