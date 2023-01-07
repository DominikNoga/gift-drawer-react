function EventInfo(props) {
    const eventData = props.eventData;
    const currentUser = props.currentUser;  
    const updateEvent = props.updateEvent;                  
    const eventDate = new Date(eventData.date).toUTCString();
    
  return (
    <section className="event__info">
        <section className="info__cart">
            <p className="txt--title">
                Hello {currentUser.name}
            </p>
            <p>
                You are making gift for: {currentUser.drawnMemberName}
            </p>

            {
                currentUser.drawnMemberName.length < 1 && 
                (<button className="btn--draw" 
                    onClick={updateEvent}>
                        Draw!
                </button>)
            }
            <button className="btn--draw">
                Add your wishlist
            </button>
        </section>
        <section className="info__cart">
            <p className="txt--title">Event details</p>
            <strong>Event: {eventData.name} </strong>
            <p>Max gift price:<strong>{eventData.maxPrice}$</strong></p>
            <span>Event will take place at: {eventDate}</span>
        </section>
    </section>
  )
}

export default EventInfo