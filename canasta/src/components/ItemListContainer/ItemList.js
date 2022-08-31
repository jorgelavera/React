import React from 'react';
import ItemDetail from '../ItemDetail/ItemDetail.js';
import './itemlist.css'

export const ItemList = ({ productos }) => {
    // El componente va a recibir una prop `items` y va a mapear estos `items` al componente `<Item … />`
    return (
        <div className='tarjetas'>
            {
                productos.map(item => <ItemDetail key={item.id} img={item.img} title={item.description} stock={item.stock} price={item.price} />)
            }
        </div>
    )
}

