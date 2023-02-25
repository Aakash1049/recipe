const express= require("express")
const mongoose=require("mongoose")
const router=express.Router()
const Reciepe=require("../models/recieps")
const app=express()


router.post("/create",async(req,res)=>{
    let recieps=await Reciepe.create(req.body)
    res.json({
        message:"Recipe added"
    })
})

router.get("/reciepe/:_id",async(req,res)=>{
    let reciepe= await Reciepe.findOne({_id:req.params._id})
    res.json({reciepe})
})

router.get("/reciepe",async(req,res)=>{
    let reciepe= await Reciepe.find({})
    res.json({reciepe})
})

router.get("/search/:title",async (req,res)=>{
    let pattern= new RegExp("^"+req.params.title)
    let recipes= await Reciepe.find({title:{$regex:pattern}})
    res.json({recipes})
})

module.exports=router
