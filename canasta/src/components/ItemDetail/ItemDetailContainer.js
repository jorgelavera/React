import React, { useEffect, useState } from 'react';
import { producto } from '../GetProductos/producto.js';
import { ItemDetail } from './ItemDetail.js';

const ItemDetailContainer = () => {
    const [UnProducto, setUnProducto] = useState([]);

    const getProduct = () => new Promise((resolve, reject) => {
        setTimeout(() => resolve(producto), 2000);
    });

    useEffect(() => {
        getProduct()
            .then(UnProducto => setUnProducto(UnProducto))
            .catch(error => console.error(error))
    }, []);

    return (
        <ItemDetail producto={UnProducto}/>
    )
}

export default ItemDetailContainer;