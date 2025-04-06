import React from 'react';
import { Navigate } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router';

const ProtectedRoute = ({ children }) => {
    const navigate=useNavigate()
  const { auth ,loading } = useAuth(); // Get the auth context
  if (loading) return <div>Loading...</div>; // Wait until auth is ready

  // If no token, redirect to login page
  if (!auth.token) {
    navigate('/login'); // Redirect to login page
  }

  // If logged in, render the children (protected component)
  return children;
};

export default ProtectedRoute;