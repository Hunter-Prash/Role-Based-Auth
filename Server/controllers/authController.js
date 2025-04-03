import bcrypt from 'bcrypt'
import mongoose from 'mongoose'
import { userModel } from '../models/userModel.js'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv';
dotenv.config();


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

export const loginController=async(req,res)=>{
    try{
        const {email,password}=req.body
        
    if(!email || !password){
        return res.status(401).json({message:'Fill all fields'})
    }
    const user=await userModel.findOne({email})

    if(!user){
        return res.status(400).json({message:'user not found'})
    }

    const match=await bcrypt.compare(password,user.password)
    if(!match){
        return res.status(400).json({message:'Invalid credentials'})
    }

    const token=jwt.sign({_id:user._id},process.env.JWT_SECRET,{expiresIn:'1d'})
    res.status(200).json({
        token:token,
        user:user
    })
    }catch(err){
        console.log(err)
        res.status(500).json({message:'Internal server error'})
    }
}

