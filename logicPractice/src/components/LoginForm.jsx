import React from 'react'

function LoginForm() {
    const [formData, setFormData] = React.useState({email:"",password:""})

    const handelChange = (e)=>{
        setFormData({...formData,[e.target.name]: e.target.value})
    }

    const handelSubmit = (e)=>{
        e.preventDefault();
        console.log("Email:",formData.email);
        console.log("Password:", formData.password)
    }

  return ( 
   <>
   <form onSubmit={handelSubmit}>
    Email:<input onChange={handelChange} type='email' id='email' name='email' placeholder='Enter your email' />
    <br />
    Password:<input onChange={handelChange} type='password' id='password' name='password' placeholder='Enter your password' />
    <br />
    <br />
    <button type='submit'>Login</button>

   
    </form>
    
   </>
  )
}

export default LoginForm