
import './App.css'
import Login from './component/Login'
import Profile from './component/Profile'
import UserContextProvider from './context/USerContextProvider'

function App() {

  return (
    <UserContextProvider>
      <h1>React with Dipesh</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
