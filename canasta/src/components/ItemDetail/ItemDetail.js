import React from 'react';
import { Item } from '../Card/Item.js';
import './itemdetail.css'

export const ItemDetail = ({ producto }) => {
    return (
        <div className='tarjeta-detail'>
            {
                producto.map(item => <Item key={item.id} img={item.img} title={item.description} stock={item.stock} price={item.price} />)
            }
        </div>
    )
}
