import React from "react";
import "./Login.css"; // Import the CSS file

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        {/* Logo */}
        <div className="logo-section">
          <img src="/logo.png" alt="logo" className="logo-image" />
          <h2 className="logo-title">GET THAT</h2>
          <p className="logo-subtitle">Break Time Is Short<br />- Get That Fast</p>
        </div>

        {/* Title */}
        <div className="title-section">
          <h3>
            Let’s get you in the <span className="highlight">fast</span> lane
          </h3>
          <p className="subtext">Enter your number to pre-book your food</p>
        </div>

        {/* Form */}
        <form className="form-section">
          <input type="email" placeholder="Mail id." className="input-field" />
          <div className="password-section">
            <input type="password" placeholder="Password" className="input-field" />
            <span className="forget-text">Forget Password?</span>
          </div>
          <button className="login-button">Login</button>
        </form>

        {/* Signup */}
        <p className="signup-text">
          Don’t have an Account ? <span className="signup-link">Sign Up</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
