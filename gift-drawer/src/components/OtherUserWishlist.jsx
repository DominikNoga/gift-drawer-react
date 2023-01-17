import { useState } from "react"
import GiftList from "./GiftList";
import WishlistService from "../features/wishlistService";
function OtherUserWishlist({user, id}) {
    const {token} = JSON.parse(localStorage.getItem("eventData"))
    const [wishes, setWishes] = useState(user.wishlist);    
    const markAsBought = async (i) =>{
        const newWishes = wishes
        newWishes[i].bought = !wishes[i].bought
        await WishlistService.update(id, token, user.name, newWishes)
        setWishes(() => [...newWishes])
    }
    return (
        <main className="main__wishlist--other">
            <section className="wishlist__wrapper">
                <span className="txt--title">
                    {
                        user.wishlist.length > 0 ? (`Make ${user.name} dreams come true with one of the gifts from this list`) :
                        (`${user.name} has not added a wishlist yet`)
                    }
                </span>
                <GiftList wishes={wishes} wishFuction={markAsBought} other={true}/>
            </section>
        </main>
    )
}

export default OtherUserWishlist