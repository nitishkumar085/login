import mongoose from "mongoose";
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
    name : {
        type: String,
        required: [true,"name is required"]
    },
    email : {
        type: String,
        required: [true,"email is required"],
        unique: true
    },
    password : {
        type: String,
        required: [true,"pass is required"]
    }
})




userSchema.pre('save',async function(next){
    if(!this.isModified('password')) return next()
    this.password = await bcrypt.hash(this.password,12)
    next()
})

userSchema.methods.validatePassword = async function(pass,dbPass){
    console.log(pass,dbPass)
    return   bcrypt.compare(pass,dbPass)
}


const user = mongoose.model("user",userSchema)

export default user