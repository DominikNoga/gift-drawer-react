const mongoose = require('mongoose');

const connectDB = async () =>{
    mongoose.set('strictQuery', true)
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected to ${conn.connection.host}`.yellow.underline)
    }catch(e){
        console.log(`MongoDB Connect failed: ${e}`)
        process.exit(1)
    }
}
module.exports = connectDB