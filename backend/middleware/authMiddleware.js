const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler')
const Event = require('../models/eventModel')

const protect = asyncHandler(async (req, res, next) => {
    let token
    if(req.headers.authorization && 
        req.headers.authorization.startsWith("Bearer")
    ){
        try {
            token = req.headers.authorization.split(" ")[1]
            const decoded = jwt.verify(token, process.env.JWT_SECRET)

            req.event = await Event.findById(decoded.id).select('-password')
            next() // next middleware that should be called
        } catch (error) {
            res.status(401)
            throw new Error("Not authorized")
        }
    }
    if(!token){
        res.status(401)
        throw new Error("Not authorized and no token")
    }
})

module.exports = {protect}