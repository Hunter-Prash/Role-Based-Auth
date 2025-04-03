import express from 'express';
import cors from 'cors'
import { dbConnect } from './connections.js';
import signUp from './routes/authRoute.js'
const app=express()

const PORT=3000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

dbConnect()
app.get('/',(req,res)=>{
    res.send('HII')
})

app.use('/api/v1',signUp)
app.listen(PORT,()=>{
    console.log(`App is listening on port ${PORT}`)
})