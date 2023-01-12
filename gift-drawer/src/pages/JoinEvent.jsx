import {useState} from "react"
import {useNavigate} from 'react-router-dom'
import ApiFunctions from "../functions/apiFunctions"
function JoinEvent() {
  const id = localStorage.getItem('id');
  const urlEvents = `/api/events/login`
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
    const req = await ApiFunctions.post(urlEvents, formData)
    const res = await req.json();
    const data = await res;
    if(data){
      // console.log(data)
      const eventData = {token: data.token, id: data.id, username:formData.name}
      localStorage.setItem('eventData', JSON.stringify(eventData));
      navigate('/event')
    }
  }
  return (
    <section className="createEvent">
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