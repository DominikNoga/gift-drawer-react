import { useState } from "react"
import ApiFunctions from "../functions/apiFunctions";

function CurrentUserWishlist({user, id}) {
    const url = `http://localhost:8000/events/${id}`;
    const [wishes, setWishes] = useState([]);    
    const [newWish, setNewWish] = useState({
        description:"",
        links: [""]
    });
    const updateWishes = () =>{
        setWishes(prevWishes => [
                ...prevWishes,
                newWish
            ]
        )
    }
    async function addWish(){
        updateWishes();
        const currentEvent = await ApiFunctions.read(url);
        currentEvent.members.forEach(member =>{
            if(member.name === user.name)
                member.wishlist = wishes
        })
        await ApiFunctions.update(url, currentEvent)
    }
    const addMoreLinks = () =>{
        if(newWish.links.length >= 4)
            return
        
        setNewWish(prevWish =>{
            return {
                ...prevWish,
                links:[...prevWish.links, ""]
            }
        })
    }
    const cutLink = () =>{
        setNewWish(prevWish =>{
            return {
                ...prevWish,
                links:prevWish.links.slice(0, prevWish.links.length - 1)
            }
        })
    }
    const deleteWish = () =>{

    }
    return (
        <main className="main__wishlist">
            <section className="list">
                <p className="txt--title">
                    Add wishes and let your friends fulfill them
                </p>
                <form onSubmit={addWish} className="wish__form">
                    <input type="text" className="input__wish" placeholder="Wish description" required/>
                    <div className="link__inputs">
                        {
                            newWish.links.map((link, i) =>(
                                <input key={i} type="text" className="input__wish" placeholder="Add link to your gift"/>
                            ))   
                        }
                        <div onClick={addMoreLinks} className="btn--circle" title="Add more links">+</div>
                        {
                            newWish.links.length > 1 && <div onClick={cutLink} className="btn--circle" title="Add fewer links">-</div>
                        }
                    </div>
                    
                    <button className="btn">Add wish</button>
                </form>
                <section className="wishes">
                    {
                        wishes.map((wish, i) =>(
                            <div className={i%2 === 0 ? "wish--white" : "wish--gray"} key={i}>
                                <span className="wish__description">{wish.description}</span>
                                <span className="wish__links">
                                    {wish.links.map((link, i) =>(
                                        <span key={i} className="link"><a target="_blank" href={link}>Link</a></span>
                                    ))}
                                </span>
                                <button onClick={deleteWish} title={"delete this wish"} className="btn--circle">x</button>
                            </div>
                        ))
                    }
                </section>
            </section>
        </main>
    )
}

export default CurrentUserWishlist
