import React, { createContext } from 'react'

const FirstName =React.createContext()

function A(props) {
  return (
    <div>
    <FirstName.Provider value="Ram"></FirstName.Provider>
    </div>
  )
}

export default A;
export {FirstName};