import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'

export const themeContext = createContext()
function ThemeContext({children}) {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () =>{
        setTheme((prev) => (prev ==='light' ? 'dark' : 'light'))
    }

  return (
    <themeContext.Provider value={{theme, toggleTheme}}>
        {children}
    </themeContext.Provider>
  )
}

export default ThemeContext