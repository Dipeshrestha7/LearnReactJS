import { useEffect, useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from './userSlice/userSlice';

function App() {
  const user = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const [users, setUsers] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/users/123");
        const data = await res.json();
        setUsers(data);
      } catch (err) {
        console.error("Error fetching user:", err);
      }
    };

    fetchUser();
  }, []);

  const handleAdd = () => {
    dispatch(addUser([users]));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
      <div className="w-full max-w-xl bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">User Management</h1>

        <div className="flex justify-center mb-6">
          <button
            onClick={handleAdd}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Add User
          </button>
        </div>

        <ul className="space-y-4">
          {user.map((u) => (
            <li
              key={u.id}
              className="flex justify-between items-center bg-gray-50 border border-gray-200 p-4 rounded-lg shadow-sm"
            >
              <span className="text-lg font-medium">{u.name}</span>
              <button
                onClick={() => dispatch(removeUser(u.id))}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
