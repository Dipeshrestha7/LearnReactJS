import React from 'react'
import { useEffect } from 'react';
import { createContext } from 'react'
import { useState } from 'react';

export const roleContext = createContext();

function RoleContext ({children}) {
    const [role, setRole] = useState('viewer');

    useEffect(() =>{
        const storedRole = localStorage.getItem('userRole');
        if (storedRole) {
            setRole(storedRole);
        }
    },[]);

    useEffect(() => {
        localStorage.setItem('userRole',role);
    },[role]);

    const changeRole = (newRole) => setRole(newRole);

    const isAdmin = role === 'admin';
    const isEditor = role === 'editor';
  return (
    <roleContext.Provider value={{role, changeRole, isAdmin, isEditor}}>
        {children}
    </roleContext.Provider>
  )
}

export default RoleContext;