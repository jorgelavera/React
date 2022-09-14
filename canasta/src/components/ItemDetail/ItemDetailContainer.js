import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { productos } from '../GetProductos/productos.js';
import { ItemDetail } from '../ItemDetail/ItemDetail.js';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const getProduct = () =>
            new Promise((resolve, reject) => {
                const unic = productos.find((prod) => prod.id === id);
                setTimeout(() => {
                    resolve(unic);
                }, 200);
            });
        getProduct()
            .then(product => setProduct(product))
            .catch(error => console.error(error))
    }, [id]);
    return (
        <div>
            <ItemDetail product={product} />
        </div>
    );
}
export default ItemDetailContainer;