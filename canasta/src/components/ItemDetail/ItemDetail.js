import React from 'react';
import { Item } from '../Card/Item.js';
import './itemdetail.css';

export const ItemDetail = ({ product }) => {

    if (product !== undefined) {
        return (
            <div className='tarjeta-detail'>
                {
                    <Item
                        key={product.id}
                        id={product.id}
                        img={product.img}
                        title={product.description}
                        stock={product.stock}
                        price={product.price}
                    />
                }
            </div>
        )
    }
}
