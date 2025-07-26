import React from "react";
import "./OrderConfirmation.css";
import logo from "../../assets/logo.jpg"
const OrderConfirmation = () => {
  return (
    <div className="confirmation-container">
      <div className="confirmation-card">
        <div className="logo-section">
          <img
            src={logo}
            alt="Get That Logo"
            className="logo"
          />
          <h2 className="brand-text">GET THAT</h2>
          <p className="tagline">Break Time is Short - Get That Fast</p>
        </div>

        <div className="instructions">
          <h3>How to Collect Your Order:</h3>
          <ol>
            <li>Go to the canteen counter.</li>
            <li>Say your PIN Code to the staff.</li>
            <li>Staff will cross-check your name from the order list.</li>
            <li>Collect your meal & enjoy – no waiting, no stress.</li>
          </ol>
        </div>

        <div className="hash-section">
          <h1 className="hash-code">10678</h1>
          <p className="warning">
            Don’t share this Hash, unless you enjoy watching someone else eat your food!
          </p>
          <p className="thanks">Got It, See You Soon!</p>
        </div>

        <button className="continue-btn">Continue</button>
      </div>
    </div>
  );
};

export default OrderConfirmation;
