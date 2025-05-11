
import './App.css'
import { useContext } from 'react'
import {themeContext} from './context/ThemeContext'
import { authContext } from './context/AuthContent'
import { useState } from 'react'

function App() {
  const {theme, toggleTheme} = useContext(themeContext)

  const style ={
    backgroundColor : theme ==='light'? 'white':'black',
    color: theme ==='light'? 'black':'white',
    padding: '100px',
    borderRadius: '5px',
    margin: '10px',
    width: '500px',
    height:' 500px',
    textAlign: 'center'
  }

  const button={
    backgroundColor : theme ==='light'? 'black':'gray',
    color: theme ==='light'? 'white':'black',
    borderRadius: '5px',
    margin: '10px',
    width: '150px',
    height:' 50px'
  }

  const { isLoggedIn, login, logout,write} =useContext(authContext);

  

  return (
    <>
    <div style={style}>
      <p>{theme}</p>
      <button style={button} onClick = {toggleTheme}>
        {theme} Mode
      </button>

      <>
      {!isLoggedIn ?(
        <button style={button} onClick={login}>
          Login
        </button>
        ) : (
          <button style={button} onClick={logout}>
            Logout
          </button>
        )
      }

      <p >{write}</p>
        
      </>
    </div>
    </>
  )
}

export default App
