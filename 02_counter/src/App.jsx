import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15)

  let addValue =()=>{
    if(counter>19){
      counter =20
      setCounter(counter)
    }
    else{
      counter = counter+1
      setCounter(counter)
    }
  }

  let removeValue = ()=>{
    if(counter<1){
      counter =0
      setCounter(counter)
    }
    else{
      counter = counter-1
      setCounter(counter)
    }
  }

  return (
    <>
      <h1>Counter:{counter}</h1>
      <button onClick={addValue}>Add Value</button>
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
