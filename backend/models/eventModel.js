const mongoose = require('mongoose');

const EventSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true, "Please provide a name of your event"]
    },
    date:{
        type:Date,
        required:[true, "Please provide a date"]
    }
    ,
    maxPrice:{
        type:Number,
        required:false
    },
    password:{
        type:String,
        required:[true, "Please provide a password"]
    },
    members:{
        type:Array
    },
    membersToDraw:{
        type:Array
    }
})
module.exports = mongoose.model("Event", EventSchema)