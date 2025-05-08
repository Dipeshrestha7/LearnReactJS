import './App.css'
import { NavLink, Outlet } from 'react-router-dom';
import Header from './component/Header';

function App() {


  return (
    <>
    <Header />
    <div className='text-white bg-black p-4 m-4'>
      <Outlet />  
    </div>
    </>
  )
}

export default App
