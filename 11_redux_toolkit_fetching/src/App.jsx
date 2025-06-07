import { useEffect } from 'react'
import './App.css'
import {useDispatch,useSelector} from 'react-redux'
import { fetchUsersStart,fetchUsersSuccess,fetchUsersFailure } from './Slice/userSlice'

function App() {
    const dispatch = useDispatch();
    const {users, loading, error} =useSelector(state => state.users)


  useEffect(()=>{
    const fetchUsers = async () =>{
      dispatch(fetchUsersStart());
    

    try {
      const res = await fetch('https://randomuser.me/api/?results=10')
      const data = await res.json();
      dispatch(fetchUsersSuccess(data.results));
    } catch (error) {
      dispatch(fetchUsersFailure('Failed to fetch users'));
    }

    }
    fetchUsers();
  },[dispatch])

  return (
    <>
      <div>
        {loading && <p>Loading users...</p>}
        {error && <p style={{color:'red'}}>{error} </p>}
        <div>
          {users.map((user, index) =>(
            <div key={index} style={{ margin: 10, border: '1px solid #ccc', padding: 10 }}>
              <img src={user.picture.large} alt={user.name.first} />
              <p>{user.name.first} {user.name.last}</p>
              <p>{user.email}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
