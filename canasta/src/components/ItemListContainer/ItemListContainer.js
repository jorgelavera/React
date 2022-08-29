import React, { useEffect, useState } from 'react';
import { productos } from '../GetProductos/productos';
import { ItemList } from './ItemList';

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
        <ItemList productos={listaProductos}/>
    )
}

export default ItemListContainer;