import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

 function Github() {
//     const [data, setData] =useState([])
//     useEffect(() =>{
//         fetch('https://api.github.com/users/Dipeshrestha7')
//         .then(response=>response.json())
//         .then(data=>{
//             console.log(data);
//             setData(data)

//         })
//     },[])
  
  const data= useLoaderData()
    
  return (
    <>
        <div className='text-center m-4 bg-gray-600 text-white p-4'>Github followers:{data.followers}</div>
        <div className='text-center m-4 bg-gray-600 text-white p-4'>Github Name: {data.name}</div>
        <div className=' flex align-center justify-center text-center m-4 bg-gray-600 text-white p-4'><img src={data.avatar_url} alt="" />{data.repos_url}</div>
    
    
    </>
  )
 }

export default Github

export const githubLoder = async () =>{
  {
    const response = await fetch('https://api.github.com/users/Dipeshrestha7')
    return response.json()
}
}
