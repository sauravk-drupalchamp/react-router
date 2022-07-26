import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
    // ACTIVE LINK STYLE USING FUNCTION
    const activeStyle = ({ isActive }) => {
        return {
            fontWeight: isActive ? 'bold' : 'normal',
            textDecoration: isActive ? 'none' : 'underline'
        }
    }

  return (
    <nav>
      <NavLink style={activeStyle} to="/">Home</NavLink>
      <NavLink style={activeStyle} to="/about">About</NavLink>
      <NavLink style={activeStyle} to="/products">Products</NavLink>
      <NavLink style={activeStyle} to="/users">Users</NavLink>
    </nav>
  );
};

export default Navbar;
