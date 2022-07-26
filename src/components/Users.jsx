import React from 'react'
import {Link, Outlet, useSearchParams} from 'react-router-dom'

const Users = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const showActiveUser = searchParams.get('filter') === 'active';
  return (
    <>
    <h1>Users</h1>
    <ul>
        <li><Link to='1'>User 1</Link></li>
        <li><Link to='2'>User 2</Link></li>
        <li><Link to='3'>User 3</Link></li>
        <li><Link to='admin'>Admin</Link></li>
    </ul>
    <Outlet />
    <div>
      <button onClick={()=> setSearchParams({filter: 'active'}) }>Active Users</button>
      <button onClick={()=> setSearchParams({})}>Reset Filter</button>
    </div>
    {showActiveUser ? <h2>Showing Active Uuser</h2> : <h2>Showing all users</h2>}
    </>
    
  )
}

export default Users