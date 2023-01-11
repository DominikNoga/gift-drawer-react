import { useState } from "react"
import GiftList from "./GiftList";
import ApiFunctions from "../functions/apiFunctions";

function OtherUserWishlist({user, id}) {
    const url = `http://localhost:8000/events/${id}`;
    const [wishes, setWishes] = useState(user.wishlist);    
    const markAsBought = async (i) =>{
        const newWishes = wishes
        newWishes[i].bought = !wishes[i].bought
        const currentEvent = await ApiFunctions.read(url);
        currentEvent.members.forEach(member =>{
            if(member.name === user.name)
                member.wishlist = newWishes
        })
        await ApiFunctions.update(url, currentEvent)
        setWishes(() => [...newWishes])
    }
    return (
        <main className="main__wishlist--other">
            <p className="txt--title">
                {
                    user.wishlist.length > 0 ? (`Make ${user.name} dreams come true with one of the gifts from this list`) :
                    (`${user.name} have not added a wishlist yet`)
                }
            </p>
            <GiftList wishes={wishes} wishFuction={markAsBought} other={true}/>
        </main>
    )
}

export default OtherUserWishlist