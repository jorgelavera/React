import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { productos } from '../GetProductos/productos.js';
import { ItemList } from './ItemList.js';

const ItemListContainer = () => {
    const [listaProductos, setListaProductos] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const getProducts = () =>
            new Promise((resolve, reject) => {
                const filtrados = productos.filter((prod) => prod.category === id)
                setTimeout(() => {
                    resolve(id ? filtrados : productos);
                }, 200);
            });
        getProducts()
            .then(listaProductos => setListaProductos(listaProductos))
            .catch(error => console.error(error))
    }, [id]);

    return (
        <ItemList productos={listaProductos} />
    )
}

export default ItemListContainer;