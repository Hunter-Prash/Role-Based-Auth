import React, { use, useState} from 'react'
import { useNavigate } from 'react-router'
import axios from 'axios'

const Login = () => {

  const navigate = useNavigate();
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const {data}=await axios.post('http://localhost:3000/api/v1/login',{
        email,
        password
      })
      console.log(data)


      if(data.token){
        localStorage.setItem('token',data.token)//store the token in local storage
        localStorage.setItem('user',JSON.stringify(data.user))//The localStorage stores key-value pairs as strings only.
        setTimeout(()=>{
          navigate('/')
        },2000)
      }

    }
    catch(err){
      console.log(err)
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <form className="w-full max-w-md bg-white p-6 rounded-xl shadow-lg space-y-4">
        <h1 className="text-2xl font-bold text-center text-gray-800">Login</h1>

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

        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-500 text-white rounded-md font-semibold hover:bg-blue-600 transition"
          onClick={(e) => {handleSubmit(e)}}
        >
          Login
        </button>

        <p className="text-center text-gray-600">
          Don't have an account?{' '}
          <a href="/signup" className="text-blue-500 hover:underline">
            Sign Up
          </a>
        </p>

        <p className="text-center text-gray-600">
          Forgot your password?{' '}
          <a href="/reset" className="text-blue-500 hover:underline">
            Reset Password
          </a>
        </p>
      </form>
    </div>
  );
};

export default Login;
