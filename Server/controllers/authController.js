import bcrypt from 'bcrypt'
import mongoose from 'mongoose'
import { userModel } from '../models/userModel.js'

export const signUpController=async(req,res)=>{
    const{name,email,password,answer}=req.body
    try{
        const existingUser=await userModel.findOne({email})
        if(existingUser){
            return res.status(400).json({message:'User already exists',user:existingUser})
        }
        const newPassword=await bcrypt.hash(password,10)
        
        const newUser=new userModel({
            name,
            email,
            password:newPassword,
            answer
        })
        await newUser.save()
        res.status(201).json({message:'User created'})
    }
    catch(err){
        console.log(err)
        res.status(500).json({
            message:'internal server error'
        })
    }
}

