import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [user,setUser]=useState({name:'',email:'',password:''});
    const navigate=useNavigate()
    const handleChange=(e)=>{
        setUser({...user,[e.target.name]: e.target.value})
    }
    const handleSubmit= async (e)=>{
        e.preventDefault();
        try{
            await axios.post(`/api/auth/register`,user)
           
            navigate('/login');
        }
        catch(error){
            console.log(error)
        }
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <input 
         type="text"
         name="name"
         value={user.name}
         onChange={handleChange}
         placeholder='Names'
         
         />
         <input 
         type="text"
         name="email"
         value={user.email}
         onChange={handleChange}
         placeholder='Email'
         
         />

        <input 
         type="password"
         name="password"
         value={user.password}
         onChange={handleChange}
         placeholder='Password'
         
         />
         <button type='submit'>Register</button>
      </form>
    </div>
  )
}

export default Register
