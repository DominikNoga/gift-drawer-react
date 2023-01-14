import { useState, useEffect } from "react";
import EventObj from '../classes/EventObj';
import PartyMember from '../classes/PartyMember';
import EventService from "../features/eventService";
export default  function useFetchEvent(id, username, token){
    const [eventData, setEventData] = useState(() => new EventObj("", new Date(), 0, [], 0));    
    const [currentUser, setCurrentUser] = useState(() => new PartyMember(""))
    useEffect(()=>{
        (async () =>{
            const event = await EventService.getEvent(id, token)
            const eventData = new EventObj(event.name, event.date,event.maxPrice, event.members, event.id)
            eventData.membersToDraw = event.membersToDraw;
            setEventData(eventData);
            setCurrentUser(eventData.members.find(member => member.name === username))
        })();
    },[id,token, username])
    return {eventData: eventData, currentUser: currentUser};
}