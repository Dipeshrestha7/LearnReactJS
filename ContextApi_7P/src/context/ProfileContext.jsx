import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react'

export const profileContext = createContext();

function ProfileContext({children}) {

    const [profile, setProfile]= useState(null);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);

    useEffect(() => {
    fetch('https://reqres.in/api/users/2')
    .then((response) => response.json())
    .then((data) =>{
        setProfile(data.data);
        setLoading(false);
    })
    .catch(()=>{
        setError("Something went wrong");
        setLoading(false);
    })

    },[]);

  return (
    <profileContext.Provider value={{profile, loading, error}}> 
        {children}
    </profileContext.Provider>
  )
}

export default ProfileContext