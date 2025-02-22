import React, { useState } from 'react'
import Products from './Products'
import Nav from './Nav';
import A from './component/A.jsx';

function App() {
  const [a,b] = useState(90);
  return (
    <>
      <div className='main'>{a}</div>  
      <div className='main2'> Shrestha</div>

      <Products />
      <Nav />
      <A />
    </>

  )
}

export default App