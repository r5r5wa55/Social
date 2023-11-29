import React from 'react'
import './register.css'

export default function Register() {
  return (
   <>
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h1 className="loginLogo">VvESocila</h1>
                <span className="loginDesc">Connect with friends and the world around you on VvESocila.</span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input type="text" className="loginInput" placeholder='Username'/>
                    <input type="email" className="loginInput" placeholder='Email'/>
                    <input type="password" className="loginInput" placeholder='Password'/>
                    <input type="password" className="loginInput" placeholder='Confirm Password'/>
                    <button className="loginButton">Login</button>
                    <span className="loginForgot">Forgot Password?</span>
                    <button className="loginReisterButton">Create a New Account</button>
                </div>
            </div>
        </div>
    </div>
   </>
  )
}
