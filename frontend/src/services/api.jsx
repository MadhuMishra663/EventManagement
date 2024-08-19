import axios from "axios";

const API_URL='http://localhost:5000';
const api=axios.create({
    baseURL:API_URL,
    headers:{
        'Content-Type':'application/json',
    }
});
export const register=async(userData)=>{
    try{
const res =await api.post('/users',userData);
return res.dat
    }
    catch(err){
        throw err.res.data
    }
}
export const getAllUsers=async()=>{
    try{
const res =await api.get('/users');
return res.data
    }
    catch(err){
        throw err.res.data
    }
}
export const getUserById=async(userId)=>{
    try{
const res =await api.get(`/users/${userId}`);
return res.dat
    }
    catch(err){
        throw err.res.data
    }
}
export const disableUser=async(userId)=>{
    try{
const res =await api.patch(`/users/${userId}`);
return res.dat
    }
    catch(err){
        throw err.res.data
    }
}
export const getAllEvents=async()=>{
    try{
const res =await api.get('/users');
return res.dat
    }
    catch(err){
        throw err.res.data
    }
}

export const getEventById=async(eventId)=>{
    try{
const res =await api.get(`/users/${eventId}`);
return res.dat
    }
    catch(err){
        throw err.res.data
    }
}
export const createEvent=async(eventData)=>{
    try{
const res =await api.post('/users',eventData);
return res.data
    }
    catch(err){
        throw err.res.data
    }
}
export const updateEvent=async(eventId,eventData)=>{
    try{
const res =await api.patch(`/users/${eventId}`, eventData);
return res.data
    }
    catch(err){
        throw err.res.data
    }
}
export const deleteEvent=async(eventId)=>{
    try{
const res =await api.delete(`/users/${eventId}`);
return res.dat
    }
    catch(err){
        throw err.res.data
    }
}
