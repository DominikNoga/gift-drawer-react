
function EventInfo(props) {
    const eventData = props.eventData;
    const username = props.username;
  return (
    <section className="event__info">
        <section className="drawing__info">
            <p id="greetUser" className="txt--title">
                Hello {username}
            </p>
            <p className="txt--title" id="memberToGive">
                You are making gift for:
            </p>
            <button className="btn--draw" onClick={()=>{
                console.log(eventData.draw(username) )
            }}>
                Draw!
            </button>
            <button className="btn">
                Add your wishlist
            </button>
        </section>
        <section className="party__info">
            <strong className="txt--title">Event details</strong>
            <strong>Event: {eventData.name} </strong>
            <p>Max gift price:<strong>{eventData.maxPrice}$</strong></p>
        </section>
    </section>
  )
}

export default EventInfo