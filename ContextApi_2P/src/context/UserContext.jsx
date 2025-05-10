import { createContext } from 'react'


export const Context = createContext(); 

function UserContext({children}) {

    const userData ={
                      name: "Dipesh Shrestha",
                      email: "dipstha061@gmail.com"
                    }

  return (
    <Context.Provider value={{userData}}>
        {children}
    </Context.Provider>
  )
}

export default UserContext