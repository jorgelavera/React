import React from 'react';
import './navbar.css';
import { CartWidget } from './CartWidget.js';
import { Link, NavLink } from 'react-router-dom';

const NavBar = (props) => {
    return (
        <nav className='nav-header'>
            <Link to='/'><img className='app-logo' src="logo0150p.png" alt="LaroGroup" longdesc="Laro Group"></img></Link>
            <ul className='navbar'>
                <NavLink className='nav-a' to='/category/Audio'>Audio</NavLink>
                <NavLink className='nav-a' to='/category/Mouse'>Mouses</NavLink>
                <NavLink className='nav-a' to='/category/Teclado'>Teclados</NavLink>
            </ul>
            <Link to="/cart">
                <CartWidget count={props.count} />
            </Link>
        </nav>
    );
};

export default NavBar;