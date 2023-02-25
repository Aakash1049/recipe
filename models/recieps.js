const mongoose=require("mongoose")

const reciepeSchema= new mongoose.Schema({
    title:String,
    author:String,
    image:String,
    ingredients:String,
    instructions:String
})

const Reciepe=mongoose.model("recipe",reciepeSchema)
module.exports=Reciepe