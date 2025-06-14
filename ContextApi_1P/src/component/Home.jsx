import React, { useContext } from 'react'
import { Context } from '../context/ThemeContext';

function Home() {
    const {theme, toggleTheme} = useContext(Context);

    const style = {
        backgroundColor: theme === 'light' ? '#fff' : '#333',
        color: theme === 'light' ? '#000' : '#fff',
        height: '100vh',
        width: '100vw',
        textAlign: 'center',
        margin: '0'
      };

  return (
    <>
        <div style={style}>
            <div>Current theme : {theme}</div>
            <button onClick={toggleTheme}>Toggle Theme</button>   
        </div>
    </>
     
  );
}

export default Home