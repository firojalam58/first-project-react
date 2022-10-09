import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './../images/Logo.svg';
import './Header.css'
const Header = () => {
    return (
        <div>
            <nav className='Header'>
                <img src={logo} alt="" />
                <div>
                    <NavLink to='shop' className={({ isActive }) =>
              isActive ? 'active' : undefined
            }>Shop</NavLink>
                    <NavLink to='orders'>Orders</NavLink>
                    <NavLink to='inventory'>Inventory</NavLink>
                    <NavLink to='about'>About</NavLink>
                </div>
            </nav>
        </div>
    );
};

export default Header;