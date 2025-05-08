import React, { createContext } from 'react'


export const dataContext = createContext();

function UserContext({children}) {

   const data ={
                    name: "Dipesh Shrestha",
                    age: 23
                }

  return (
    <dataContext.Provider value={{data}}>
        {children}
    </dataContext.Provider>

  )
}

export default UserContext