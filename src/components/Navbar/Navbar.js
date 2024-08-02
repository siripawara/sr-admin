import './Navbar.css'
import { assets } from '../../assets/assets'
import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar-container'>
        <div className='logo-container'><img className='logo' src={assets.logo} alt="logo"/></div>
        <div className='nav'>
            <ul>
                <li>Admin</li>
                
            </ul>
        </div>
    </div>
  )
}

export default Navbar
