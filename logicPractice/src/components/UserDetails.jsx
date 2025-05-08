import React from 'react'
import { useState} from 'react'

function UserDetails() {
    const [id, setId] = useState("")
    const [user, setUser] = useState(null)
    
     const handleSubmit = () => {
            fetch("https://jsonplaceholder.typicode.com/users/{id}")
            .then(response=>response.json())
            .then(data=>setUser(data))
    }

    const handleChange = (e) => {
        setId(e.target.value)
    }

  return (
    <>
       User Id: <input onChange={handleChange} value={id} type="number"  name='id' />
       <input onClick={handleSubmit}  type="submit" value="Get User" />

         <br />
         {user &&(
            <div>
                <h2>{user.name}</h2>
                <p>{user.email}</p>
                <p>{user.phone}</p>
            </div>
         )}
    </>
  )
}

export default UserDetails