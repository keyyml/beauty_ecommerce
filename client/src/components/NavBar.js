import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Logout from './Logout';
import Search from './Search'

function NavBar() {



    return(
    <>  
        <div className = "topnav">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/cart">Cart</NavLink></li>
            <li><NavLink to="/login">Login</NavLink></li>
            <li><NavLink to="/register">Register</NavLink></li>
            <Search />
            <Logout />
        </div>
    </>
    )
}

export default NavBar;