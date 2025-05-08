import React, { useContext } from 'react'
import { dataContext } from '../context/UserContext';

function Age() {
  const {data} = useContext(dataContext);
  return (
    <div className='text-white'>Age: {data.age}</div>
  )
}

export default Age