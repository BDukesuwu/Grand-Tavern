import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import { HashLink } from 'react-router-hash-link';
import './NavBar.css';

export default function NavBar({user, setUser}) {

    function handleLogOut(){
        userService.logOut();
        setUser(null);
        
    }
// setting up the nav bar links and their routes
    return (
        <nav className="list">
            <span>Welcome, {user.name}</span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/menu" className="items">Menu</Link>
            <Link to="/about" className="items">Our Story</Link>
            <Link to="/orders/new" className="items">Order Page</Link>
            <HashLink smooth to="/#booking" className="items">Book a Table</HashLink>
            <button onClick={handleLogOut}>Logout</button>
        </nav>
    )
}
