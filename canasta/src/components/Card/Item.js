import React, { useState } from 'react';
import './item.css'
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';
import ItemCount from '../Count/ItemCount.js';


export const Item = (detail) => {
    const [tot, setTot] = useState(0);
    const { addToCart, getProductQuantity } = useContext(CartContext);

    const onAdd = (count) => {
        setTot(count);
        addToCart(detail, count);
    };

    const quantity = getProductQuantity(detail.id);

    console.log('detail: ', detail);
    return (
        <div className='tarjeta-det'>
            <div><img className='img' src={detail.img} alt={`${detail.title}`} /></div>
            <div className='tarjeta-det-der'>
                <h3 className='texto'>{detail.title}</h3>
                <p className='precio'>Precio: ${detail.price}.00</p>
                <p className='stock'>Disponible: {detail.stock}</p>
                <p className='stock'>Agrega al carrito: {tot}</p>
                
                {tot === 0 ? (
                    <ItemCount stock={detail.stock} initial={quantity} onAdd={onAdd} />
                ) : (
                    <Link to='/cart'>Terminar mi compra</Link>
                )}
            </div>
        </div>
    )
}

