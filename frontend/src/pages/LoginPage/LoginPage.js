import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import './LoginPage.css';

const LoginPage = () => {
  const navigate = useNavigate();
  const { setUser } = useUser();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Temporary mock login logic
    if (email === 'counsellor@example.com' && password === 'password') {
      setUser({ role: 'counsellor' });
      navigate('/');
    } else if (email === 'admin@example.com' && password === 'password') {
      setUser({ role: 'admin' });
      navigate('/');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form className="login-form" onSubmit={handleLogin}>
        {error && <p className="error-message">{error}</p>}
        <label>
          Email
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default LoginPage;
