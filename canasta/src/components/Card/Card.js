import React from 'react';
import ItemCount from '../Count/ItemCount.js'
import './card.css'

const onAdd = () => {
    // Esto se supone que manda la cantidad al carrito
    // pero todavía no vimos cómo pasar hacia el count de acá, desde el count de ItemCount
    // De todas formas la consigna pide solamente "llamar a la función"
    console.log('onAdd, todavía no!')
};

export const Card = ({ title, img, price, stock }) => {
    return (
        <div className='tarjeta-list'>
            <div><img className='img' src={img} alt={`${title}`} /></div>
            <h3>{title}</h3>
            <p className='precio'>Precio: ${price}.00</p>
            <button className="ver-detalle" >Ver Detalle</button>
        </div>
    )
}

export const DetCard = ({ title, img, price, stock }) => {
    return (
        <div className='tarjeta-det'>
            <div><img className='img' src={img} alt={`${title}`} /></div>
            <div className='tarjeta-det-der'>
                <h3>{title}</h3>
                <p className='precio'>Precio: ${price}.00</p>
                <p className='stock'>Disponible: {stock}</p>
                <ItemCount stock={stock} initial={0} onAdd={onAdd} />
            </div>
        </div>
    )
}
