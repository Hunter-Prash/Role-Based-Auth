import express from 'express'
import mongoose from 'mongoose'

const mongoURI='mongodb://localhost:27017/RoleBasedAuth'
export const dbConnect=async(req,res)=>{
    try{
        await mongoose.connect(mongoURI)
        console.log('MongoDb connected')
    }catch(err){
        console.log(err)
        process.exit(1)
    }

}