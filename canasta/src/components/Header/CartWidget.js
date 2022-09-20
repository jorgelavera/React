import React from 'react';
import './cartwidget.css';
import { useContext } from "react";
import { CartContext } from '../../context/CartContext.js'

export function CartWidget() {
    const { totalQuantity } = useContext(CartContext);
    const cantidadTotal = totalQuantity();

return (
        <>
            <div className='canasta'>
                <span className="material-icons">shopping_cart</span>
                <span>{cantidadTotal}</span>
            </div>
        </>
    );
};

