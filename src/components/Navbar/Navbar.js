import React from 'react';
import './Navbar.css'
const Navbar = () => {
    return (
        <nav className='navbar-style'>
            <div className='logo-style'>
                <h3>logo</h3>
            </div>
            <div className='nav-anchors-container'>
                <a href="/home">Home</a>
                <a href="/products">Products</a>
                <a href="/cart">cart</a>
                <a href="aboutus">About us</a>
            </div>
        </nav>
    );
};

export default Navbar;