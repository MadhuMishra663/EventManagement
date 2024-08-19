import  { useState } from 'react'

import axios from 'axios'
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const [credentials, setCredentials]=useState({email:'',password:''});
    const navigate=useNavigate();
    const handleChange=(e)=>{
        setCredentials({...credentials,[e.target.name]: e.target.value})
    }
    const handleSubmit=async (e)=>{
        e.preventDefault();
        
        try{
            const res= await axios.post(`/api/auth/login`,credentials);
            const {token, role}=res.data;
            localStorage.setItem('token',token);
            localStorage.setItem('role',role);
            navigate(role==='admin'?'/admin':'/user');
        }
        catch(err){
            console.log(err)
        }
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
         <input 
         type="text"
         name="email"
         value={credentials.email}
         onChange={handleChange}
         placeholder='Email'
         
         />

        <input 
         type="password"
         name="password"
         value={credentials.password}
         onChange={handleChange}
         placeholder='Password'
         
         />
         <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default Login
