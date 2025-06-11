import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import {useState, useEffect} from 'react'
import { addTodo, setTodos,toggleTodo } from './Slice/todoSlice'

function App() {
  const [inputValue, setInputValue] = useState('');

  const dispatch = useDispatch();

  const todo = useSelector((state)=>state.todos);

  useEffect(()=>{
    fetch(('https://jsonplaceholder.typicode.com/todos?_limit=5'))
    .then((response) => response.json())
    .then((data) =>{
      dispatch(setTodos(data));
    })
  },[dispatch]);

  const handelSubmit=()=>{
    if(inputValue.trim()!==''){
      dispatch(addTodo(inputValue));
      setInputValue('');
    }
  }

  const handelToogle= (id) =>{
    dispatch(toggleTodo(id))
  }

  return (
   <>
    <h1>User Todo List</h1>
    <input
    value={inputValue}
    onChange={(e)=>setInputValue(e.target.value)}
    type="text" 
    />

    <button onClick={handelSubmit}>Add Todo</button>

    <ul>
      {todo.map((item) =>(
        <li
         key={item.id} 
         onClick={()=>handelToogle(item.id)}
         style={{
            listStyle: 'number',
            margin: '10px 0',
            padding: '10px',
            textAlign: 'left',
            textDecoration: item.completed ? 'line-through' : 'none',
            cursor: 'pointer'
          }}
        >
           {item.title}

        </li>
      ))}
    </ul>
   </>
  )
}

export default App
