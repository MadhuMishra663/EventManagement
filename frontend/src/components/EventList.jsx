import { useEffect, useState } from 'react'
import axios from 'axios'
const EventList = () => {
  const [events, setEvents]=useState([]);
  useEffect(()=>{
    axios.get(`/api/events`).then(res=>{
      setEvents(res.data);
    })
  },[])
  return (
    <div>
      <h1>Event List</h1>
      <ul>
        {events.map(event=>(
          <li key={event._id}>{event.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default EventList
