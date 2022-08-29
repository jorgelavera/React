import React, { useState } from 'react';

const ItemCount = (props) => {
    const [count, setCount] = useState(props.initial);

    const reducir = () => {
        // Si la cantidad es mayor que la mínima, todavía se puede restar uno
        if (count > props.initial) {
            setCount(count - 1)
        }
    };

    const aumentar = () => {
        // Si la cantidad es menor que el stock disponible, todavía se puede tomar uno más
        if (count < props.stock) {
            setCount(count + 1)
        };
    };

    return (
        <div>
            <button className="btn-change" onClick={reducir}>-</button>
            <p>Count: {count} </p>
            <button className="btn-change" onClick={aumentar}>+</button>
            <button onClick={props.onAdd}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount