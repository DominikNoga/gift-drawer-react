import { useState } from 'react';
import {Link} from 'react-router-dom'
import EventInfo from '../components/EventInfo';
import PartyMembersList from '../components/PartyMembersList';
import Spinner from '../components/Spinner';
import useFetchEvent from '../customHooks/useFetchEvent';

function Event() {
    const {id, username} = JSON.parse(sessionStorage.getItem('user'));
    const urlEvents = `http://localhost:8000/events/${id}`;
    const eventData = useFetchEvent(urlEvents);
    const [isLoading, setIsloading] = useState(false)

    if (isLoading)
      return <Spinner/>
  return (
    <>
        
        <header><Link to="/" className='header__link'>GiftDrawer</Link></header>
        <main className="event__container">
            <EventInfo username={username} eventData={eventData}/>
            <PartyMembersList members={eventData.members}/>
        </main>
        <footer className="footer">Merry X-mas !! </footer>    
    </>
  )
}

export default Event
