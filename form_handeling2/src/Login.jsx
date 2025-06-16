import React from 'react'
import { useState } from 'react'

function Login() {

    const [login, setLogin] = useState(
        {
            email:"",
            password:""
        }
    );

    const handleChange= (e)=>{
        const {name, value} = e.target;
        setLogin((prev)=>({...prev,[name]:value}))
    }

    const handleSubmit= (e)=>{
        e.preventDefault();

        const users = JSON.parse(localStorage.getItem("users")) || [];

        const matchedUser = users.find((user) => user.email ===  login.email && user.password ===login.password);

        if(matchedUser){
            alert("Login successful");
            setLogin({
                email:"",
                password:""
            })
        }
        else{
            alert("Invalid email or password");
        }
    }
  return (
    <>
    <form>
        <h1>Login Form</h1>

        <label>Email:</label>
        <input type="text" name='email' value={login.email} onChange={handleChange} placeholder='example123@gmail.com' required /> <br /> <br />

        <label> Password:</label>
        <input type="password" name="password" value={login.password} onChange={handleChange} id="" required />

        <button onClick={handleSubmit}>Login</button>

        <br /> <br />
    </form>
    
    </>
  )
}

export default Login