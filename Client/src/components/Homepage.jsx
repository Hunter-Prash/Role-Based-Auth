import React from 'react'
import { useNavigate } from 'react-router'

const Homepage = () => {
    const navigate=useNavigate()
  return (
    <>
    <button
  className="m-2 px-4 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 transition duration-300"
  onClick={() => navigate('/signup')}
>
  Sign Up
</button>

<button
  className="m-2 px-4 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 transition duration-300"
  onClick={() => navigate('/login')}
>
  Log In
</button>

    </>
  )
}

export default Homepage
