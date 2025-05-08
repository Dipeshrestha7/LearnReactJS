import React, { useEffect } from 'react'
import { useState} from 'react'

function UserImage() {
     const [pic, setPic] = useState([])

     useEffect(()=>{
        fetch(" https://jsonplaceholder.typicode.com/photos")
        .then(response =>response.json())
        .then(data => setPic(data))
     })
  return (
    <>
    <h1>Pictures</h1>
    <div className='userImage'>
        {pic.map((item)=>(
            <img src={item.thumbnailUrl} alt={item.title} />     
        )).filter((item,index)=>(index<10))
        }
        
    </div>
    </>
  )
}

export default UserImage