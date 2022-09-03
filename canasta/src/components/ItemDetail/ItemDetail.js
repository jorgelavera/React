import React from 'react';
import { DetCard } from '../Card/Card.js';
import './itemdetail.css'

export const ItemDetail = ({ producto }) => {
    return (
        <div className='tarjeta-detail'>
            {
                producto.map(item => <DetCard key={item.id} img={item.img} title={item.description} stock={item.stock} price={item.price} />)
            }
        </div>
    )
}
