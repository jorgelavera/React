import React from "react";
import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item, cantidad) => {
        if (isInCart(item.id)) {
            AddItem(item, cantidad);
        } else {
            setCart([...cart, { ...item, cantidad }]);
        }
    };

    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id);
    };

    const AddItem = (item, cantidad) => {
        const carritoActualizado = cart.map((prod) => {
            if (prod.id === item.id) {
                const productoActualizado = {
                    ...prod,
                    cantidad: prod.cantidad + cantidad
                }
                return productoActualizado
            } else {
                return prod
            }
        })
    };

    const deleteOne = (id) => {
        const carritoFiltrado = cart.filter((prod) => prod.id !== id);
        setCart(carritoFiltrado);
    }

    const clearCart = () => {
        setCart([]);
    };

    const getProductQuantity = (id) => {
        const product = cart.find((prod) => prod.id === id);
        console.log(product)
        if (product !== undefined) {
            return product.cantidad;
        } else {
            return 0;
        }
    };

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                clearCart,
                deleteOne,
                getProductQuantity,
            }}
        >
            {children}
        </CartContext.Provider>
    )

}

export default CartProvider;