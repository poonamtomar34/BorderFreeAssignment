const express = require("express");
const Bcrypt = require("bcrypt")
const jtoken= require("jsonwebtoken");
const router = new express.Router();
const User = require("../models/UserSchema");
router.get('/Users',async function(req,res){
    try{
        const users = await User.find()
        res.status(200).json({ Status:"Successfully found the registered users",
        usersList:users,})
    }
    catch(e){
        res.status(500).json({Status:"Error",
        Error:e.message,})
    }
})



// Register a new user


router.post('/register', async (req,res)=>{
    try{
        let {name,mail,phone,password} = req.body
        console.log(name,mail,phone,password)

        if(!name||!mail||!phone||!password){
            return res.status(422).json({Status:"Registration failed",
        Message:"Please fill out all the details"})
        }
        const userFound =await User.findOne({mail:mail})
        if(userFound){
            return res.status(300).json({message:"This email is already registered"})
        }
        const phoneFound =await User.findOne({phone:phone})
        if(phoneFound){
            return res.status(300).json({message:"This number is already registered"})
        }

        let salt = await Bcrypt.genSalt(10)
        hashedpassword = await Bcrypt.hash(String(req.body.password),salt)
        const uservar = new User({
            ...req.body,
            password:hashedpassword,
        })
        const savetheuser = await uservar.save()
        res.status(200).json({Status:"Successfully registered",
        userDetails:savetheuser})
    }

    catch(e){
        res.status(500).json({Status:"Error",
        Error:e.message,})
    }
})

//login
router.post('/login', async function(req,res){
    try{
        const {mail,password} = req.body
        // console.log(mail,password)
        if(!mail || !password){
            return res.status(422).json({Message:"Fill out the details"})
        }
        const user = await User.findOne({mail:mail})
        if(!user){
            return res.status(404).json({Status:"Error",
            Error:"Email is not registered"})
        }
        let checkpwd = await Bcrypt.compare(String(password),user.password)

        if(!checkpwd){
            return res.status(401).json({Status:"Error",
            Error:"Invalid password. Try again"})
        }
        const tokenNow = await jtoken.sign({_id:user._id.toString()},process.env.SECRET_TOKEN)
        await user.save()
        res.json({Status:"Sucess",
        genToken:tokenNow,userDetails:user})
    }
    catch(e){
        res.status(500).json({Status:"Error",
        Error:e.message,})
    }
})


module.exports = router;