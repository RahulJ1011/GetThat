import { useNavigate } from "react-router-dom";
import "./qrcode.css"
export function QrCode() {
  const navigate = useNavigate();

  // In production, generate QR from order hash
  const dummyQR = "https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=order-123456";

  return (
    <main className="qr-page">
      <h1 className="brand">GET THAT</h1>
      <p className="tagline">Break Time is Short – Get That Fast</p>

      <p className="qr-instruction">
        Show this <span>QR code</span> at the counter & grab your food <strong>– No QR, No Food!</strong>
      </p>

      <img className="qr-img" src={dummyQR} alt="Pickup QR" />

      <p className="qr-warning">Don't share this QR, unless you enjoy watching someone else eat your food!</p>
      <p className="see-soon">Got It, See You Soon!</p>

      <button className="continue-btn" onClick={() => navigate("/")}>Continue</button>
    </main>
  );
}
