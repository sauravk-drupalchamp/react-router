import React from 'react'
import { useNavigate } from 'react-router-dom'

const Homepage = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>Homepage</h1>
      <button onClick={()=>navigate('order-summary')}>Order Confirm</button>
    </>
  )
}

export default Homepage