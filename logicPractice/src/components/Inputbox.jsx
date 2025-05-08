import React from 'react'
import { useState } from 'react'

function Inputbox() {
    const [name, setName] =useState('');

   const write =(e)=>{
    setName(e.target.value)
   }
  return (
    <>
    <input type="text" onClick={write}  placeholder='Enter your name' />
    <p>{name}</p>
    </>
  )
}

export default Inputbox