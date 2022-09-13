import React from 'react';
import './item.css'
import ItemCount from '../Count/ItemCount';

const onAdd = () => {
    // Esto se supone que manda la cantidad al carrito
    // pero todavía no vimos cómo pasar hacia el count de acá, desde el count de ItemCount
    // De todas formas la consigna pide solamente "llamar a la función"
    console.log('onAdd, todavía no!')
};


export const Item = (detail) => {
    console.log('detail: ', detail);
    return (
        <div className='tarjeta-det'>
            <div><img className='img' src={detail.img} alt={`${detail.title}`} /></div>
            <div className='tarjeta-det-der'>
                <h3 className='texto'>{detail.title}</h3>
                <p className='precio'>Precio: ${detail.price}.00</p>
                <p className='stock'>Disponible: {detail.stock}</p>
                <ItemCount stock={detail.stock} initial={0} onAdd={onAdd} />
            </div>
        </div>
    )
}

