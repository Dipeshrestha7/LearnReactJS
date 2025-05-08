import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hello from './components/Hello'
import Inputbox from './components/Inputbox'
import Time from './components/Time'
import ItemList from './components/ItemList'
import ToggleButton from './components/ToggleButton'
import TextToggle from './components/TextToggle'
import UserList from './components/UserList'
import LoginForm from './components/LoginForm'
import FetchTitle from './components/FetchTitle'
import UserDetails from './components/UserDetails'
import UserImage from './components/UserImage'
import Weather from './components/Weather'


function App() {
  const [count, setCount] = useState(0)

  const Add= ()=>{
    setCount(count+1)
  }
  return (
    <>
      <div>
        <h1>counter</h1>
        <p>{count}</p>
        <button onClick={Add}>Increase</button>
      </div>
      <br />
      <br />
      <Inputbox />
      <br />
      <br />
      <Time />
      <br />
      <br />
      <ItemList />
      <br />
      <br />
      <ToggleButton />
      <br />
      <br />
      
      <TextToggle />

      <br />
      <br />

      <UserList />
      <br />
      <br />
      <LoginForm />
      <br />
      <br />
      <FetchTitle />

      <br />
      <br />
      <UserDetails />

      <br />
      <br />
      <UserImage />
      <br />
      <br />
      {/* <Weather /> */}
    </>
  )
}

export default App
