import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { setUsers } from './features/usersSlice'

function App() {
  const [users, setUsers] = useState([])
  const [loading,setLoading] = useState(true);

  const dispatch = useDispatch();
  const user = useSelector((state) =>state.users) ;
  useEffect(() =>{
      fetch('https://jsonplaceholder.typicode.com/users')
      .then((res)=>res.json())
      .then((data) =>{
        dispatch(setUsers(data));
        setLoading(false);
      })
      .catch((error) =>{
        console.log("error", error);
        setLoading(false);
      })
  },[dispatch])


  return (
    <>
      <div>
        <h1>User List</h1>
        {loading? (<p>Loading User</p>):( 
          <ul>
            {users.map((user) =>(
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        )}
      </div>
    </>
  )
}

export default App
