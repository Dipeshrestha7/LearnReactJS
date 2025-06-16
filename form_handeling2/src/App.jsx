import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [user,setUser] = useState(
    {
      fname:"",
      lname:"",
      email:"",
      pnumber:"",
      password:"",
      cpassword:""
    }
  )

  const handleInput = (e) =>{
    const {name, value} = e.target;
    setUser((prev) => ({...prev, [name]: value}));
  }

  const handleSubmit =(e) =>{
    e.preventDefault();

    if(user.password !== user.cpassword){
      alert("Your password and conform password do not match");
    }

    const existingUSers = JSON.parse(localStorage.getItem("users")) || [];

    const isUserExist = existingUSers.some((u) => u.email === user.email);

    if(isUserExist){
      alert("User already exists with this email");
      return;
    }

    existingUSers.push(user);
    localStorage.setItem("users", JSON.stringify(existingUSers));
    alert("User registered successafully");

    setUser(
      {
        fname:"",
        lname:"",
        email:"",
        pnumber:"",
        password:"",
        cpassword:""
      }
    )

    
  }

  return (
   <>
   <form >
    <h1>Form Handeling Demo</h1>

    <p>My name is {user.fname} {user.lname}. My number and email are {user.pnumber} and {user.email} respectively.</p>

    <label> First Name:</label>
    <input type="text" value={user.fname} onChange={handleInput} name="fname" required /> <br /> <br />

    <label> Last Name:</label>
    <input type="text" value={user.lname} onChange={handleInput} name="lname" required /> <br /> <br />

    <label> Email:</label>
    <input type="email" value={user.email} onChange={handleInput} name="email" required /> <br /> <br />

    <label>Phone Number:</label>
    <input type="number" value={user.pnumber} onChange={handleInput} name='pnumber' pattern="[0-9] {10}" required /> <br /> <br />

    <label>Password:</label>
    <input type="password" value={user.password} onChange={handleInput} name='password' required /> <br /> <br />

    <label>Conform Password:</label>
    <input type="password" value={user.cpassword} onChange={handleInput} name='cpassword' required  /> <br /> <br />

    <button onClick={handleSubmit}>Submit</button>
   </form>
   </>
  )
}

export default App
