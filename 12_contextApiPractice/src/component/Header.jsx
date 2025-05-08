import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <>
      <div className='flex flex-col items-center p-4 bg-black'>
        <nav>
          <ul className='flex gap-4'>
            <li className='text-yellow-600 hover:text-yellow-200'>
              <NavLink to="/" className='hover:text-yellow-200'>Home</NavLink>
            </li>
            <li className='text-yellow-600'>
              <NavLink to="/name" className='hover:text-yellow-200'>Name</NavLink>
            </li>
            <li className='text-yellow-600'>
              <NavLink to="/age" className='hover:text-yellow-200'>Age</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Header
