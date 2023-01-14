import EventService from "./eventService";

const updateWishlist = async (id, token, name, newWishlist) => {
    const currentEvent = await EventService.getEvent(id, token)
    for(let member of currentEvent.members){
        if(member.name === name){
            member.wishlist = newWishlist
            break
        }
    }
    await EventService.updateEvent(currentEvent, id, token)
}

const WishlistService = {
    update: updateWishlist,
}

export default WishlistService;