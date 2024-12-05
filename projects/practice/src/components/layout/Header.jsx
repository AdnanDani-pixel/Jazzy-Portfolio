import React from 'react'
import { NavLink } from 'react-router-dom'
import {useKindeAuth} from "@kinde-oss/kinde-auth-react";



const Header = () => {
  const { login, register } = useKindeAuth();
  return (
    <div className='w-full bg-slate-600'>
        <div className="navbar flex justify-between items-center px-10 w-full h-[50px]">
            <div className="logo"><a href="#">Logo</a></div>
            <div className="links flex gap-10">
                <NavLink to="/" >Home</NavLink>
                <NavLink to="/about" >About</NavLink>
                <NavLink to="/contact" >Contact</NavLink>
                <button onClick={register} type="button">Register</button>
                <button onClick={login} type="button">Log In</button>
                
            </div>
        </div>
    </div>
  )
}

export default Header