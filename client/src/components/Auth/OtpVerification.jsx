import React, { useState, useEffect, useRef } from "react";
import "./Otp.css";
import logo from "../../assets/logo.jpg"
const OtpVerification = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [timer, setTimer] = useState(30);
  const inputsRef = useRef([]);

  useEffect(() => {
    if (timer === 0) return;
    const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
    return () => clearInterval(interval);
  }, [timer]);

  const handleChange = (value, index) => {
    if (!/^\d?$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 3) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleVerify = () => {
    alert("Verifying OTP: " + otp.join(""));
  };

  return (
    <div className="otp-container">
      <div className="logo-section">
        <img src={logo} alt="Logo" className="logo" />
       {/*  <h1 className="brand-title">GET<br />THAT</h1>
        <p className="brand-subtitle">Break Time Is Short<br />- Get That Fast</p> */}
      </div>

      <div className="content-section">
        <h2 className="headline">
          Let’s get you in the <span className="highlight">fast lane</span>
        </h2>
        <p className="info-text">
          We sent a verification code to <strong>9087473112</strong>
        </p>

        <div className="otp-inputs">
          {otp.map((digit, i) => (
            <input
              key={i}
              ref={(el) => (inputsRef.current[i] = el)}
              className="otp-box"
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(e.target.value, i)}
            />
          ))}
        </div>

        <p className="timer-text">
          Didn’t get the code? <span id="timer">00:{timer.toString().padStart(2, "0")}</span>
        </p>

        <button className="verify-btn" onClick={handleVerify}>
          Verify
        </button>

        <p className="support-text">
          Need help? <a href="#">Contact support</a>
        </p>
      </div>
    </div>
  );
};

export default OtpVerification;
