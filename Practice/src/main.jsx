import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from "./Components/Layout";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, useLoaderData } from 'react-router-dom'
import Github, { githubLoder } from './Components/Github/Github';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>

      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='github' 
      loader={githubLoder}
      element={<Github />} />

      <Route path='login' element={<Login />} />
      <Route path='signup' element={<Signup />} />
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
