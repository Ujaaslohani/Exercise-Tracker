import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const username = localStorage.getItem('username'); 
  console.log("username ==> ", username);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username'); 
    navigate('/login');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container d-flex justify-content-between align-items-center">
        <a className="navbar-brand" href="/">Exercise Tracker</a>
        <div className="d-flex align-items-center">
          {username && (
            <span className="text-light me-3">Welcome, {username}!</span> // Display username
          )}
          <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
