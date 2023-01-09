import React from 'react'
import { useParams } from 'react-router-dom'
import CurrentUserWishlist from '../components/CurrentUserWishlist';
import OtherUserWishlist from '../components/OtherUserWishlist';
import useFetchEvent from '../customHooks/useFetchEvent';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'
function Wishlist() {
    const baseUrl = `http://localhost:8000/events`
    const {id, username:currentName} = JSON.parse(sessionStorage.getItem('user'));
    const {username} = useParams();
    const {eventData, currentUser} = useFetchEvent(`${baseUrl}/${id}`, currentName);
    let otherUser;
    if(currentUser.name !== username) {
        otherUser = eventData.members.find(member => member.name === username);
    }
    
    return (
        <>
            <header><Link to="/" title='go back to main page' className='header__link'>GiftDrawer</Link></header>
            <Link className='link--back' to={"/event"} title="Go back to event page">
                <FontAwesomeIcon icon={solid("backward")}/>
            </Link> 
            {currentUser.name === username && (<CurrentUserWishlist id={id} user={currentUser}/>)}
            {otherUser && (<OtherUserWishlist user={otherUser}/>)}
            <footer className="footer">Merry X-mas !!</footer>                
        </>
    )
}

export default Wishlist
