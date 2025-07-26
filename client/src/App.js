import logo from './logo.svg';
import './App.css';
import {Route,Routes} from "react-router-dom"
import Authentication from './Pages/Authentication';
import HomePage from './Pages/HomePage';
import CanteenMenuPage from './Pages/CanteenMenuPage';
import CanteenSelectionPage from './Pages/CanteenSelectionPage';
import PaymentConfirmedPage from './Pages/PaymentConfirmed';
import PaymentGateWayPage from './Pages/PaymentGateWayPage';
import QrCodePage from './Pages/QrCodePage';
import OTP from './Pages/OTP';
import CanteenInside from './Pages/CanteenInside';
import OrderConfirmationPage from './Pages/OrderConfirmationPage';
function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/auth' element={<Authentication />} />
      <Route path='/' element={<HomePage />} />
      <Route path='/mainCanteen' element={<CanteenInside />} />
      <Route path="/canteens" element={<CanteenSelectionPage />} />
      <Route path="/canteens/:id" element={<CanteenMenuPage />} />
      <Route path="/payment" element={<PaymentGateWayPage />} />
      <Route path="/payment/confirmed" element={<PaymentConfirmedPage />} />
      <Route path="/payment/qr" element={<QrCodePage />} />
      <Route path='/order' element={<OrderConfirmationPage />} />
      <Route path='/otp' element={<OTP />} />
     </Routes>
    </div>
  );
}

export default App;
