import { useNavigate } from "react-router-dom";
import "./checkout.css"
import { useState } from "react";
import gpay from "../../assets/GPay.png"
import paytm from "../../assets/paytm.png"
import phonePe from "../../assets/phonePe.png"
export function Checkout() {
  const navigate = useNavigate();
  const [method, setMethod] = useState("gpay");

  const options = [
    { id: "gpay", name: "Gpay", logo: gpay },
    { id: "paytm", name: "Paytm", logo: paytm },
    { id: "phonepe", name: "PhonePe", logo: phonePe },
  ];

  return (
    <main className="payment-page">
    <div className="back-button-container">
  <button onClick={() => navigate(-1)} className="back-button">←</button>
</div>

      <h2 className="page-title">Payment</h2>

      <ul className="pay-options">
        {options.map((o) => (
          <li
            key={o.id}
            className={`pay-option ${method === o.id ? "selected" : ""}`}
            onClick={() => setMethod(o.id)}
          >
            <img src={o.logo} alt={o.name} />
            <span>{o.name}</span>
            <input type="radio" checked={method === o.id} readOnly />
          </li>
        ))}
      </ul>

      <button className="continue-btn" onClick={() => navigate("/payment/confirmed")}>Continue</button>
    </main>
  );
}
