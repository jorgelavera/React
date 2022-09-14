import React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import './cart.css';

const Cart = () => {
    const { cart, clearCart, deleteOne, totalPrice } = useContext(CartContext);

    return (
        <div className="canasta">
            {cart.map((prod) => (
                <div key={prod.id}>
                    <h2>{prod.title}</h2>
                    <button onClick={eliminarProd(prod.id)}>Sacar Producto</button>
                </div>
            ))}
            <button button onClick={clearCart}>Vaciar Canasta</button>
        </div>
    )
}

export default Cart;