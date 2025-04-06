import React, { useState } from 'react'
import axios from 'axios'

const ResetPass = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [securityAnswer, setSecurityAnswer] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
      try{
          const {data}=await axios.post('http://localhost:3000/api/v1/reset',{
              email,
              password,
              answer:securityAnswer
          })
          console.log(data)
      }catch(err){
        console.log(err)
      }
  }
  return (
    <>
      <form>
        <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
          <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-lg space-y-4">
            <h1 className="text-2xl font-bold text-center text-gray-800">Reset Password</h1>

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
              placeholder="New Password"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <input
              type='text'
              placeholder='what is your best friends name?'
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={securityAnswer}
              onChange={(e) => setSecurityAnswer(e.target.value)}
              required
            />

            <button
              type="submit"
              className="w-full px-4 py-2 bg-blue-500 text-white rounded-md font-semibold hover:bg-blue-600 transition" onClick={(e)=>{handleSubmit(e)}}>submit</button>

          </div>
        </div>
      </form>
    </>
  )
}

export default ResetPass
