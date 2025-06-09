import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {useDispatch, useSelector} from 'react-redux'
import { addTodo, removeTodo,removeAll } from './Slices/todoSlice'

function App() {

  const [input, setInput] = useState('');

  const dispatch = useDispatch();
  const todos = useSelector((state)=>state.todo)

  const handleAdd= () =>{
    if(input.trim !== ''){
      dispatch(addTodo(input))
      setInput('')
    }
  }
  return (
   <>
   <p>Dipesh Shrestha</p>
   <div>
      <input
       type="text" 
       value={input}
       onChange={(e) => setInput(e.target.value)}
       placeholder='Add a todo'
       />

       <button onClick={handleAdd}>Add</button>

      <ul>
        {todos.map((t) =>(
          <li key={t.id}> {t.text} {''}
          <button onClick={() => dispatch(removeTodo(t.id))}>Remove</button>
          </li>
        ))}
      </ul>
        <button onClick={() =>dispatch(removeAll())}>Remove All</button>
   </div>
   </>
  )
}

export default App
