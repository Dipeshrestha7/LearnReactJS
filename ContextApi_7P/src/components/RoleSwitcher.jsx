import React from 'react'
import { useContext } from 'react'
import { roleContext } from '../context/RoleContext';

function RoleSwitcher() {

    const {role, changeRole} = useContext(roleContext);

  return (
    <div>
        <h2>Current Role : {role}</h2>
        <select onChange={(e) => changeRole(e.target.value)} value={role}>
            <option value="admin">Admin</option>
            <option value="editor">Editor</option>
            <option value="viewer">Viewer</option>
        </select>
    </div>
  )
}

export default RoleSwitcher