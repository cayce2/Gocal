import React, { useState } from 'react';
import axios from 'axios';
import '../Login/login.css';

export default function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/register', {
        username,
        password,
        email
      });

      if (response.data.message === 'User registered successfully') {
        alert('Registration successful! Please log in.');
      }
    } catch (error) {
      console.error('Error registering', error);
      alert('Error during registration');
    }
  };

  return (
    <div className="register-wrapper">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          <p>Password</p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label>
          <p>Email</p>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <div>
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
}
