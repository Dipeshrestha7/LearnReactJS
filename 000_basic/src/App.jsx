import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [Count, setCount] = useState(15);

  let addValue =()=>{
                  if(Count>19){
                    Count = 20
                    setCount(Count)
                  }
                  else{
                    Count = Count+1
                    setCount(Count)
                  }
                }

  let removeValue =()=>{
                  if(Count<1){
                    Count =0
                    setCount(Count)
                  }
                  else{
                    Count = Count-1
                    setCount(Count)
                  }
                }
              

  return (
    <>
      <h1>Vite + React</h1>
      <h1>Counter:{Count}</h1>
      <button onClick ={addValue}> Increase </button>
      <button onClick={removeValue}> Decrease</button>
    </>
  )
}

export default App
