import {Link} from 'react-router-dom'

function PartyMembersList(props) {
    const members = props.members;
    return (    
        <section className="event__members">
            {
                members.map((member, i) =>
                    (
                        <Link to={`/wishlist/${member.name}`} className="member" key={i} title="see wishlist">
                            <span className="item--left">
                                {member.name}
                            </span>
                        </Link>
                    )
                )
            }
        </section>
    )
}

export default PartyMembersList