import React, { useContext } from 'react'
import { Counter } from './context/CountContext'

function Increase() {
const {count, increase} = useContext(Counter)

  return (
    <>
        <div>Value: {count}</div>
        <button onClick={increase}>Increase</button>
    </>
  )
}

export default Increase