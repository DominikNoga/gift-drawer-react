import {useState} from "react"
import {Link, useNavigate} from 'react-router-dom'
import EventService from "../features/eventService";
import {toast} from 'react-toastify'
function JoinEvent() {
    const {id=""} = JSON.parse(localStorage.getItem('eventData'));
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
      _id:id || "",
      password:"",
      name:""
    })
    const onChange = (e) =>{
      setFormData((prevState) =>({
          ...prevState,
          [e.target.name]: e.target.value
      }))
    }
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        await EventService.joinEvent(formData)
        navigate('/event')
      } catch (error) {
        toast.error("Invalid ID, password or name")
      }
      
    }
    return (
      <section className="createEvent">
        <Link to={"/"} className="link--back">Back to main page</Link>
          <form onSubmit={handleSubmit} className="createEvent__form">
              <label>Event ID</label>
              <input 
                  type="text" 
                  autoComplete="off" 
                  className="input--basic" 
                  name="_id"
                  value={formData._id}
                  onChange={onChange}
                  required/>
              <label>Username</label>
              <input 
                  name="name"
                  type="text" 
                  autoComplete="off" 
                  className="input--basic" 
                  value={formData.name}
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