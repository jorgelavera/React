import React, { useState } from 'react';
import './item.css'
import ItemCount from '../Count/ItemCount';
import { Link } from 'react-router-dom';

export const Item = (detail) => {
    const [tot, setTot] = useState(0);
    const onAdd = (count) => {
        console.log('onAdd: ', count)
    };

    console.log('detail: ', detail);
    return (
        <div className='tarjeta-det'>
            <div><img className='img' src={detail.img} alt={`${detail.title}`} /></div>
            <div className='tarjeta-det-der'>
                <h3 className='texto'>{detail.title}</h3>
                <p className='precio'>Precio: ${detail.price}.00</p>
                <p className='stock'>Disponible: {detail.stock}</p>
                {tot === 0 ? (
                    <p className='stock'>¿No va a comprar?</p>
                ) : (
                    <p className='stock'>Agrega al carrito: {tot}</p>
                    )}
                <ItemCount stock={detail.stock} initial={0} onAdd={onAdd} />
                <Link to='/cart'>Ir al carrito</Link>
            </div>
        </div>
    )
}

