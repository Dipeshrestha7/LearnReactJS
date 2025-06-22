import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Corrected import statement


function Signup() {
    
    const nagivate = useNavigate();

  const [user, setUser] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (user.password !== user.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    const userData = JSON.parse(localStorage.getItem('userData')) || [];
    const userExist = userData.find((item) => item.email === user.email);

    if (userExist) {
      alert('User already exists');
      return;
    }

    userData.push(user);
    localStorage.setItem('userData', JSON.stringify(userData));
    alert('Signup successful');

    setUser({
      name: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
    });

    // Optional redirect to login
    nagivate('/login'); // Corrected navigation to login page

  };

  return (
    <div className="flex flex-col items-center p-5 h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Signup</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-96 mx-auto bg-white p-6 rounded-lg shadow-md"
      >
        <div>
          <label className="block">Full Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={user.name}
            onChange={handleInput}
            className="border px-3 py-2 rounded w-full"
            required
          />
        </div>
        <div>
          <label className="block">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={user.email}
            onChange={handleInput}
            className="border px-3 py-2 rounded w-full"
            required
          />
        </div>
        <div>
          <label className="block">Phone Number</label>
          <input
            type="text"
            name="phone"
            placeholder="Enter your phone number"
            value={user.phone}
            onChange={handleInput}
            className="border px-3 py-2 rounded w-full"
            required
          />
        </div>
        <div>
          <label className="block">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={user.password}
            onChange={handleInput}
            className="border px-3 py-2 rounded w-full"
            required
          />
        </div>
        <div>
          <label className="block">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm your password"
            value={user.confirmPassword}
            onChange={handleInput}
            className="border px-3 py-2 rounded w-full"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Signup;
 