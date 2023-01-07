import {useState} from "react"
import {useNavigate} from 'react-router-dom'

function JoinEvent() {
  const urlEvents = "http://localhost:8000/events"
  const id = sessionStorage.getItem('id');
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    id:id || "",
    password:"",
    username:""
  })
  const onChange = (e) =>{
    setFormData((prevState) =>({
        ...prevState,
        [e.target.name]: e.target.value
    }))
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(urlEvents)
      .then(res => res.json())
      .then(events => {
        const event = events.find(event => {
          const names = event.members.map(member => member.name);
            if (
                event.id === Number(formData.id) && 
                names.includes(formData.username) && 
                event.password === formData.password
               ) 
                return true;
            return false;
        })
        if(event){
            const user = {id:formData.id, username:formData.username}
            sessionStorage.setItem("user", JSON.stringify(user))
            navigate("/event")
        }
      })
  }
  return (
    <section className="createEvent">
        <form onSubmit={handleSubmit} className="createEvent__form">
            <label>Event ID</label>
            <input 
                type="text" 
                autoComplete="off" 
                className="input--basic" 
                name="id"
                value={formData.id}
                onChange={onChange}
                required/>
            <label>Username</label>
            <input 
                name="username"
                type="text" 
                autoComplete="off" 
                className="input--basic" 
                value={formData.username}
                onChange={onChange}
                required
            />
            <label >Password</label>
            <input 
                name = "password"
                type="password" 
                autoComplete="off" 
                className="input--basic" 
                value={formData.password}
                onChange={onChange}
                required
            />
            <button className="btn--form">Join event</button>
        </form>
    </section>
  )
}

export default JoinEvent