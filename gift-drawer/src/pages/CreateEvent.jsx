import { useState } from "react";
import {useNavigate} from 'react-router-dom'
import formatDate from "../functions/formatDate";
import PartyMember from "../classes/PartyMember";
// import axios from "axios";
function CreateEvent() {
  const urlEvents = "/api/events/"
  const name = sessionStorage.getItem("eventName")
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    eventName:name,
    maxPrice:50,
    eventDate:formatDate(),
    password:"",
    password2:"",
    members:["", "", ""]
  })
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }
  const addMember = () =>{
    setFormData((prevState) => ({
        ...prevState,
        members: [...formData.members, ""]
      }))
  }
  const changeMember = (e,i) =>{
    const newMembers = [...formData.members]
    newMembers[i] = new PartyMember(e.target.value)
    setFormData((prevState) =>({
        ...prevState,
        members: [...newMembers]       
    }))
  }
  const handleSubmit = (e) =>{
    e.preventDefault()
    const event = {
        "name": formData.eventName,
        "maxPrice": formData.maxPrice,
        "date": formData.eventDate,
        "password": formData.password,
        "members": formData.members,
        "membersToDraw": formData.members
    }
    const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(event)

    }
    
    // axios.post(urlEvents, event, )
    fetch(urlEvents, options)
    .then(res => res.json())
    .then(data =>{
      localStorage.setItem("id", data._id)
      navigate(`/joinEvent`)
    })
        
  }
  return (
    <section className="createEvent">
        <form className="createEvent__form" onSubmit={handleSubmit}>
            <label>Event Name</label>
            <input 
                type="text" 
                id="eventName" 
                autoComplete="off" 
                className="input--basic"
                name="eventName"
                value={formData.eventName}
                onChange={onChange}
                required
            />
            <label>Date of event</label>
            <input 
                type="datetime-local" 
                id="eventDate" 
                className="input--basic" 
                name="eventDate"
                value={formData.eventDate}
                onChange={onChange}
                required
            />
            <label>Max gift price</label>
            <input 
                type="number" 
                id="maxPrice" 
                className="input--basic"
                name="maxPrice"
                value={formData.maxPrice}
                onChange={onChange}
            />
            <label>Password</label>
            <input 
                type="password" 
                autoComplete="off" 
                className="input--basic"
                name="password"
                value={formData.password}
                onChange={onChange}
                required
            />
            <label>Repeat password</label>
            <input 
                type="password" 
                autoComplete="off" 
                className="input--basic"
                name="password2"
                value={formData.password2}
                onChange={onChange}
                required
            />
            <strong>Event members</strong>
            <ol className="membersList">
               { 
                    formData.members.map((member, i) => (
                      <li className="members__item" key={i}>
                        <input 
                          type="text" 
                          className="memberName"
                          required 
                          placeholder="Participant name..."
                          value={member.name}
                          onChange={(e)=>{
                            changeMember(e,i)
                          }}
                        />
                      </li> 
                    ))
                }
            </ol>
            <div className="btn--circle" onClick={addMember}>+</div>
            <button className="btn--form">Create Event</button>
        </form>
    </section>
  )
}

export default CreateEvent