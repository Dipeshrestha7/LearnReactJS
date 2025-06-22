import React from 'react'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom';

function Login() {

    const navigate = useNavigate();

    const [user, setUser] = useState(
        {
            email:"",
            password:""
        }
    )

    const handleInput = (e) =>{
        const {name,value} = e.target;
        setUser((prev) =>({...prev,[name]:value}))
    }

    const handleSubmit =(e) =>{
        e.preventDefault();
        const userData = JSON.parse(localStorage.getItem("userData"))||[];
        const userExist = userData.find((item) =>item.email ===user.email && item.password === user.password);

        if(!userExist){
            alert("Invalid email or password");
        }
        else{
            alert("Login successful");
            navigate('/dashboard'); 
            setUser({
                email:"",
                password:""
            });
        }
    }
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="w-96 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="block mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleInput}
              placeholder="Enter your email"
              className="border px-3 py-2 rounded w-full"
              required
            />
          </div>
          <div>
            <label className="block mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleInput}
              placeholder="Enter your password"
              className="border px-3 py-2 rounded w-full"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login