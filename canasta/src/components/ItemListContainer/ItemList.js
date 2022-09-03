import React from 'react';
import { Card } from '../Card/Card.js';
import './itemlist.css'

export const ItemList = ({ productos }) => {
    return (
        <div className='tarjetas'>
            {
                productos.map(item => <Card key={item.id} img={item.img} title={item.description} stock={item.stock} price={item.price} />)
            }
        </div>
    )
}

