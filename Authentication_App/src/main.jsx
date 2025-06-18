import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Signup from './component/Signup.jsx'
import Login from './component/Login.jsx'
import Dashboard from './component/Dashboard.jsx'
import Home from './component/Home.jsx'
import Logout from './component/Logout.jsx'


const route = createBrowserRouter(
  createRoutesFromElements
  (
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/login' element={<Login />} />
      <Route path='dashboard' element={<Dashboard />} />
      <Route path='logout' element={<Logout />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={route} />
  </StrictMode>,
)
