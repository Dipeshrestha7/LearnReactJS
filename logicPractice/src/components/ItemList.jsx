import React from 'react'
import { useState, useEffect } from 'react'

function ItemList() {
    
    const fruit= ["apple","banana","orange"]


  return (
    <div>
        <h1>Fruits Item</h1>
        <ul>
           {
            fruit.map((items)=>{
                return <li>{items}</li>
            })
           }
        </ul>
    </div>
    
  )
}

export default ItemList