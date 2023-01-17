import { useState } from 'react';
import {Link} from 'react-router-dom'
import EventInfo from '../components/EventInfo';
import PartyMembersList from '../components/PartyMembersList';
import Spinner from '../components/Spinner';
import useFetchEvent from '../customHooks/useFetchEvent';
import EventService from '../features/eventService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid} from '@fortawesome/fontawesome-svg-core/import.macro'
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
        await EventService.updateEvent(event,id, token)
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
        <header><Link to="/" title='go back to main page' className='header__link'>GiftDrawer <FontAwesomeIcon icon={solid("gift")}/></Link></header>
        <main className="event__container">
            <EventInfo eventData={eventData} currentUser={currentUser} updateEvent={updateEvent}/>
            <h1>Event participants</h1>
            <PartyMembersList members={eventData.members}/>
        </main>
        <footer className="footer">Merry X-mas !!</footer>    

    </>
  )
}

export default Event
