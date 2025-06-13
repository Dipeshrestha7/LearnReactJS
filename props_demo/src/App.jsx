import { useState } from 'react'
import './App.css'

import {useDispatch,useSelector} from 'react-redux'
import {addUser, removeUser} from './Slice/UserSlice'


function App() {
  const [inputValue, setInputValue] = useState('')

  const dispatch = useDispatch();
  const users = useSelector((state)=> state.user);

  const handelSubmit = (e)=>{
    if(inputValue.trim() !==''){
      dispatch(addUser(inputValue));
      setInputValue('');

    }
  }

  const removeHandel = (id) =>{
      dispatch(removeUser(id));
    }

  return (
    <>
      <div>
        <h1>Demo of React Toolkit</h1>
        <input 
        type="text"
        value={inputValue}
        onChange={(e)=> setInputValue(e.target.value)}
        placeholder='Enter your name'
         />
         <button onClick={handelSubmit}>Add User</button>

         <ul>
            {users.map((user)=>(
              <li key={user.id}> {user.name} 
                <button onClick={()=>removeHandel(user.id)}>Remove User</button>
              </li>
            ))}
          </ul>
          
      </div>
    </>
  )
}

export default App
