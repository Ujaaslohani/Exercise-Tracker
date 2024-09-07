import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './css/login.css';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      error: null,
      token: null
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    axios.post('http://localhost:5000/users/login', {
      username: this.state.username,
      password: this.state.password
    })
      .then(response => {
        const data = response.data;
        if (data === "Login successful!") {
          this.props.history.push('/exercises');
        } else {
          this.setState({ error: data });
        }
      })
      .catch(error => {
        this.setState({ error: error.message });
      });
  }

  render() {
    return (
      <div className="main">
        <p className="sign" align="center">Login</p>
        <form className="form1" onSubmit={this.handleSubmit}>
          <input
            className="un"
            type="text"
            align="center"
            placeholder="Username"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <input
            className="pass"
            type="password"
            align="center"
            placeholder="Password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <button className="submit" align="center" type="submit">Login</button>
          <p className="forgot" align="center"><a href="/register">Don't have an account?</a></p>
          {this.state.error && <p style={{ color: 'red' }}>{this.state.error}</p>}
        </form>
      </div>
    );
  }
}

export default Login;