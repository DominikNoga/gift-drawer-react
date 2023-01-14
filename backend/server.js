const express = require('express');
const colors = require('colors');
const path = require('path');
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

if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, '../gift-drawer/build')));
    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, '../gift-drawer/build/index.html')))
}
else{
    app.get('/', (req, res) =>{
        res.send("Set mode to production");
    })
}

app.listen(PORT, () =>{
    console.log('server is listening on port ' + PORT );
})