import { useState, useEffect } from "react";
import EventObj from '../classes/EventObj';
import PartyMember from '../classes/PartyMember';
export default  function useFetchEvent(url){
    const [eventData, setEventData] = useState(
        new EventObj("", new Date(), 0, [])
    );    
    useEffect(()=>{
        fetch(url)
            .then(response => response.json())
            .then(event =>{
                const eventMembers = [];
                event.members.forEach(member => {
                    eventMembers.push(new PartyMember(member))
                })
                setEventData(
                    new EventObj(event.eventName, event.eventDate,event.maxPrice, eventMembers)
                )
            })
    },[url])
    return eventData;
}