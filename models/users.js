const mongoose=require("mongoose")

const UserSchema= new mongoose.Schema({
    email:{
        type:String,
        unique:[true,"email already exists"]
    },
    password:String
})

const User=mongoose.model("users",UserSchema)
module.exports=User