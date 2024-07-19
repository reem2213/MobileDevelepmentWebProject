const mongoose=require('mongoose');

const newSchema= new mongoose.Schema({
    email:String,
    password:String
})


const userModel=mongoose.model('userLogin',newSchema);
module.exports=userModel;