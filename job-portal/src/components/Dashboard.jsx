import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('userData')) || [];

    if (!storedUser) {
      alert('Please login first');
      navigate('/login');
    } else {
      setUser(storedUser);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('userData');
    navigate('/login');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      {user && (
        <div className="bg-white p-8 rounded-lg shadow-md w-96 text-center">
          <h1 className="text-2xl font-bold mb-4">
            Welcome, {user.name || user.email}!
          </h1>
          <p className="text-gray-700 mb-6">You are now logged in.</p>
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
