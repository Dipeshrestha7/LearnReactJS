import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { store } from './redux/store.js'
import { Provider } from 'react-redux'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home.jsx'
import JobDetails from './components/JobDetails.jsx'
import JobList from './components/JobList.jsx'
import Login from './components/login.jsx'
import Post from './components/Post.jsx'
import Dashboard from './components/Dashboard.jsx'
import Signup from './components/Signup.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route path='' element={<Home />}/>
      <Route path='post' element={<Post />}/>
      <Route path='jobdetails' element={<JobDetails />}/>
      <Route path='joblist' element={<JobList />}/>
      <Route path='dashboard' element={<Dashboard />}/>
      <Route path='login' element={<Login />}/>
      <Route path='signup' element={<Signup />}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router = {router}/>
  </Provider >,
)
