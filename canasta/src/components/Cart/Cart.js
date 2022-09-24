import React, { useState, useContext } from 'react';
import { CartContext } from "../../context/CartContext";
import './cart.css';
import Form from '../../Form/Form.js';
import { Link } from 'react-router-dom';
import CartDetail from './CartDetail';

const Cart = () => {
    const [id, setId] = useState('');
    const { cart, clearCart, deleteOne, totalPrice, totalQuantity } = useContext(CartContext);

    const importeTotal = totalPrice();
    const cantidadTotal = totalQuantity();

    const handleId = (id) => {
        setId(id);
    };

    if (id) {
        return (<>
            <h1>¡Gracias por comprar!</h1>
            <h2>En caso de reclamo, mencionar el código: {id}</h2>
        </>
        )
    }

    if (cart.length === 0) {
        return (
            <h2>
                Aún no hay nada en la canasta, podés ir a la <Link to="/">página principal</Link>{' '}
                para buscar algún producto.
            </h2>
        );
    }

    return (
        <div className="canasta">
            {cart.map((prod) => (
                <CartDetail key={prod.id} prod={prod} deleteOne={deleteOne} />
            ))}
            <button onClick={clearCart}>Vaciar Canasta</button>
            <h4>Total importe: ${importeTotal}</h4>
            <h4>Total cantidad: {cantidadTotal}</h4>

            <Form
                cart={cart}
                total={importeTotal}
                clearCart={clearCart}
                handleId={handleId}
            />
        </div>
    )
}

export default Cart;