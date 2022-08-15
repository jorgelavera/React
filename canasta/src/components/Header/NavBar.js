import React from 'react';

const NavBar = () => {
    return (
        <>
            <div className="cabecera">
                <img className='App-logo' src="logo0150p.png" alt="LaroGroup" longdesc="Laro Group"></img>
                <nav className='NavBar'>
                    <a className='NavBar-item' href='#'>Products</a>
                    <a className='NavBar-item' href='#'>Contact Us</a>
                    <a className='NavBar-item' href='#'>Policies</a>
                </nav>
                <a className="our-phone" href="https://wa.me/+541169069595" target="_blank">54-11-6906-9595</a>
            </div>
        </>
    );
};

export default NavBar;