import React from 'react'
import './Sidebar.css'
import {NavLink} from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className='option'>
            <NavLink className="optionnav" to ="/"><p>Add Employee</p></NavLink>
        </div>
        <div className='option'>
            <NavLink className="optionnav" to ="/list"><p>List Employee</p></NavLink>
        </div>
    </div>
  )
}

export default Sidebar