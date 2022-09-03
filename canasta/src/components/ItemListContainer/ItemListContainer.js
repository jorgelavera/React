import React, { useEffect, useState } from 'react';
import { productos } from '../GetProductos/productos.js';
import { ItemList } from './ItemList.js';

const ItemListContainer = () => {
    const [listaProductos, setListaProductos] = useState([]);

    const getProducts = () => new Promise((resolve, reject) => {
        setTimeout(() => resolve(productos), 2000);
    });

    useEffect(() => {
        getProducts()
            .then(listaProductos => setListaProductos(listaProductos))
            .catch(error => console.error(error))
    }, []);

    return (
        <ItemList productos={listaProductos} />
    )
}

export default ItemListContainer;