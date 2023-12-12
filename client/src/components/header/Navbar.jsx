import React from "react";
import "./navbar.css";
import SubNavbar from "./SubNavbar";
import logo from "../../assets/logo.webp";
import BorderButton from "../common/BorderButton";
import IconBorderButton from "../common/IconBorderButton";
import ImageBorderButton from "../common/ImageBorderButton";
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import Cart from "../common/Cart";

function Navbar() {
    return (
        <header>
            <div className="navbar" id="top">
                <div className="nav-left">
                    <ImageBorderButton image={logo} name=".in" href="/"/>
                    <IconBorderButton icon={<FmdGoodOutlinedIcon/>} name="Update location" />
                </div>
                <div className="nav-fill">
                  <div className="nav-search">
                    <form action="">
                      <div className="nav-left all-card">
                        <div className="all-card">
                          <p>All</p>
                        </div>
                      </div>
                      <div className="nav-fill">
                        <input type="text" placeholder="Search Amazon.in"/>
                      </div>
                      <div className="nav-right sprite">
                          <span className="nav-sprite-search">
                            <input type="submit" value="Go"/>
                          </span>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="nav-right">
                <div className="nav-right accounts">
                  <BorderButton name="Login" href="/login"/>
                  <div className="nav-right">
                  <BorderButton name="Register" href="/register"/>
                  <BorderButton name="Orders" href="/orders"/></div>
                  
                </div><div className="cart"><Cart name="Cart" href="/addcart"/></div></div>
            </div>
            <div className="nav-main">
                <SubNavbar />
            </div>
        </header>
    );
}

export default Navbar;
