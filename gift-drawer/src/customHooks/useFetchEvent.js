import { useState, useEffect } from "react";
import EventObj from '../classes/EventObj';
import PartyMember from '../classes/PartyMember';
import ApiFunctions from "../functions/apiFunctions";
export default  function useFetchEvent(url, username, token){
    const [eventData, setEventData] = useState(() => new EventObj("", new Date(), 0, [], 0));    
    const [currentUser, setCurrentUser] = useState(() => new PartyMember(""))
    useEffect(()=>{
        (async () =>{
            const event = await ApiFunctions.read(url, token);
            const eventData = new EventObj(event.name, event.date,event.maxPrice, event.members, event.id)
            eventData.membersToDraw = event.membersToDraw;
            setEventData(eventData);
            setCurrentUser(eventData.members.find(member => member.name === username))
        })();
    },[url, username])
    return {eventData: eventData, currentUser: currentUser};
}