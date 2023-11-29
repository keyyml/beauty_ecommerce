import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Logout from './Logout';
import Search from './Search'

function NavBar() {



    return(
    <div className="w-full"> 
        <span className= "flex justify-evenly space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100" >
            <span className=''><NavLink to="/">Home</NavLink></span>
            <span><NavLink to="/cart">Cart</NavLink></span>
            <span><NavLink to="/login">Login</NavLink></span>
            <span><NavLink to="/register">Register</NavLink></span>
            <span><NavLink to="/Profile">Profile</NavLink></span>
            <Search />
            <Logout />
        </span>
    </div>
    )
}

export default NavBar;