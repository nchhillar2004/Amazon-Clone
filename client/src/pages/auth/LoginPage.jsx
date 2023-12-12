import React, { useState } from "react";
import "./auth.css";
import { Divider } from "@mui/material";
import logo from "../../assets/logo.png";
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";

function LoginPage() {
    const navigate = useNavigate();
    const [logData, setData] = useState({
        email: "",
        password: "",
    });

    const addData = (e) =>{
        const {name, value} = e.target;
        setData(()=>{
            return{
                ...logData,
                [name]:value
            }
        });
        console.log(logData)
    }

    const checkLogin = async (e) =>{
        e.preventDefault();
        const { email, password } = logData;
        const res = await fetch("http://localhost:8080/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
                password,
            }),
        });
        const data = await res.json();

        if (res.status === 400 || !data) {
            toast.error("Fill all fields");
        }else if(res.status === 500){
            toast.error("Server error");
        }else if(res.status === 404){
            toast.error("User not found");
        }else if(res.status === 401){
            toast.error("Invalid details");
        } else {
            toast.success("Logged in Successfully");
            setData({
                ...logData,
                email: "",
                password: "",
            });
            setTimeout(()=>{
                navigate("/");
            }, 1000);
        }
    }
    
    return (
        <div className="auth login_page">
            <Toaster position="top-center" />
            <div className="auth_container login">
                <div className="auth_logo">
                    <a href="/">
                        <img src={logo} alt="Amazon Logo" />
                    </a>
                </div>
                <div className="auth_portal">
                    <div className="auth_card login">
                        <h1>Sign in</h1>
                        <form method="POST">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Email address"
                                onChange={addData}
                                value={logData.email}
                                required
                            />
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Atleast 6 characters"
                                onChange={addData}
                                value={logData.password}
                                required
                            />
                            <input
                                type="submit"
                                value="Continue"
                                className="submit_button"
                                onClick={checkLogin}
                            />
                        </form>
                        <Divider className="divider" />
                        <div className="auth_card_bottom">
                            <p>
                                New to Amazon?{" "}
                                <a href="/register">
                                    Create an Account &#10148;
                                </a>
                            </p>
                            <p>
                                By creating an account or logging in, you agree
                                to Amazon's{" "}
                                <a href="/conditions">Conditions of Use</a> and{" "}
                                <a href="/privacy">Privacy Policy</a>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Divider />
            <div className="auth_footer login">
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

export default LoginPage;
