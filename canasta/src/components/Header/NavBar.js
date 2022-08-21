import React from 'react';
import './navbar.css';
import { CartWidget } from './CartWidget.js';

const NavBar = () => {
    return (
        <nav className='nav-header'>
            <img className='app-logo' src="logo0150p.png" alt="LaroGroup" longdesc="Laro Group"></img>
            <ul className='navbar'>
                <a className='nav-a' href='#'>Products</a>
                <a className='nav-a' href='#'>Contact Us</a>
                <a className='nav-a' href='#'>Policies</a>
            </ul>
            <CartWidget />
        </nav>
    );
};

export default NavBar;