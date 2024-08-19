import { useState,useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
const EventForm = () => {
    const [event,setEvent]=useState({name: '',description:''});
    const {id}=useParams();
    const navigate=useNavigate()
    useEffect(()=>{
        if(id){
            axios.get(`/api/events/${id}`).then(res=>{
                setEvent(res.data);
            })
        }
    },[id]);
    const handleChange=(e)=>{
        setEvent({...event,[e.target.name]: e.target.value});
    };
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(id){
            axios.put(`/api/events/${id}`,event).then(()=>{
                navigate.push(`/events`);
            });
        }
        else{
            axios.post(`/api/events`,event).then(()=>{
                navigate.push(`/events`);
            })
        }
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text"
          name='name'
        value={event.name}
        onChange={handleChange}
        placeholder='Event name'
        />
        <textarea name="description" 
           value={event.description}
           onChange={handleChange}
           placeholder='Event Description'
        
       />
       <button type='submit'>{id ? 'Update Event' : 'Create event'}</button>
      </form>
    </div>
  )
}

export default EventForm
