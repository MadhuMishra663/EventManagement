import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
    const handleLogout=()=>{
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        window.location.href='/';
    }
  return (
    <nav>
        <Link to="/">About Us</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
       {localStorage.getItem('token') && (
        <button onClick={handleLogout}>Logout</button>
       )}
    </nav>
  )
}

export default Navbar
