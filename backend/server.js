const express = require('express');
const colors = require('colors');
const connectDB = require('./config/db');
const dotenv = require("dotenv");
const app = express();
const {errorHandler} = require('./middleware/errorMiddleware')
const env = dotenv.config();
const PORT = process.env.port || 5000;
connectDB();
app.use(express.json()); // every app that uses express 
// will go first to this middleware
app.use(express.urlencoded({extended:false}))
app.use(express.raw({ extended:false}))
app.use(errorHandler)

app.use('/api/events', require('./routes/events'))

app.listen(PORT, () =>{
    console.log('server listening on port ' + PORT );
})