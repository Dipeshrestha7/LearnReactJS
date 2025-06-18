import React from 'react'
import { useState } from 'react'

function Login() {

    const [user, setUser] = useState(
        {
            email:"",
            password:""
        }
    )

    const handleInput =(e) =>{
        const {name, value} =e.target;
        setUser((prev) =>({...prev,[name]:value}))
    }

    const handleSubmit=(e) =>{
        e.preventDefault();
        if(user.email === "" || user.password === ""){
            alert("Please fill all the fields");
            return;
        }
        const userData =JSON.parse(localStorage.getItem("userData")) || [];
        const Existuser = userData.find((item) => item.email ===user.email && item.password === user.password);
        if(Existuser){
            alert("Login successful");
            setUser(
                {
                    email:"",
                    password:""
                }
            )
            window.location.href = "dashboard"; 
        }
        else{
            alert("Invalid email or password");
        }
    }
  return (
    <>
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">
          Login
        </h2>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            value={user.email}
            onChange={handleInput}
            name="email"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block mb-1 font-medium">Password</label>
          <input
            type="password"
            value={user.password}
            onChange={handleInput}
            name="password"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition duration-200"
        >
          Login
        </button>
      </form>
    </div>
    
    </>
  )
}

export default Login