import React from 'react'
import { useContext } from 'react'
import { cartContext } from '../context/CartContext'

const products = [
      {
        id:1,
        name: "Shirt",
        price: 25
      },
      {
        id:2,
        name: "Jenas",
        price: 40
      },
      {
        id:3,
        name: "T-Shirt",
        price:20
      }
    ]

function Product() {

    const {addToCart} = useContext(cartContext);

  return (
    <>
      <div>
        <h1>All Products</h1>
        {products.map((item) =>(
          <div key={item.id} style={{marginBottom:"10px"}}>
              <h2>{item.name}</h2>
              <p>${item.price}</p>
              <button onClick={() => addToCart(item)} style={{marginLeft:'10px'}}>Add To Cart</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Product