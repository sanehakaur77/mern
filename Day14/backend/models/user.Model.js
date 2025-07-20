const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String,
    },
    password:{
        type:String,
    },
    phoneNumber:{
        type:String,
    },
    age:{
        type:Number,
    }

});
const userModel=mongoose.model('userModel',userSchema);
module.exports={
    userModel
}