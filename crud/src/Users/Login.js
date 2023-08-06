import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginByEmail = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   

    // Perform client-side validation
    if (!email.trim() || !password.trim()) {
      console.error('Please enter both email and password.');
      return;
    }

    // Send login request to the server with request body
    axios.post(`http://localhost:8080/customer/verify-email?email=${email}&password=${password}`)
      .then((response) => {
        console.log('Login successful:', response.data);
        navigate('/');
      })
      .catch((error) => {
        console.error('Login failed:', error);
        console.log('Something wrong');
      });
  };

  return (
    <div>
      <form>
        <input
          type="email"
          className="email"
          placeholder="email"
          value={email}
          onChange={handleEmailChange}
        />
        <br />
        <input
          type="password"
          className="password"
          placeholder="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <br />
        <button className="button" type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginByEmail;
