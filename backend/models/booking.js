const mongoose = require('mongoose')
 
const UserSchema = new mongoose.Schema({
    fullname: String,
    destination: String,
    checkIn: Date,
    checkOut: Date,
    travelClass:String,
    paxNumber:Number

})
 
const bookModel = mongoose.model("booking", UserSchema)
 
module.exports = bookModel;