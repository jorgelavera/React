import React, { useState } from 'react';
import './navbar.css';
import { CartWidget } from './CartWidget.js';
import { Link, NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebaseConfig';

const NavBar = (props) => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const collectionCat = collection(db, 'categorias');

        getDocs(collectionCat).then((res) => {
            const categorias = res.docs.map((cat) => {
                return {
                    id: cat.id, ...cat.data(),
                };
            });
            setCategories(categorias);
        });
    }, []);

    return (
        <nav className='nav-header'>
            <Link to='/'><img className='app-logo' src="logo0150p.png" alt="LaroGroup" longdesc="Laro Group"></img></Link>
            <ul className='navbar'>
                {categories.map((cat) => (
                    <NavLink key={cat.id} to={`/category/${cat.route}`}>
                        {cat.name}
                    </NavLink>
                ))} </ul>
            <Link to="/cart">
                <CartWidget count={props.count} />
            </Link>
        </nav>
    );
};

export default NavBar;