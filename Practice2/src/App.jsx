import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

useEffect(() => {
    const interval = setInterval(() => {
      setCount(prevCount => prevCount + 1)
    }, 3000)

    return () => clearInterval(interval) // Cleanup function to clear the interval
}, [])

  return (
    <>
      <div className='bg-gray-700 rounded-md p-4 h-96 flex justify-around items-center'> 
        <h1 className='text-white hover:underline'>Nimesh Shrestha</h1>
        <p className='text-white hover:underline'>{count}</p>
        <button className='bg-red-950 w-32 h-12 rounded-md p-3 hover:bg-red-800 hover:underline hover:text-white'>Increase</button>
      </div>
    </>
  )
}

export default App
