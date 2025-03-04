import React from 'react'

function Home() {
  return (
    <>
    <h1>Dipesh Shrestha</h1>
    <img src="mypic.jpg" alt="" />

    <div className='m-4 flex'>
    <div className='m-4 w-16 h-16 bg-yellow-700 text-center hover:animate-ping'>HOme</div>
    <div className='m-4 w-16 h-16 bg-yellow-600 text-center hover:animate-ping'>HOme</div>
    <div className='m-4 w-16 h-16 bg-yellow-500 text-center hover:animate-ping'>HOme</div>
    <div className='m-4 w-16 h-16 bg-yellow-400 text-center hover:animate-ping'>HOme</div>
    <div className='m-4 w-16 h-16 bg-yellow-300 text-center hover:animate-ping'>HOme</div>
    </div>
    </>
  )
}

export default Home