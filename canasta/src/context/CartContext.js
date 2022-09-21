import React from "react";
import { createContext, useState } from "react";
import { useEffect } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [unidades, setUnidades] = useState();

    const totalQuantity = () => {
        let totalQ = 0;
        cart.forEach((prod) => {
            totalQ += prod.cantidad;
        });
        console.log('totalQ: ', totalQ)
        setUnidades(totalQ);
        return totalQ;
    };

    useEffect(() => {
        totalQuantity();
    }, [cart]);

    const addToCart = (item, cantidad) => {
        if (isInCart(item.id)) {
            totalQuantitySingleProduct(item, cantidad);
        } else {
            setCart([...cart, { ...item, cantidad }]);
        }
    };

    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id);
    };

    const totalQuantitySingleProduct = (item, cantidad) => {
        const updateProducts = cart.map((prod) => {
            if (prod.id === item.id) {
                const productUpdated = {
                    ...prod, cantidad: cantidad,
                };

                return productUpdated;
            } else {
                return prod;
            }
        });
        setCart(updateProducts);
    };

    const totalPrice = () => {
        let total = 0;
        cart.forEach((prod) => {
            total += prod.cantidad * prod.price;
        });
        return total;
    };

    const deleteOne = (id) => {
        const carritoFiltrado = cart.filter((prod) => prod.id !== id);
        setCart(carritoFiltrado);
        return carritoFiltrado;
    }

    const clearCart = () => {
        setCart([]);
    };

    const getProductQuantity = (id) => {
        const product = cart.find((prod) => prod.id === id);
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
                unidades,
                addToCart,
                clearCart,
                deleteOne,
                totalPrice,
                totalQuantity,
                getProductQuantity,
            }}
        >
            {children}
        </CartContext.Provider>
    )

}

export default CartProvider;