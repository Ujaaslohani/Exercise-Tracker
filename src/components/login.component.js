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
    axios.post('http://localhost:5000/api/login', {
      username: this.state.username,
      password: this.state.password
    })
      .then(response => {
        const data = response.data;
        if (data.token) {
          this.setState({ token: data.token });
          localStorage.setItem('token', data.token);
        } else {
          this.setState({ error: data.error });
        }
      })
      .catch(error => {
        this.setState({ error: error.message });
      });
  }

  render() {
    if (this.state.token) {
      return (
        <div>
          Logged in successfully! Your token is: {this.state.token}
        </div>
      );
    }
        return (
            <div className="main">
              <p className="sign" align="center">Login</p>
              <form className="form1">
                <input className="un" type="text" align="center" placeholder="Username" />
                <input className="pass" type="password" align="center" placeholder="Password" />
                <a className="submit" align="center">Login</a>
                <p className="forgot" align="center"><a href="#">Forgot Password?</a></p>
              </form>
            </div>
          );
  }
}

export default Login;