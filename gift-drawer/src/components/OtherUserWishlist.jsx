import React from 'react'

function OtherUserWishlist({user}) {
  return (
    <div>
        {
            user && 
            (
                <div>
                    This is {user.name} wishlist
                </div>
            ) 
        }
    </div>
   
  )
}

export default OtherUserWishlist
