import React, { useState } from 'react';
import { addDoc, collection, doc, serverTimestamp, updateDoc, } from 'firebase/firestore';
import { db } from '../firebaseConfig.js';

const Form = ({ cart, total, clearCart, handleId }) => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const order = {
            buyer: { nombre: nombre, apellido: apellido },
            items: cart,
            total: total,
            date: serverTimestamp(),
        };

        const ordersCollection = collection(db, 'orders');

        addDoc(ordersCollection, order).then((resolve) => {
            handleId(resolve.id);
            updateprod();
            clearCart();
        });
    };

    const updateprod = () => {
        const orderDoc = doc(db, 'orders', cart.id);
        updateDoc(orderDoc, { total: total });
    };

    const handleChangeNombre = (event) => {
        setNombre(event.target.value);
    };

    const handleChangeApellido = (event) => {
        setApellido(event.target.value);
    };

    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Nombre..."
                    name="nombre"
                    value={nombre}
                    onChange={handleChangeNombre}
                />
                <input
                    type="text"
                    placeholder="Apellido..."
                    name="apellido"
                    value={apellido}
                    onChange={handleChangeApellido}
                />
                <button>Comprar</button>
            </form>
        </div>
    );
};

export default Form;