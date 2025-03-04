import React from 'react';
import {NavLink} from 'react-router-dom'

function Header() {
  return (
    <header className='bg-gray-600 flex justify-between p-4'>
        <nav className=' flex justify-around'>
            <ul className='flex justify-around p-4 text-center'>
                <li className='p-4'>
                    <NavLink className={({isActive})=>`${isActive ?" text-orange-500" :"text-gray-700"} hover:underline decoration-solid  decoration-orange-400 hover:animate-ping`} 
                                        to="">
                        Home
                    </NavLink>
                </li>

                <li className='p-4'>
                    <NavLink className={({isActive})=>`${isActive?"text-orange-500":"text-gray-700"} hover:underline decoration-solid  decoration-orange-400 hover:animate-ping`}
                                        to="about">
                        About
                    </NavLink>
                </li>

                <li className='p-4'>
                    <NavLink className={({isActive})=>`${isActive?"text-orange-500":"text-gray-700"} hover:underline decoration-solid  decoration-orange-400 hover:animate-ping`} to="github">
                        Github
                    </NavLink>
                </li>
            </ul>

            <ul className='flex p-4 '>
                <li className='p-4'>
                    <NavLink className="text-gray-700" to="login">
                        Login
                    </NavLink>
                </li>
                <li  className='p-4'>
                    <NavLink className="text-gray-700" to="signup">
                        Sign Up
                    </NavLink>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header