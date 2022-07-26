import React from 'react'
import { useParams } from 'react-router-dom'

const UserDetails = () => {
    const siteID = useParams();
  return (
    <div>User {siteID.id} Details</div>
  )
}

export default UserDetails