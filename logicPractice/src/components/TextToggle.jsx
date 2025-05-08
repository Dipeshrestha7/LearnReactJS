import React from 'react'
import { useState } from 'react'

function TextToggle() {

    const [textt, setTextt] = useState("Dipesh Shrestha");


    
  return (
    <>
        <h1>{textt}</h1>
        <button onClick={()=>{setTextt("Dipesh Shrestha")}}>Show</button>
        <button onClick={()=>{setTextt("")}}>Hide</button>
    </>
  )
}

export default TextToggle