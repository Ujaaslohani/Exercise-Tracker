import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <a className="navbar-brand" href="/">Exercise Tracker</a>
        <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
