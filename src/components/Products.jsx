import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Products = () => {
  return (
    <>
        <h1>Products</h1>
        <input type='search' placeholder='Search'/>
        <nav>
            <Link to='featured'>Featured</Link>
            <Link to='new'>New</Link>
        </nav>
        <Outlet />
    </>
    
  )
}

export default Products
// DONOT USE / FOR RELATIVE PATH IF YOU USE / THEN IT WILL CONSIDER IT FROM HOME ROUTE