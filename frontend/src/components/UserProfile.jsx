import { useEffect, useState } from 'react'
import axios from 'axios'

const UserProfile = () => {
    const [profile, setPerofile]=useState({name:'',email:''});
    useEffect(()=>{
        axios.get(`/api/usr/profile`).then(res=>{
            setPerofile(res.data);
        })
    },[])

  return (
    <div>
      <h1>Profile</h1>
      <p>Name: {profile.name}</p>
      <p>Email: {profile.email}</p>
    </div>
  )
}

export default UserProfile
