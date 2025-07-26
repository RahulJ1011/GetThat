import React from 'react'
import NavBar from '../components/Navbar/Navbar'
import OrderConfirmation from '../components/QrCode/OrderConfirmation'

const OrderConfirmationPage = () => {
  return (
    <div>
        <NavBar />
        <OrderConfirmation />
    </div>
  )
}

export default OrderConfirmationPage