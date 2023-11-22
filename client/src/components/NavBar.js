import React from 'react';
import { NavLink } from 'react-router-dom';
import Search from './Search';

function NavBar() {


    return(
    <>  
        <div className = "topnav">
            <li><NavLink to="/cart">Cart</NavLink></li>
            <li><NavLink to="/login">Login</NavLink></li>
            <li><NavLink to="/register">Register</NavLink></li>
        </div>
    </>
    )
}

export default NavBar;