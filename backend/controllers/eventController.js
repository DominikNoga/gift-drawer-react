const asyncHandler = require('express-async-handler');
const Event = require('../models/eventModel');


const getEvents = asyncHandler(async (req, res) => {
    const events =await Event.find();
    

    res.status(200).json(events)
})
const addEvent =asyncHandler( async (req, res) => {
    const {name,date, maxPrice, password, members} = req.body
    
    const event = await Event.create({
        name:name,
        date:date,
        maxPrice:maxPrice,
        password:password,
        members:members,
        membersToDraw:members
    })
    res.status(200).json(event);

})
const updateEvent = asyncHandler(async (req, res) => {
    const id = req.params.id;
    const event = await Event.findById(id);
    if(!event){
        res.status(400)
        throw new Error("No such event")
    }
    const updatedEvent = Event.findByIdAndUpdate(id, req.body, {
        new:true
    });

    res.status(200).json(updateEvent)
})
const deleteEvent = asyncHandler(async (req, res) => {
    const event = await Event.findById(req.params.id);
    if(!event) {
        res.status(400);
        throw new Error("No such event in db");
    }

    await event.remove();
    res.status(200).json({message:`Deleted event ${req.params.id}`})
})

module.exports = {
    getEvents,
    addEvent,
    updateEvent,
    deleteEvent
}