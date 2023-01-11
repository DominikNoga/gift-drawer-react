const asyncHandler = require('express-async-handler');

const getEvents = asyncHandler(async (req, res) => {
    res.status(200).json({
        eventName:"mikolajki",
        maxPrice: 1000
    })
})
const addEvent =asyncHandler( async (req, res) => {
    const {eventName:name} = req.body
    if(!name) {
        res.status(404)
        throw new Error('Please provide a name')
    }
    res.status(200).json({message:"adding event",
        eventName: name
    })
})
const updateEvent = asyncHandler(async (req, res) => {
    const id = req.params.id;
    res.status(200).json({
    message: `Updated event ${id}`
   })
})
const deleteEvent = asyncHandler(async (req, res) => {
    res.status(200).json({message:`Deleted event ${req.params.id}`})
})

module.exports = {
    getEvents,
    addEvent,
    updateEvent,
    deleteEvent
}