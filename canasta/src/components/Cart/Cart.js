import React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import './cart.css';

const Cart = () => {
    const { cart, clearCart, deleteOne, totalPrice, totalQuantity } = useContext(CartContext);
    const total = totalPrice();
    const cantidadTotal = totalQuantity();

    return (
        <div className="canasta">
            {cart.map((prod) => (
                <div key={prod.id}>
                    <h2>{prod.title}</h2>
                    <h3>Cantidad: {prod.cantidad}</h3>
                    <h3>Precio: ${prod.price}.-</h3>
                    <button onClick={() => deleteOne(prod.id)}>Sacar Producto</button>
                </div>
            ))}
            <button button onClick={clearCart}>Vaciar Canasta</button>
            <h4>Total importe: ${total}</h4>
            <h4>Total cantidad: {cantidadTotal}</h4>
        </div>
    )
}

export default Cart;