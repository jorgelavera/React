import React, { useEffect, useState } from 'react';
import './itemcount.css';

const ItemCount = ({ stock, initial, onAdd }) => {
    const [count, setCount] = useState(initial);

    useEffect(() => {
        setCount(initial);
    }, [initial]);

    const reducir = () => {
        // Si la cantidad es mayor que cero, todavía se puede restar uno
        if (count > 0) {
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
                <p>Cantidad: {count} </p>
                <button className="btn-change" onClick={aumentar}>+</button>
            </div>
            <div>
                <button className="agregar-carrito" onClick={() => onAdd(count)}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount;
