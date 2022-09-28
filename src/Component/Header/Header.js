import React from 'react';
import logo from './../images/Logo.svg';
import './Header.css'
const Header = () => {
    return (
        <div>
            <nav className='Header'>
                <img src={logo} alt="" />
                <div>
                    <a href="/Shop">Shop</a>
                    <a href="/Order">Orders</a>
                    <a href="/Inventory">Inventory</a>
                    <a href="/About">About</a>
                </div>
            </nav>
        </div>
    );
};

export default Header;