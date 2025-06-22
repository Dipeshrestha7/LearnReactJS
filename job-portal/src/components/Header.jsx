import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="max-w-6xl mx-auto px-4 py-9 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">JobPortal</h1>
        <ul className="flex gap-6 text-gray-700 font-medium">
          <li>
            <NavLink to="" className={({ isActive }) => isActive ? "text-blue-600 font-semibold" : "hover:text-blue-500"}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/post" className={({ isActive }) => isActive ? "text-blue-600 font-semibold" : "hover:text-blue-500"}>
              Post
            </NavLink>
          </li>
          <li>
            <NavLink to="/jobdetails" className={({ isActive }) => isActive ? "text-blue-600 font-semibold" : "hover:text-blue-500"}>
              Jobs Details
            </NavLink>
          </li>
          <li>
            <NavLink to="/joblist" className={({ isActive }) => isActive ? "text-blue-600 font-semibold" : "hover:text-blue-500"}>
              Job List
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard" className={({ isActive }) => isActive ? "text-blue-600 font-semibold" : "hover:text-blue-500"}>
              Dashboard
            </NavLink>
          </li>
        </ul>
        <ul  className="flex gap-6 text-gray-700 font-medium">
          <li>
            <NavLink to="/login" className={({ isActive }) => isActive ? "text-blue-600 font-semibold" : "hover:text-blue-500"}>
              Login
            </NavLink>
          </li>
          <li>
            <NavLink to="signup" className={({ isActive }) => isActive ? "text-blue-600 font-semibold" : "hover:text-blue-500"}>
              Signup
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
