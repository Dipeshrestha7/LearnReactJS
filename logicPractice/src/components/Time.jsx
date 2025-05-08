import React from 'react'
import {useState, useEffect } from 'react'


function Time() {
    const [time,setTime] = useState(Date());

    useEffect(()=>{

        const interval = setInterval(()=>{
            setTime(Date())
        },1000)

    },[])
    
  return (
    <div >
        
        <p>Time:{time}</p>
    </div>
  )
}

export default Time