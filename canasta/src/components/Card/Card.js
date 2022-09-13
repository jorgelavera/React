import React from 'react';
import { NavLink } from 'react-router-dom';
import './card.css'

export const Card = (item) => {
    return (
        <div className='tarjeta-list'>
            <div className='top-card'><img className='img' src={item.img} alt={`${item.title}`} /></div>
            <div className='bottom-card'>
                <h3 className='texto'>{item.title}</h3>
                <p className='precio'>Precio: ${item.price}.00</p>
                <NavLink to={`/producto/${item.id}`}>
                    <button className="ver-detalle" >Ver Detalle</button>
                </NavLink>
            </div>
        </div>
    )
}