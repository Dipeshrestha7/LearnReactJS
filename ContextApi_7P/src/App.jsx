import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RoleSwitcher from './components/RoleSwitcher'
import Dashboard from './components/Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RoleSwitcher />
      <Dashboard />
    </>
  )
}

export default App
