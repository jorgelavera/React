import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ItemDetail } from '../ItemDetail/ItemDetail.js';
import { db } from '../../firebaseConfig';
import { getDoc, doc, collection } from 'firebase/firestore';


const ItemDetailContainer = () => {
    const [product, setProduct] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const itemCollection = collection(db, 'productos');
        const ref = doc(itemCollection, id);
        getDoc(ref).then((res) => {
            setProduct({ id: res.id, ...res.data() });
        });
    }, [id]);

    return (
        <div>
            <ItemDetail product={product} />
        </div>
    );
}
export default ItemDetailContainer;