import {Link} from 'react-router-dom'

function PartyMembersList(props) {
    const members = props.members;
  return (
    <section id="event__members">
        <div className="member--header">
            <span className="item--left">Participant</span>
            <span>Wishlist</span>
        </div>
        {
            members.map((member, i) =>
                (
                    <div className="member" key={i}>
                        <span className="item--left">{member.name}</span>
                        <span><Link to={`/wishlist/${member.name}`}>see wishlist</Link></span>
                    </div>
                )
            )
        }
    </section>
  )
}

export default PartyMembersList
