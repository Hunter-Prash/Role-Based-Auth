import React, { use, useState} from 'react'
import { useNavigate } from 'react-router'
import axios from 'axios'
const Signup = () => {
  const navigate=useNavigate()
  
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [answer,setAnswer]=useState('')

  

  const handleSubmit = async(e) => {
    e.preventDefault()
    try{
      const {data}=await axios.post('http://localhost:3000/api/v1/signup',{
        name,
        email,
        password,
        answer
      })
      console.log(data)
    }catch(err){
      console.log(err)
    }

  }
  return (
    <>
      <form className="max-w-md mx-auto mt-8 p-6 bg-white rounded-xl shadow-lg space-y-4">
        <h1 className="text-2xl font-bold text-center text-gray-800">Sign Up</h1>

        <input
          type="text"
          placeholder="Username"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          type="text"
          placeholder="Security Question"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition duration-300"
          onClick={(e) => {handleSubmit(e)}}
        >
          Create Account
        </button>

        <button onClick={()=>{navigate(-1)}}>Back</button>
      </form>

    </>
  )
}

export default Signup
