const asyncHandler = require('express-async-handler');
const Event = require('../models/eventModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const joinEvent = asyncHandler(async (req, res) => {
    const {_id:id, password, name} = req.body;
    console.log(id)
    const event = await Event.findById(id);
    console.log(event)
    if(!event){
        res.status(400);
        throw new Error("There is no such event. You need to pass a valid ID")
    }
    if(!await bcrypt.compare(password, event.password)){
        res.status(400);
        throw new Error("You passed wronng password please try again")
    }
    if(!event.members.map(member => member.name).includes(name)){
        res.status(400);
        throw new Error("There is no such user added inside this event. Please try with different name")
    }

    res.status(200).send({
        id:id,
        name:name,
        token:generateToken(id)
    })

});
const getEvent = asyncHandler(async (req, res) => {
    const event = await Event.findById(req.params.id);
    res.status(200).json(event)
})
const addEvent = asyncHandler( async (req, res) => {
    const {name,date, maxPrice, password, members} = req.body
    if(!name || !password || !date){
        res.status(400)
        throw new Error("Please fill all required fields")
    }
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    const event = await Event.create({
        name:name,
        date:date,
        maxPrice:maxPrice, 
        password:hashedPassword,
        members:members,
        membersToDraw:members
    })
    
    res.status(201).json({
        _id:event._id,
    });

})
const updateEvent = asyncHandler(async (req, res) => {
    const id = req.params.id;
    const event = await Event.findById(id);
    if(!event){
        res.status(400)
        throw new Error("No such event")
    }
    const updatedEvent = await Event.findByIdAndUpdate(id, req.body, {
        new:true
    });

    res.status(200).json(updatedEvent)
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

const generateToken = (id) =>{
    // after we virify our token we will have access to 
    // the id from object which is the first parameter
    return jwt.sign({id}, process.env.JWT_SECRET,
        {expiresIn:'30d'}
    )
}

module.exports = {
    getEvent,
    addEvent,
    updateEvent,
    deleteEvent,
    joinEvent
}