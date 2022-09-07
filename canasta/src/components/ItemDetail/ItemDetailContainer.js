import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { producto } from '../GetProductos/producto.js';
import { ItemDetail } from './ItemDetail.js';

const ItemDetailContainer = () => {
    const [UnProducto, setUnProducto] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const getProduct = () =>
            new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(producto)
                }, 2000);
            });
        getProduct()
            .then(UnProducto => setUnProducto(UnProducto))
            .catch(error => console.error(error))
    }, [id]);

    return (
        <ItemDetail producto={UnProducto} />
    )
}

export default ItemDetailContainer;