import React from 'react';
import { Link } from 'react-router-dom';
import './card.css'

export const Card = (item) => {
    console.log(item)
    return (
        <div className='tarjeta-list'>
            <div className='top-card'><img className='img' src={item.img} alt={`${item.title}`} /></div>
            <div className='bottom-card'>
                <h3 className='texto'>{item.title}</h3>
                <p className='precio'>Precio: ${item.price}.00</p>
                <Link to={`/detail/${item.id}`}>
                    <button className="ver-detalle" >Ver Detalle</button>
                </Link>
            </div>
        </div>
    )
}