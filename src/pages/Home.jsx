import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/styles.css';

const Home = () => (
  <div className='home-page'>
    <main>
      <section>
      <h1>Welcome to Exercise Tracker</h1>
        <p> Count Your Calories &#128293; </p>
        <Link to="/login" class="btn1">Login</Link> | <Link to="/register" class="btn2">Register</Link>
      </section>
    </main>
  </div>
);

export default Home;
