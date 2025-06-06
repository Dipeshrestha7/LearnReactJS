import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {useSelector, useDispatch} from 'react-redux'
import {increment,decrement,reset, incrementByAmount} from './Slice/CounterSlice'

function App() {

  const count = useSelector((state) =>state.counter.value);
  const dispatch = useDispatch();
  return (
    <>
      <h1>Counter: {count}</h1>
      <div className="card">
        <button onClick={()=> dispatch(increment())}>Increase</button>
        <button onClick={()=>dispatch(decrement())}>Decrease</button>
        <button onClick={()=> dispatch(reset())}>Reset</button>
        <button onClick={()=> dispatch(incrementByAmount(5))}>Youo</button>

      </div>
    </>
  )
}

export default App
