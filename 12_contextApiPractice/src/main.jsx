import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UserContext from './context/UserContext.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './component/Home.jsx'
import Name from './component/Name.jsx'
import Age from './component/Age.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>}>
      <Route path="" element={<Home />} />
      <Route path="name" element={<Name />} />
      <Route path="age" element={<Age />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserContext>
      <RouterProvider router={router} />
    </UserContext>
  </StrictMode>,
)
