import React from 'react';
import './cartdetail.css';

const CartDetail = ({ prod, deleteOne }) => {
    return (
        <div className="linea-canasta">
            <h3>{prod.title}</h3>
            <h3>Cantidad: {prod.cantidad}</h3>
            <h3>Precio: ${prod.price}.-</h3>
            <button className='boton-borrar' onClick={() => deleteOne(prod.id)}>Borrar</button>
        </div>
    );
};

export default CartDetail;