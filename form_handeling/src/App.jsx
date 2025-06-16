import { useState } from "react"
import "./App.css"

function App() {

const [user,setUser] = useState(
  {
    fname:"",
    lname:"",
    email:"", 
    pnumber:"",
    password:"",
  }
)

const handleSubmit = (e) => {
  e.preventDefault();
} 

const handleInputChange =(e)=>{
    const {name,value} = e.target;
    setUser((prev)=({...prev,[name]:value}));
}
  return (
    <>
    <h2>My name is {user.fname} {user.lname}. And my phone number and email is {user.pnumber} and {user.email}.</h2>
     <form >
        <div>
          <label>First Name:</label>
          <input 
            type="text" 
            name="fname" 
            placeholder="First Name" 
            onChange={handleInputChange}
            value={user.fname}
            required
          /> 
            
            <br /> <br />

          <label>Last Name:</label>
          <input   
            type="text" 
            name="lname" 
            placeholder="Last Name" 
            onChange={handleInputChange}
            value={user.lname}
            required
          /> 
          
          <br /> <br />

          <label>Email:</label>
          <input 
            type="email" 
            name="email" 
            placeholder="example123.gmail.com" 
            value={user.email}
            onChange={handleInputChange}
            required
            /> 
            
            <br /> <br />

          <label>Phone Number:</label>
          <input 
            type="text" 
            name="pnumber" 
            placeholder="98********" 
            onChange={handleInputChange}
            value={user.pnumber}
            pattern="[0-9]{10}"
            required
            /> 
            
            <br /> <br />

          <label>Password:</label>
          <input 
            type="password" 
            name="password" 
            placeholder="example123.gmail.com" 
            onChange={handleInputChange}
            value={user.password}
            required
            /> 
            
            <br /> <br />


          <button onClick={handleSubmit} >Submit</button>
        </div>

     </form>
    </>
  )
}

export default App
