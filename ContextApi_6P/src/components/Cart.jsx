import React from 'react'
import { useContext } from 'react';
import { cartContext } from '../context/CartContext';

function Cart() {

    const {cartItems, removeFromCart, total} = useContext(cartContext);

  return (
    <>
    <div style={{marginTop:"20px"}}>
        <h2>Cart {cartItems.length}</h2>
        <ul>
            {cartItems.map((items) =>(
                <li key={items.id}>
                    <h2>{items.name}</h2>
                    <p>{items.price}</p>
                    <button onClick={() =>removeFromCart(items.id)} style={{marginLeft:'10px'}}>Remove Items</button>
                </li>
            ))}
        </ul>
        <h2>Total Price: {total}</h2>

    </div>
    </>
  )
}

export default Cart