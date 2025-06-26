import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() =>{
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((res) =>{
      setUsers(res.data);
      setLoading(false);
    })
    .catch((err) =>{
      console.log('Error fetching data:', err)
      setLoading(false);
    })
  },[])

  return (
    <>
      <div style={{padding:'2rem', background:"lightblue", color:"black"}}>
        <h1>User List</h1>
        {loading? <p>Loading ...</p> :(
          <ul >
            {users.map((user) =>(
              <li key={user.id}>
                <strong>{user.name}</strong> - {user.email}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  )
}

export default App
