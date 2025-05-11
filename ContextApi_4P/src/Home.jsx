import React from 'react'
import { useContext } from 'react'
import { themeContext } from './context/ThemeContext';
import { languageContext } from './context/LanguageContext';

function Home() {

    const {theme, toggleTheme} = useContext(themeContext);
    const {language, toggleLanguage} = useContext(languageContext);

    const style = {
        backgroundColor: theme ==='light' ? 'white' : 'black',
        color: theme ==='light' ? 'black':'white',
        height: '100vh',
        fontSize: '2rem',
        fontWeight: 'bold'   
    }

    const styleButton = {
            backgroundColor: theme ==='light' ? 'black' : 'gray',
            color: theme ==='light' ? 'white':'white',
            fontSize: '1rem',
            fontWeight: 'bold',
            padding: '10px 20px',
            borderRadius: '5px',
            border: 'none',
            cursor: 'pointer'
        }

    

  return (
    <>
        <div style={style}>
            <p>Hello</p>
            <button style={styleButton} onClick={toggleTheme} >{theme} Mode</button>
            <br />
            <p>Language: {language}</p>
            <button style={styleButton} onClick={toggleLanguage}>{language}</button>
        </div>
    </>
  )
}

export default Home