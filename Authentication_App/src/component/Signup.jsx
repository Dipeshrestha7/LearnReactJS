import React from 'react'
import { useState } from 'react'

function Signup() {

    const [user, setUser] = useState(
        {
            fullname:"",
            email:"",
            pnumber:"",
            password:"",
            cpassword:""
        }
    )

    const handleInput=(e) =>{
        const {name,value} = e.target;
        setUser((prev) =>({...prev,[name]:value}))
    }

    const handleSubmit=(e) =>{
        e.preventDefault();
        if(user.password !== user.cpassword){
            alert("Your password and conform password are not same");
        }

        if(user.fullname === "" || user.email === "" || user.pnumber === "" || user.password === "" || user.cpassword === ""){
            alert("Please fill all the fields");
            return;
        }
        const userData = JSON.parse(localStorage.getItem("userData")) || [];
        const userExist = userData.some((item) =>item.email === user.email);
        if(userExist){
            alert("User already exists with this email");
        }
        else{userData.push(user);
            localStorage.setItem("userData",JSON.stringify(userData));
            alert("USer registered successfully");
            setUser(
                {
                    fullname:"",
                    email:"",
                    pnumber:"",
                    password:"",
                    cpassword:""
                }
            )
            navigator("/login");

        }
    }


  return (
    <>
     <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">Sign Up</h2>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Full Name</label>
          <input
            type="text"
            onChange={handleInput}
            value={user.fullname}
            name="fullname"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            onChange={handleInput}
            value={user.email}
            name="email"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Phone Number</label>
          <input
            type="number"
            onChange={handleInput}
            pattern="[0-9]{10}"
            value={user.pnumber}
            name="pnumber"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Password</label>
          <input
            type="password"
            onChange={handleInput}
            value={user.password}
            name="password"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block mb-1 font-medium">Confirm Password</label>
          <input
            type="password"
            onChange={handleInput}
            value={user.cpassword}
            name="cpassword"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition duration-200"
        >
          Signup
        </button>
      </form>
    </div>
    </>
  )
}  

export default Signup