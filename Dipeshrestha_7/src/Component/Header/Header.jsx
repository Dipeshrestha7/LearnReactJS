import React from 'react'
import {Link, NavLink } from 'react-router-dom'

function Header() {
  return (
       <header className='bg-white-600 m-3 border-b-2 border-b-gray-300 hover:bg-gray-100 transition duration-300 ease-out hover:ease-in '>
            <nav className='flex justify-between  p-4'>
                <div className=' text-black '>
                    <p1 className="text-2xl font-medium">Dipesh Shrestha </p1><p1 className="text-xl font-small">/ Web Developer</p1>
                </div>
                 <ul className='p-2 flex justify-center className="text-3xl '>
                    <li>
                        <NavLink className={({isActive}) =>
                        ` ${isActive ? " text-red-800 ": " text-gray-600 "} p-2 hover:border-b-2 border-b-gray-600 ` 
                        } to="">
                        HOME </NavLink>
                    </li>

                    <li>
                        <NavLink className={({isActive}) =>
                        ` ${isActive ? " text-red-800": " text-gray-600 "} p-2 hover:border-b-2 border-b-gray-600`
                        } to="about">
                        ABOUT ME</NavLink>
                    </li>

                    <li>
                        <NavLink className={({isActive}) =>
                        ` ${isActive ? " text-red-800 ": " text-gray-600 "}  p-2 hover:border-b-2 border-b-gray-600`
                        }to="resume">
                        RESUME</NavLink>
                    </li>

                    <li>
                        <NavLink className={({isActive}) =>
                        ` ${isActive ? " text-red-800 ": " text-gray-600 "}  p-2 hover:border-b-2 border-b-gray-600`
                        }to="project">
                        PROJECT</NavLink>
                    </li>

                    <li>
                        <NavLink className={({isActive}) =>
                        ` ${isActive ? " text-red-800 ": " text-gray-600 "}  p-2  hover:border-b-2 border-b-gray-600`
                        }to="contact">
                        CONTACT</NavLink>
                    </li>
                    <li>
                        <NavLink className={({isActive}) =>
                        ` ${isActive ? " text-red-800 ": " text-gray-600 "}  p-2  hover:border-b-2 border-b-gray-600`
                        }to="github">
                        GITHUB</NavLink>
                    </li>
                </ul>
            </nav>
       </header>
  )
}

export default Header