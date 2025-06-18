import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  const isLoggedIn =localStorage.getItem("userData");

  return (
    <header className='flex justify-between items-center bg-gray-800 text-white p-4'>
      <h2 className="text-xl font-bold">Authentication</h2>
      <nav>
        <ul className='flex gap-4'>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-red-500" : "text-gray-300"
              }
            >
              Home
            </NavLink>
          </li>

          {isLoggedIn ? (
            <>
              <li>
                <NavLink
                  to="/dashboard"
                  className={({ isActive }) =>
                    isActive ? "text-red-500" : "text-gray-300"
                  }
                >
                  Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/logout"
                  className={({ isActive }) =>
                    isActive ? "text-red-500" : "text-gray-300"
                  }
                >
                  Logout
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    isActive ? "text-red-500" : "text-gray-300"
                  }
                >
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/signup"
                  className={({ isActive }) =>
                    isActive ? "text-red-500" : "text-gray-300"
                  }
                >
                  Signup
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
