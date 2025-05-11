import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'


 export const authContext = createContext()

function AuthContent({children}) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [write, setWrite] = useState('');

    const login=()=> {setIsLoggedIn(true);
                      setWrite('You are logged in!');
                    };
    const logout=()=> {setIsLoggedIn(false);
                       setWrite('You are not logged in!');
                    };

  return (
    <authContext.Provider value={{isLoggedIn,login,logout,write}}>
        {children}
    </authContext.Provider>
  )
}

export default AuthContent