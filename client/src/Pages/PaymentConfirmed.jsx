import React from 'react'
import NavBar from '../components/Navbar/Navbar'
import { Payment } from '../components/checkout/Payment'

const PaymentConfirmedPage = () => {
  return (
    <div>
        <NavBar />
        <Payment />
    </div>
  )
}

export default PaymentConfirmedPage