import React, { useState } from 'react';
import './css/register.css';
const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          window.location.href = '/login';
        } else {
          setError('Registration failed');
        }
      })
      .catch((error) => {
        console.error(error);
        setError('Registration failed');
      });
  };

  const handleChange = (e) => {
    switch (e.target.name) {
      case 'username':
        setUsername(e.target.value);
        break;
      case 'email':
        setEmail(e.target.value);
        break;
      case 'password':
        setPassword(e.target.value);
        break;
      case 'confirmPassword':
        setConfirmPassword(e.target.value);
        break;
      default:
        break;
    }
  };

  return (
    <div className="main">
      <p className="sign" align="center">Register</p>
      <form className="form1" onSubmit={handleSubmit}>
        <input
          className="un"
          type="text"
          align="center"
          placeholder="Username"
          name="username"
          value={username}
          onChange={handleChange}
        />
        <input
          className="pass"
          type="email"
          align="center"
          placeholder="Email"
          name="email"
          value={email}
          onChange={handleChange}
        />
        <input
          className="pass"
          type="password"
          align="center"
          placeholder="Password"
          name="password"
          value={password}
          onChange={handleChange}
        />
        <input
          className="pass"
          type="password"
          align="center"
          placeholder="Confirm Password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
        />
        <button className="submit" align="center" type="submit">Register</button>
        <p className="forgot" align="center">
          <a href="/login">Already have an account?</a>
        </p>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </div>
  );
};

export default Register;