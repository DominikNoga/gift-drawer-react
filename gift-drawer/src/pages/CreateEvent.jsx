import { useState } from "react";
import {useNavigate} from 'react-router-dom'
import formatDate from "../functions/formatDate";
import PartyMember from "../classes/PartyMember";
import { Link } from "react-router-dom";
import EventService from "../features/eventService";
import { toast } from "react-toastify";
function CreateEvent() {
    const name = sessionStorage.getItem("eventName")
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
      eventName:name,
      maxPrice:50,
      eventDate:formatDate(),
      password:"",
      password2:"",
      members:[{name:""}, {name:""}, {name:""}]
    })
    const allUnique = arr => arr.length === new Set(arr).size;

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
    const handleSubmit = async (e) =>{
      e.preventDefault()
      const event = {
          "name": formData.eventName,
          "maxPrice": formData.maxPrice,
          "date": formData.eventDate,
          "password": formData.password,
          "members": formData.members,
          "membersToDraw": formData.members
      }
      if(formData.password !== formData.password2)
        toast.error("Passwords do not match")
      
      else if(!allUnique(formData.members.map(member => member.name)))
        toast.error("All member names must be unique")
      
      else{
        try {
          await EventService.addEvent(event)  
          toast.success("Event added successfully!")    
          navigate("/joinEvent")
        }catch(e) {
          toast.error(e.message)
        }        
      }
    }
    return (
      <section className="createEvent">
          <Link to={"/"} className="link--back">Back to main page</Link>
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