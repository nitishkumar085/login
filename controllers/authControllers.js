

import catchApiErrors from "../utils/catchApiErrors.js";
import applicationError from "../utils/applicationError.js";
import User from "../model/userModel.js";
import jwt from "jsonwebtoken"

const signUp = async(req,res,next)=>{
    const user = await User.create({
        name : req.body.name,
        email : req.body.email,
        password : req.body.password
    })

    res.status(201).json({
        status: "success",
        data:{user}
    })

}

const signIn = async(req,res,next)=>{
    const {email,password} = req.body
    if(!password || !email) res.status(200).json({
        error:"enter email and password"
    })
    const user1 = await User.findOne({email})
    // console.log(user1.checkPass)

    if(!User || !(await user1.validatePassword(password,user1.password))){
        res.status(200).json({
            error:"incorrect password"
        })
    }
    else{
        const token  = jwt.sign({id:user1._id,name:user1.name},process.env.SECRET_JWT,{
            expiresIn: process.env.SECRET_EXPIRY
        })
    
        res.status(201).json({
            status: "success",
            token
        })
    }
    // console.log(user1)
    
}



export {signUp,signIn}