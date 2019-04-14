import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = ()=> {
    return (
        <nav class="navbar navbar-default">
            <ul class="nav navbar-nav">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/tweets">Tweets</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/category">Tweet Category</NavLink></li>
                <li><NavLink to="/register">Register User</NavLink></li>
            </ul>
        </nav>
    )
}
export default Navbar