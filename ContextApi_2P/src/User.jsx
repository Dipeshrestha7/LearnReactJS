import React from 'react'
import { useContext } from 'react'
import { Context } from './context/UserContext'

function User() {
    const {userData} = useContext(Context);
  return (
    <>
    <p>Name:{userData.name}</p>
    <p>Email: {userData.email}</p>
    </>
  )
}

export default User