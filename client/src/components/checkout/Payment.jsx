import { useNavigate } from "react-router-dom";

import "./payment.css"
export function Payment() {
  const navigate = useNavigate();


  const details = {
    order: "1234567890",
    total: 170,
    when: "06.02.2025 – 4:05pm",
    method: "gpay",
    name: "Krishna",
  };

  return (
    <main className="confirmed-page">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ←
      </button>
      <h2 className="page-title">Confirmed</h2>

      <div className="tick">✅</div>

      <section className="pay-details">
        <h4>Payment Details</h4>
        <table>
          <tbody>
            <tr>
              <td>Order number</td>
              <td>{details.order}</td>
            </tr>
            <tr>
              <td>Total</td>
              <td>₹{details.total}</td>
            </tr>
            <tr>
              <td>Date and Time</td>
              <td>{details.when}</td>
            </tr>
            <tr>
              <td>Payment method</td>
              <td>{details.method}</td>
            </tr>
            <tr>
              <td>Name</td>
              <td>{details.name}</td>
            </tr>
          </tbody>
        </table>
        <p className="receipt-note">A receipt will be sent directly to the email</p>
      </section>

      <button className="qr-btn" onClick={() => navigate("/payment/qr")}>Ok, give my QR</button>
    </main>
  );
}
