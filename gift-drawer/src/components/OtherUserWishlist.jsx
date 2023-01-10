import { useState } from "react"
import GiftList from "./GiftList";
import ApiFunctions from "../functions/apiFunctions";
import { useEffect } from "react";

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
    useEffect(() =>{
        console.log("wishes updated")
    }, [wishes])

    return (
        <main className="main__wishlist--other">
            <p className="txt--title">
                Make {user.name} dreams come true with one of the gifts from this list
            </p>
            <GiftList wishes={wishes} wishFuction={markAsBought} other={true}/>
        </main>
    )
}

export default OtherUserWishlist