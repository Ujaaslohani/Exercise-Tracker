import React, { useState } from 'react';
import { registerUser } from '../api/api';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser(credentials);
      alert('Registration successful');
      navigate('/login');
    } catch (error) {
      alert('Registration failed');
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <form onSubmit={handleSubmit} className="p-4 shadow bg-light rounded w-50">
        <h2 className="text-center mb-4">Register</h2>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            value={credentials.username}
            onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            value={credentials.password}
            onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">Register</button>
      </form>
    </div>
  );
};

export default Register;
