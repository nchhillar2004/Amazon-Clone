import React from "react";
import "./Footer.css";
import {Divider} from '@mui/material'
import logo from '../../assets/logo.webp'

function Footer() {
    return (
        <div className="footer">
            <div className="back_to_top">
                <a href="#top">Back to top</a>
            </div>
            <div className="footer_main">
                <div className="main_top">
                    <div className="main_container">
                    <div className="links nolist">
                            <h2>Get to know us</h2>
                            <nav>
                                <ul>
                                    <li>
                                        <a href="">About us</a>
                                    </li>
                                    <li>
                                        <a href="">Careers</a>
                                    </li>
                                    <li>
                                        <a href="">Amazon Sciences</a>
                                    </li>
                                    <li>
                                        <a href="">Developer</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>

                        <div className="links nolist">
                            <h2>Connect with us</h2>
                            <nav>
                                <ul>
                                    <li>
                                        <a href="">Facebook</a>
                                    </li>
                                    <li>
                                        <a href="">Instagram</a>
                                    </li>
                                    <li>
                                        <a href="">Twitter</a>
                                    </li>
                                    <li>
                                        <a href="">Youtube</a>
                                    </li>
                                    <li>
                                        <a href="">Discord</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>


                        <div className="links nolist">
                            <h2>Make money with us</h2>
                            <nav>
                                <ul>
                                    <li>
                                        <a href="">Sell on Amazon</a>
                                    </li>
                                    <li>
                                        <a href="">Build your Brand</a>
                                    </li>
                                    <li>
                                        <a href="">Advertise your product</a>
                                    </li>
                                    <li>
                                        <a href="">Amazon global selling</a>
                                    </li>
                                    <li>
                                        <a href="">Amazon Pay on merchants</a>
                                    </li>
                                    <li>
                                        <a href="">Fulfilment by Amazon</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>

                        <div className="links nolist">
                            <h2>Let Us Help You</h2>
                            <nav>
                                <ul>
                                    <li>
                                        <a href="">Your Account</a>
                                    </li>
                                    <li>
                                        <a href="">Returns Center</a>
                                    </li>
                                    <li>
                                        <a href="">Help</a>
                                    </li>
                                    <li>
                                        <a href="">Support</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                <Divider/>
                <div className="main_bottom">
                    <div className="main_container">
                        <a href="/">
                        <img src={logo} alt="Amazon logo" width={140}/></a>
                    </div>
                </div>
            </div>
            <div className="sub_footer">
              <div className="sub_notices">
              <a href="">Conditions of Use & Sale</a>
              <a href="">Privacy Notice</a></div>
              <div className="sub_copyright">
              <a href="">© 1996-2023, Amazon.com, Inc. or its affiliates</a></div>
            </div>
        </div>
    );
}

export default Footer;
