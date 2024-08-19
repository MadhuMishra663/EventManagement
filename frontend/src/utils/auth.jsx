import axios from "axios";

 export const api=axios.create({
    baseURL: 'http://localhost:5000',
    header:{
        'Authorization':`Bearer ${localStorage.getItem('token')}`
    }
 })