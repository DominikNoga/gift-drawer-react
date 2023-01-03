import { useState } from "react";
function CreateEvent() {
  const formatDate = (date=new Date()) =>{
    const month = (date.getMonth()+ 1).toString() ; 
    return `${date.getFullYear()}-${month.padStart(2,0)}-${date.getDate().toString().padStart(2,0)}T${date.getHours()}:${date.getMinutes()}`
  }
  const name = sessionStorage.getItem("eventName")

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
    newMembers[i] = e.target.value
    setFormData((prevState) =>({
        ...prevState,
        members: [...newMembers]       
    }))
  }
  const handleSubmit = () =>{

  }
  return (
    <section className="createEvent">
        <form onSubmit={handleSubmit} className="createEvent__form">
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
                          value={member}
                          onChange={(e)=>{
                            changeMember(e,i)
                          }}
                        />
                      </li>
                    ))
                }
                    
            </ol>
            <div className="btn--form" id="addMoreBtn" onClick={addMember}>Add more</div>
            <button id="createEventBtn" className="btn--form">Create Event</button>
        </form>
    </section>
  )
}

export default CreateEvent