import React from 'react'
import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <>
      <footer className='w-full bg-gray-600 text-white p-4 mt-8'>
        <div className='p-4 container mx-auto shadow-black flex flex-col md:flex-row justify-between items-center'>
          <div className='text-center md:text-left'>
            <h2 className='text-lg font-bold'>Dipesh Shrestha</h2>
            <p className='text-sm'>Web Developer</p>
            <p className='text-xs'>© {new Date().getFullYear()} Dipesh Shrestha. All rights reserved.</p>
          </div>
          
          <div className='flex space-x-4 mt-4 md:mt-0'>
            <NavLink to='/about' className='hover:text-gray-400'>About</NavLink>
            <NavLink to='/contact' className='hover:text-gray-400'>Contact</NavLink>
            <NavLink to='/resume' className='hover:text-gray-400'>Resume</NavLink>
            <NavLink to='/project' className='hover:text-gray-400'>Projects</NavLink>
          </div>

          
          <div className='flex space-x-4 mt-4 md:mt-0'>
            <a href='https://facebook.com' target='_blank' rel='noopener noreferrer' className='hover:text-gray-400'>Facebook</a>
            <a href='https://twitter.com' target='_blank' rel='noopener noreferrer' className='hover:text-gray-400'>Twitter</a>
            <a href='https://linkedin.com' target='_blank' rel='noopener noreferrer' className='hover:text-gray-400'>LinkedIn</a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer