import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
    const token = localStorage.getItem('token');
    const userrole=localStorage.getItem('role');
    if(!token || userrole!==role){
        return <Navigate to="/login"/>
    }
  return <Outlet/>
}

export default PrivateRoute
