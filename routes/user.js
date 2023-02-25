const express= require("express")
const mongoose=require("mongoose")
const router=express.Router()
const User=require("../models/users")
const app=express()
app.use(express.json())

router.post("/register",async (req,res)=>{
    const {email, password, confirmPassword}= req.body
    let user=await User.findOne({email:email})
    if(user){
        return res.json({
            error:"User already exists"
        })
    }
    if(password!==confirmPassword){
        return res.json({
            error:"Password and confirm password does not match"
        })
    }
    user=await User.create(req.body)
    res.json({
        message:"Account created"
    })
})
router.post("/signin",async(req,res)=>{
    const {email, password}= req.body
    let user=await User.findOne({email:email})
    if(!user){
        return res.json({
            error:"User does not exists"
        })
    }
    if(password!==user.password){
        return res.json({
            error:"Wrong Password"
        })
    }
    res.json({
        message:"Sign in successfully"
    })
})

module.exports=router
