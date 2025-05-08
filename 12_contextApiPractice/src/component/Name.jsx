import React, { useContext } from 'react'
import { dataContext } from '../context/UserContext'

export default function Name() {
  const { data } = useContext(dataContext);
  return (
    <div className='text-white text-xl'>Name: {data.name}</div>
  )
}
