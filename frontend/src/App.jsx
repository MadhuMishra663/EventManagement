import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles.css'
import Navbar from './components/Navbar'
import { Navigate, Route,  Routes } from 'react-router-dom'
import Login from './components/Login'
import EventList from './components/EventList'
import EventForm from './components/EventForm'
import AdminDashboard from './components/AdminDashboard'
import UserProfile from './components/UserProfile'
import Register from './components/Register'
import AboutUs from './components/AboutUs'
import PrivateRoute from './PrivateRoute'

function App() {
 const token=localStorage.getItem('token');
 const role = localStorage.getItem('role');

  return (
   <div>
    <Navbar/>
    <Routes>
       
        <Route path="/" element={<AboutUs/>}/>
        <Route path="/login" element={!token ?<Login/> : <Navigate to={role==='admin'?'/admin': '/user'}/>}/>
        <Route path="/register"  element={!token ?<Register/> : <Navigate to={role==='admin'?'/admin': '/user'}/>}/>
        <Route path="/events" element={token ? <EventList/> : <Navigate to="/login"/>}/>
        <Route path="/event/:id" element={token?<EventForm/>: <Navigate to="/login"/>}/>
        <Route path="/admin" element={<PrivateRoute role="admin"/>}/>
        <Route path="/admin" element={<AdminDashboard/>}/>
        {/* <Route path="/profile" element={<UserProfile/>}/> */}
      </Routes>
   </div>
    
  )
}

export default App
