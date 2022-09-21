import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ItemList } from './ItemList.js';
import { db } from '../../firebaseConfig.js';
import { collection, getDocs, query, where } from 'firebase/firestore';

const ItemListContainer = () => {
    const [listaProductos, setListaProductos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { id } = useParams(); //categoría

    useEffect(() => {
        setIsLoading(true);
        const itemCollection = collection(db, 'productos');

        const referencia = id ? query(itemCollection, where('category', '==', id)) : itemCollection;

        getDocs(referencia)
            .then((res) => {
                const products = res.docs.map((prod) => {
                    return {
                        id: prod.id, ...prod.data(),
                    };
                });
                setListaProductos(products);
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [id]);

    return (
        <div>
            {isLoading ? (
                <>
                    <h3 >Espere, por favor...</h3>
                </>
            ) : (
                <>
                    <ItemList productos={listaProductos} />
                </>
            )} </div>
    );
};

export default ItemListContainer;