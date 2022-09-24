import React, { useContext } from 'react';
import './cartwidget.css';
import { CartContext } from '../../context/CartContext.js'

export function CartWidget() {
    const { totalQuantity } = useContext(CartContext);

    const cantidadTotal = totalQuantity();
    let cantidad;
    cantidadTotal === 0 ? cantidad = '' : cantidad = cantidadTotal;

    return (
        <>
            <div className='canasta-widget'>
                <span className="material-icons">shopping_cart</span>
                <span>{cantidad}</span>
            </div>
        </>
    );

};

