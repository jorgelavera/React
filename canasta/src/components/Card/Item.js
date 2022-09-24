import React, { useState } from 'react';
import './item.css'
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';
import ItemCount from '../Count/ItemCount.js';


export const Item = (product) => {
    const [tot, setTot] = useState(0);
    const { addToCart, getProductQuantity } = useContext(CartContext);

    const onAdd = (count) => {
        setTot(count);
        addToCart(product, count);
    };

    const quantity = getProductQuantity(product.id);

    return (
        <div className='tarjeta-det'>
            <div><img className='img' src={product.img} alt={`${product.title}`} /></div>
            <div className='tarjeta-det-der'>
                <h3 className='texto'>{product.title}</h3>
                <p className='precio'>Precio: ${product.price}.00</p>
                <p className='stock'>Disponible: {product.stock}</p>
                <p className='stock'>Agrega al carrito: {tot}</p>
                
                {tot === 0 ? (
                    <ItemCount stock={product.stock} initial={quantity} onAdd={onAdd} />
                ) : (
                    <Link to='/cart'>Abrir el carrito</Link>
                )}
            </div>
        </div>
    )
}

