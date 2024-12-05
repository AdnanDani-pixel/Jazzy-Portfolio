import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = (props) => {

  return (
    <div className='w-full '>
        <div className='w-full bg-slate-600 text-white'>
        <div className="navbar flex justify-between items-center px-10 w-full h-[50px]">
            <div className="logo">{props.user}<a href="#"></a></div>
            <div className="links flex gap-10">
            
            <NavLink to="/" >Home</NavLink>
                <NavLink  to="/about" >About</NavLink>
                <NavLink to="/contact" >Reveal</NavLink>
                <NavLink to="/images" >Images</NavLink>
                <NavLink to="/todolist" >todolist</NavLink> 
                <NavLink to="/pics" >Pics</NavLink> 
                <NavLink to="/flyout" >Flyout</NavLink>
                <NavLink to="/menu" >Menu</NavLink>

            </div>
        </div>
    </div>
    </div>
  )
}

export default Header