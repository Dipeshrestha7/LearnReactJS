import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import dipeshImage from './Dipesh.jpg';

function Home() {
  return (
    <>
      <div className=' h-full w-full p-4 bg-slate-100 flex justify-center align-middle' >
        <div className=' p-10 h-full w-full flex justify-center align-middle'>
          <div className='p-6h-full w-64 shadow-lg shadow-gray-600 bg-orange-200  text-center rounded-l-lg'>
            <img className='h-27 w-27 mt-4 ml-12 size-32 rounded-full' src={dipeshImage} alt="" />
            <h1 className='mr-8 font-bold text-2xl'>Dipesh <br /> Shrestha</h1>
            <p className='mr-8 font-bold text-2xl'>________</p>
            <p className='mr-8 text-xl mt-1 italic'>WEB DEVELOPER</p>
          </div>
          <div className='p-6 h-full w-64 rounded-r-lg  bg-white text-center pt-5 '>
            <h1 className='text-6xl font-bold mt-5'>Hello!</h1>
            <p className='mt-5 mb-5'>Click here! to know more about me. What I do. View my projects. Hope you like my all the projects. </p>
            <NavLink to='/about' className='text-white bg-gray-600  pr-4 p-2 pl-4 rounded-md hover:bg-gray-950 hover:text-red-600'>Get More</NavLink>
          </div>    
        </div>
      </div>

    </>

  )
}

export default Home