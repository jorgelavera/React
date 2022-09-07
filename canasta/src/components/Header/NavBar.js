import React from 'react';
import './navbar.css';
import { CartWidget } from './CartWidget.js';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
    return (
        <nav className='nav-header'>
            <Link to='/'><img className='app-logo' src="./logo0150p.png" alt="LaroGroup" longdesc="Laro Group"></img></Link>
            <ul className='navbar'>
                <Link className='nav-a' to='/category/Audio'>Audio</Link>
                <Link className='nav-a' to='/category/Mouse'>Mouses</Link>
                <Link className='nav-a' to='/category/Teclado'>Teclados</Link>
            </ul>
            <CartWidget count={props.count} />
        </nav>
    );
};

export default NavBar;