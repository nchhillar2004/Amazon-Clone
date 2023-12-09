import React from "react";
import "./auth.css";
import { Divider } from "@mui/material";
import logo from "../../assets/logo.png";

function RegisterPage() {
    return (
        <div className="auth register_page">
            <div className="auth_container register">
                <div className="auth_logo">
                    <a href="/">
                    <img src={logo} alt="Amazon Logo" /></a>
                </div>
                <div className="auth_portal">
                    <div className="auth_card register">
                        <h1>Create Account</h1>
                        <form action="">
                            <label htmlFor="fname">Full name</label>
                            <input
                                type="text"
                                placeholder="First and Last name"
                                id="fname"
                                name="fname"
                            />
                            <label htmlFor="mobile">Mobile number</label>
                            <div className="flex">
                                <select name="countryCode">
                                    <option value="India +91">IN +91</option>
                                </select>
                                <input
                                    type="number"
                                    placeholder="Mobile number"
                                    id="mobile"
                                    name="mobile"
                                />
                            </div>
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" placeholder="Email address" required/>
                            <label htmlFor="password">Create password</label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Atleast 6 characters"
                                required
                            />
                            <input type="submit" value="Register" className="submit_button"/>
                        </form>
                        <Divider className="divider" />
                        <div className="auth_card_bottom">
                            <p>Already have an account? <a href="/login">Sign in &#10148;</a></p>
                            <p>By creating an account or logging in, you agree to Amazon's <a href="/conditions">Conditions of Use</a> and <a href="/privacy">Privacy Policy</a>.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Divider />
            <div className="auth_footer register">
                <div className="afooter_container">
                <div className="flex">
                    <a href="/conditions">Conditions of Use</a>
                    <a href="/privacy">Privacy Notice</a>
                    <a href="/help">Help</a>
                </div>
                <p>© 1996-2023, Amazon.com, Inc. or its affiliates</p>
                </div>
            </div>
        </div>
    );
}

export default RegisterPage;
