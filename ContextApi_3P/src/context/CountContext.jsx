import React, { createContext } from 'react'

     export const Counter = createContext()

function CountContext({children}) {

    const [count, setCount] = React.useState(0);

    const increase= () => {
        setCount(count+1);
    }



  return (
    <Counter.Provider value={{count, setCount, increase}}>
        {children}
    </Counter.Provider>
  )
}

export default CountContext