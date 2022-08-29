import React, { useState } from 'react';
import './itemcount.css';


const ItemCount = ({ stock, initial, onAdd }) => {
    const [count, setCount] = useState(initial);

    const reducir = () => {
        // Si la cantidad es mayor que la mínima, todavía se puede restar uno
        if (count > initial) {
            setCount(count - 1)
        }
    };

    const aumentar = () => {
        // Si la cantidad es menor que el stock disponible, todavía se puede tomar uno más
        if (count < stock) {
            setCount(count + 1)
        };
    };

    return (
        <div>
            <div className="counter-block">
                <button className="btn-change" onClick={reducir}>-</button>
                <p>Count: {count} </p>
                <button className="btn-change" onClick={aumentar}>+</button>
            </div>
            <div>
                <button className="agregar-carrito" onClick={onAdd}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount;
