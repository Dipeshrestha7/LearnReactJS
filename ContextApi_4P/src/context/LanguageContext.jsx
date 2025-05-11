import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'

export const languageContext = createContext()

function LanguageContext({children}) {

  const [language, setLanguage] = useState('English');

  const toggleLanguage = () =>{
    setLanguage((prev) => (prev ==='English' ? 'Nepali' : 'English'));
  }

  return (
    <>
      <languageContext.Provider value={{language, toggleLanguage}}>
        {children}
      </languageContext.Provider>
    </>
  )
}

export default LanguageContext