import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, Router, RouterProvider } from 'react-router-dom'
import './index.css'
import Layout from './Layout.jsx'
import Home from './component/Home/Home.jsx'
import About from '../../Dipeshrestha_7/src/Component/About/About.jsx'
import User from './component/User/User.jsx'

// const router = createBrowserRouter([
//   {
//     path:'/',
//     element: <Layout />,
//     Children:[
//       {
//         path:'home',
//         element: <Home />
//       },
//       {
//         path: 'about',
//         element:<About />
//       }
//     ]

//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />}  />
      <Route path='about' element={<About />}  />
      <Route path='user/:userid' element={<User />}  />
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
