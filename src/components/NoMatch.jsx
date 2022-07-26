import React from 'react'
import { useNavigate } from 'react-router-dom'

const NoMatch = () => {
    const navigate = useNavigate();
  return (
    <>
    <h1>No Match Found</h1>
    <button onClick={()=>navigate('/')}>Homepage</button>
    <button onClick={()=>navigate(-1)}>Go Back</button>
    </>
  )
}

export default NoMatch