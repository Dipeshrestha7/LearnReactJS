import React, { useEffect } from 'react'

function FetchTitle() {

    const [title, setTitle] = React.useState([])

    useEffect(()=>{
        fetch(" https://jsonplaceholder.typicode.com/posts")
        .then(response =>response.json())
        .then(data =>setTitle(data))
    })

  return (
    <>
    <div>All Post Title</div>
    <ul>
        
            {title.map((data)=>(
                    <li key={data.id}>
                        {data.title}
                    </li>
                    
            ))}
                
    </ul>
    </>
  )
}

export default FetchTitle