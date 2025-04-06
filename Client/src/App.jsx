import { useState } from 'react'
import { Route,Routes } from 'react-router'
import './App.css'
import Signup from './components/Signup'
import Homepage from './components/Homepage'
import Login from './components/Login'
import ResetPass from './components/ResetPass'
import TestPage from './components/TestPage'
import ProtectedRoute from './components/ProtectedRoute'
function App() {
   

  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/reset' element={<ResetPass/>}></Route>
        <Route path='/test' element={
          <ProtectedRoute>
            <TestPage/>
          </ProtectedRoute>
        }></Route>
        <Route path='*' element={<h1>404 Not Found</h1>}></Route>
      </Routes>
    </>
  )
}

export default App
