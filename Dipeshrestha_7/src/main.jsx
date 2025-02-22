import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, Router, RouterProvider } from 'react-router-dom'
import Home from './Component/Home/Home.jsx'
import About from './Component/About/About.jsx'
import Contact from './Component/Contact/Contact.jsx'
import Layout from './Component/Layout.jsx'
import Resume from './Component/Resume/Resume.jsx'
import Project from './Component/Project/Project.jsx'
import Github, {githubLoder} from './Component/Github/Github.jsx'

// const router = createBrowserRouter([
//   {
//     path:'/',
//     element:< Layout />,
//     children:[
//       {
//         path:'',
//         element:<Home />
//       },
//       {
//         path:'about',
//         element:<About />
//       },
//       {
//         path:'contact',
//         element:<Contact />
//       },
//       {
//         path: 'resume',
//         element:<Resume />
//       },
//       {
//         path:'project',
//         element:<Project />
//       }
//     ]  
//   }
// ])   

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='project' element={<Project />} />
      <Route path='resume' element={<Resume />} />
      <Route
        loader={githubLoder}
        path='github'
        element={<Github />}
       />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
