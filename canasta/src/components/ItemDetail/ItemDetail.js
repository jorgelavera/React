import React from 'react';
import { Item } from '../Card/Item.js';
import ItemCount from '../Count/ItemCount.js';
import './itemdetail.css';

export const ItemDetail = ({ product }) => {

    console.log('item: ', product);
    if (product !== undefined) {
        return (
            <div className='tarjeta-detail'>
                {
                    <Item
                        key={product.id}
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
