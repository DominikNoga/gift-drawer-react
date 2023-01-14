import { useState } from 'react';
import {Link} from 'react-router-dom'
import EventInfo from '../components/EventInfo';
import PartyMembersList from '../components/PartyMembersList';
import Spinner from '../components/Spinner';
import useFetchEvent from '../customHooks/useFetchEvent';
import EventService from '../features/eventService';
function Event() {
    const {id, name:username, token} = JSON.parse(localStorage.getItem('eventData'));
    const {eventData, currentUser} = useFetchEvent(id, username, token);
    const [isLoading, setIsLoading] = useState(false);
    const [userChosen,setUserChosen] = useState(false);
    
    const updateEvent = async () =>{
      eventData.draw(currentUser);
      setIsLoading(true);
      const currentEvent = await EventService.getEvent(id, token);
      const event = {
          ...currentEvent,
          membersToDraw: eventData.membersToDraw,
          members:eventData.members
      }
      try {
        await EventService.updateEvent(id, event, token)
        setTimeout(() =>{
          setIsLoading(false);
          setUserChosen(true)
          setTimeout(() =>{
            setUserChosen(false);
          },3000)
        }, 3000)
      } catch (error) {
        console.log(error)
      }
      
  }
  if(isLoading)
    return <Spinner chosenUser=""/>
  if(userChosen)
    return <Spinner chosenUser={currentUser.drawnMemberName}/>
  
  return (
    <>
        <header><Link to="/" title='go back to main page' className='header__link'>GiftDrawer</Link></header>
        <main className="event__container">
            <EventInfo eventData={eventData} currentUser={currentUser} updateEvent={updateEvent}/>
            <PartyMembersList members={eventData.members}/>
        </main>
        <footer className="footer">Merry X-mas !!</footer>    

    </>
  )
}

export default Event
