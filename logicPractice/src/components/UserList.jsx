import React, { useEffect, useState } from 'react'

function UserList() {
    const [user,setUser] = useState([]);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response=> response.json())
        .then(data => setUser(data))
    },[])
  return (
    <ol>
        {user.map((data)=>(
            <li  key={user.id}>
               {data.name}
            </li>
        ))}
    </ol>
  )
}

export default UserList