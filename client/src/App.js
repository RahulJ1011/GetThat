
import './App.css';
import {Route,Routes} from "react-router-dom"

import HomePage from './Pages/HomePage';
import CanteenMenuPage from './Pages/CanteenMenuPage';
import CanteenSelectionPage from './Pages/CanteenSelectionPage';
import PaymentConfirmedPage from './Pages/PaymentConfirmed';
import PaymentGateWayPage from './Pages/PaymentGateWayPage';
import QrCodePage from './Pages/QrCodePage';
import OTP from './Pages/OTP';
import CanteenInside from './Pages/CanteenInside';
import OrderConfirmationPage from './Pages/OrderConfirmationPage';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
function App() {
  return (
    <div className="App">
     <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      <Route path='/' element={<HomePage />} />
      <Route path='/mainCanteen' element={<CanteenInside />} />
      <Route path="/canteens" element={<CanteenSelectionPage />} />
      <Route path="/canteens/c1" element={<CanteenMenuPage />} />
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