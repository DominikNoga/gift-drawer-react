import { useState } from "react"
import ApiFunctions from "../functions/apiFunctions";
import GiftList from "./GiftList";

function CurrentUserWishlist({user, id}) {
    const url = `http://localhost:8000/events/${id}`;
    const [wishes, setWishes] = useState(user.wishlist);    
    const [newWish, setNewWish] = useState({
        description:"",
        links: [""],
        bought: false
    });

    const addWish = async(e) =>{
        e.preventDefault();
        const currentEvent = await ApiFunctions.read(url);
        currentEvent.members.forEach(member =>{
            if(member.name === user.name)
                member.wishlist.push(newWish)
        })
        await ApiFunctions.update(url, currentEvent)
        setWishes(prevWishes => [
            ...prevWishes,
            newWish
        ])
        setNewWish({
            description:"",
            links: [""],
            bought: false
        })
    }
    const addMoreLinks = () =>{ 
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
    const deleteWish = async (index) =>{
        const currentEvent = await ApiFunctions.read(url);
        let newWihslist = [];
        currentEvent.members.forEach(member =>{
            if(member.name === user.name){
                member.wishlist = member.wishlist.slice(0, index)
                .concat(member.wishlist.slice(index + 1))      
                newWihslist = member.wishlist
            }
        })
        await ApiFunctions.update(url, currentEvent)
        setWishes(newWihslist)
    }
    return (
        <main className="main__wishlist">
            <p className="txt--title">
                Add wishes and let your friends fulfill them
            </p>
            <form onSubmit={addWish} className="wish__form">
                <input 
                    type="text" 
                    className="input__wish" 
                    placeholder="Wish description" 
                    value={newWish.description}
                    onChange={
                        e => {
                            setNewWish(prevWish =>({
                                ...prevWish,
                                description:e.target.value
                            }))
                        }
                    }
                    required
                />
                <div className="link__inputs">
                    {
                        newWish.links.map((link, i) =>(
                            <input 
                                key={i} 
                                type="text" 
                                className="input__wish" 
                                placeholder="Add link to your gift"
                                value={link}
                                onChange={
                                    e =>{
                                        const links = newWish.links;
                                        links[i] = e.target.value;
                                        setNewWish(prevWish =>({
                                            ...prevWish,
                                            links:links
                                        }))
                                    }
                                }
                            />
                        ))   
                    }
                    {
                        newWish.links.length < 4 &&
                        <div onClick={addMoreLinks} className="btn--circle" title="Add more links">+</div>
                    }
                    {
                        newWish.links.length > 1 && <div onClick={cutLink} className="btn--circle" title="Add fewer links">-</div>
                    }
                </div>
                
                <button className="btn">Add wish</button>
            </form>
            <GiftList wishes={wishes} wishFuction={deleteWish} other={false} />
        </main>
    )
}

export default CurrentUserWishlist
