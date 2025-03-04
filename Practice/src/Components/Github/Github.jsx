import React from 'react'
import {Link,useLoaderData} from 'react-router-dom'

export default function Github() {

  const data = useLoaderData();

  return (
    <>
      <div className='bg-blue-200' p-4>
        <div className='text-center p-4 font-style: italic'>Username: {data.name}</div>
        <div className='text-center p-4 font-style: italic'>Followers:  {data.followers}</div>
        <div  className='text-center p-4 font-style: italic'>UserImage:<img className='image-center rounded-full filter:drop-shadow(0 1px 1px rgb(0 0 0 / 0.05))' src={data.avatar_url} />
          <ul>
            <li>
              <Link to="https://api.github.com/users/Dipeshrestha7">{data.repos_url}</Link>
            </li>
          </ul>
        </div>
        <div className='text-center p-4'> Public repo: {data.public_repos}</div>
      </div>
    </>
  )
}


export const githubLoder = async ()=> {
  const response = await fetch("https://api.github.com/users/Dipeshrestha7")

  return response.json();
} 
