import axios from 'axios'

const apiUrl = '/api/events/'
const loginUrl = `${apiUrl}login`

const joinEvent = async (eventData) =>{
    const response = await axios.post(loginUrl, eventData);
    
    if(response.data)
        localStorage.setItem('eventData', JSON.stringify(response.data));

    return response.data;
}
const addEvent = async(eventData) =>{
    const response = await axios.post(apiUrl, eventData)
    if(response)
        localStorage.setItem("eventData", JSON.stringify({ id:response.data._id}))
    
    return response.data;
}
const logout = async () => {
    localStorage.removeItem("id")
    localStorage.removeItem("eventData")
}
const updateEvent = async(eventData,id, token) => {
    const response = await axios.put(`${apiUrl}${id}`, eventData, {
        headers:{
            "Authorization":`Bearer ${token}`
        }
    })

    return response.data;
}
const getEvent = async(id, token) =>{
    const response = await axios.get(`${apiUrl}${id}`, {
        headers:{
            "Authorization":`Bearer ${token}`
        }
    });
    return response.data;
}

const EventService = {
    joinEvent: joinEvent,
    addEvent: addEvent,
    logout: logout,
    updateEvent: updateEvent,
    getEvent: getEvent,
}
export default EventService