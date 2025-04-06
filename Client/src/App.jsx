import { useState } from 'react'
import { Route,Routes } from 'react-router'
import './App.css'
import Signup from './components/Signup'
import Homepage from './components/Homepage'
import Login from './components/Login'
function App() {
   

  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>
    </>
  )
}

export default App
