import axios from 'axios';
import { useEffect, useState } from 'react'

const AdminDashboard = () => {
    const[events, setEvents]=useState([]);
    const[users, setUsers]=useState([]);
    const[logs, setLogs]=useState([]);
    useEffect(()=>{
        fetchEvents();
        fetchUsers();
        fetchLogs();
    },[])
    const fetchEvents=async()=>{
        try{
          const res= await axios.get(`/api/events`);
          setEvents(res.data);
        }
        catch(error){
          console.log(error);
        }
        
    }
    const fetchUsers=async()=>{
        try{
          const res= await axios.get(`/api/users`);
          setUsers(res.data);
        }
        catch(error){
          console.log(error);
        }
        
    }
    const fetchLogs=async()=>{
        try{
          const res= await axios.get(`/api/logs`);
          setLogs(res.data);
        }
        catch(error){
          console.log(error);
        }
        
    }
    const handleDisableUser=async()=>{
        try{
          await axios.patch(`/api/users/${userId}/disable`);
          fetchUsers();
        }
        catch(error){
          console.log(error);
        }
        
    }
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <section>
        <h2>Events</h2>
        <ul>
            {events.map(event=>(
                <li key={event._id}>{event.name}- {event.description}</li>
            ))}
        </ul>
      </section>

      <section>
        <h2>Users</h2>
        <ul>
            {users.map(user=>(
                <li key={user._id}>{user.name}- {user.email}</li>
            ))}
        </ul>
      </section>
      
      <section>
        <h2>Logs</h2>
        <ul>
            {logs.map(log=>(
                <li key={log._id}>{log.message}</li>
            ))}
        </ul>
      </section>
    </div>
  )
}

export default AdminDashboard
