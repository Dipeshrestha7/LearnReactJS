import { useSelector, useDispatch } from 'react-redux'
import { lightTheme, darkTheme } from './themeSlice/ThemeSlice'

function App() {

  const dispatch = useDispatch();

  const theme = useSelector((state)=> state.theme)

  const style ={
    backgroundColor: theme ==='light'? 'white':'black',
    color: theme ==='light'? 'black':'white',
    margin: '10rem',
    padding: '10rem',
    boxShadow:theme ==='light'? '0 0 10px black':'0 0 10px grey'
  } 

  return (
    <>
      <div style={style}>
        <button onClick={()=>dispatch(lightTheme())}>Light Theme</button>
        <button onClick={()=>dispatch(darkTheme())}>Dark Theme</button>
      </div>
    </>
  )
}

export default App
