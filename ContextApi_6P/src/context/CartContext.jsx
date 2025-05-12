import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'

export const cartContext = createContext();

function CartContext({children}) {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (items) =>{
        setCartItems((prevItems) => [...prevItems, items]);
    }

    const removeFromCart = (id) =>{
        setCartItems((prevItems) => prevItems.filter((items) => items.id !==id));
    }

    const total = cartItems.reduce((acc,items) => acc+items.price,0);

  return (
    <cartContext.Provider value={{cartItems, addToCart, removeFromCart, total}}>
        {children}
    </cartContext.Provider>
  )
}

export default CartContext