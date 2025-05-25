import { useContext } from 'react'
import { roleContext } from '../context/RoleContext'

function Dashboard() {

    const {isAdmin, isEditor, role} = useContext(roleContext);

  return (
    <div>
        <h1>Dashboard</h1>
        {isAdmin && <button>Delete User</button>}
        {isEditor && <button>Edit Context</button>}
        {role === 'viewer' && <p>Read-only access</p>}
    </div>
  )
}

export default Dashboard