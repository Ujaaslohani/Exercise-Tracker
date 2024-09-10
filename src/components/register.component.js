import React, { useState } from 'react';
import './css/register.css';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === '') {
      setError('Password is required');
      return;
    }

    fetch('/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data === 'User registered successfully!') {
          window.location.href = '/login';
        } else {
          setError(data);
        }
      })
      .catch((error) => {
        console.error(error);
        setError('Error: ' + error);
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