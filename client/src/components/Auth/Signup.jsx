import React from "react";
import "./Signup.css";
import logo from "../../assets/logo.jpg"
const Signup = () => {
  return (
    <div className="signup-container">
      <div className="form-box">
        <img src={logo} alt="Logo" className="logo" />

        <h2 className="heading">
          Let’s get you in the <span className="highlight">fast</span> lane
        </h2>
        <p className="subtext">Enter your number to pre-book your food</p>

        <form>
          <input type="text" placeholder="Name" />
          <input type="tel" placeholder="Enter the Mobile no.*" />
          <select>
            <option value="">Year</option>
            <option value="IV">IV</option>
            <option value="III">III</option>
            <option value="II">II</option>
            <option value="I">I</option>
          </select>
          <input type="email" placeholder="Mail id." />
          <input type="password" placeholder="Password" />

          <div className="checkbox-wrapper">
            <input type="checkbox" id="terms" />
            <label htmlFor="terms">
              I accept terms and condition and privacy policy required
            </label>
          </div>

          <button type="submit" className="submit-btn">
            Get verification code
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
