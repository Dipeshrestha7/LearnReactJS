import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [sizeWindow, setSizeWindow] = useState(window.screen.width)

   const Increase = ()=>{
      setCount(count +1)
   }

   const Decrease = ()=>{
    setCount(count -1)
 }

 useEffect(() => {
    document.title =count;
 },[count])

 useEffect(()=>{
    window.addEventListener("resize", function (e){
      setSizeWindow(window.innerWidth)
      console.log({sizeWindow})
    })
 },[sizeWindow])

  return (
    <>
      <h1>Count</h1>
      <button onClick={Increase}>+</button>
      <p>{count}</p>
      <button onClick={Decrease}>-</button>

      <p>Size of Window is {sizeWindow}</p>
    </>
  )
}

export default App
