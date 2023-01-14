import { useState } from "react"
import GiftList from "./GiftList";
import WishlistService from "../features/wishlistService";

function CurrentUserWishlist({user, id}) {
    const {token} = JSON.parse(localStorage.getItem("eventData"))
    const [wishes, setWishes] = useState(user.wishlist);    
    const [newWish, setNewWish] = useState({
        description:"",
        links: [""],
        bought: false
    });

    const addWish = async(e) =>{
        e.preventDefault();
        await WishlistService.update(id, token, user.name, [...wishes, newWish])
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
        let newWihslist = wishes.slice(0, index)
            .concat(wishes.slice(index + 1));
        await WishlistService.update(id, token, user.name, newWihslist);
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
