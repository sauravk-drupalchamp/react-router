import React from 'react'
import {useNavigate} from 'react-router-dom'

const OrderConfirmation = () => {
    const navigate = useNavigate();
  return (
    <>
        <h1>Order Confirm</h1>
    <button onClick={()=>navigate(-1)}>GO Back</button>
    </>
  )
}

export default OrderConfirmation

// navigate('order-summary', {replace:true}) --- We use this navigate to go all the way back.