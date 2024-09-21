import React from 'react';
import './ErrorPage.css'; // Import CSS for the 404 page
import { Navigate, useNavigate } from 'react-router-dom';
export const ErrorPage =()=>{
  const navigate = useNavigate();

  const handleGoBack=()=>{
navigate(-1);
  }
  return (
    <div className="error-container">
      <div className="error-content">
        <h1 className="error-title">404</h1>
        <p className="error-message">Oops! Page not found.</p>
        <p className="error-description">The page you are looking for might have been moved, deleted, or does not exist.</p>
        <a href="/" className="home-link">Go Back to Home</a>
        <button className='home-link' onClick={handleGoBack}>Go Back</button>
      </div>
    </div>
  );
};
