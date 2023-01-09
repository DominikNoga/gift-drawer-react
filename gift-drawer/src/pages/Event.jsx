import { useState } from 'react';
import {Link} from 'react-router-dom'
import EventInfo from '../components/EventInfo';
import PartyMembersList from '../components/PartyMembersList';
import Spinner from '../components/Spinner';
import useFetchEvent from '../customHooks/useFetchEvent';
import ApiFunctions from '../functions/apiFunctions';
function Event() {
    const {id, username} = JSON.parse(sessionStorage.getItem('user'));
    const urlEvents = `http://localhost:8000/events/${id}`;
    const {eventData, currentUser} = useFetchEvent(urlEvents, username);
    const [isLoading, setIsLoading] = useState(false);
    const [userChosen,setUserChosen] = useState(false);
    
    const updateEvent = async () =>{
      const baseUrl = `http://localhost:8000/events`
      eventData.draw(currentUser);
      setIsLoading(true);
      const currentEvent = await ApiFunctions.read(`${baseUrl}/${eventData.id}`);
      const event = {
          ...currentEvent,
          membersToDraw: eventData.membersToDraw,
          members:eventData.members
      }
      await ApiFunctions.update(`${baseUrl}/${eventData.id}`, event);
      setTimeout(() =>{
        setIsLoading(false);
        setUserChosen(true)
        setTimeout(() =>{
          setUserChosen(false);
        },3000)
      }, 3000)
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
