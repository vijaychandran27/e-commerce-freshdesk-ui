import React, { useState, useEffect } from 'react';
// import { opertions, selectors } from '../store/features/user';
// import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { postCall} from '../helper/apiHelper';

function Login() {
  const navigate = useNavigate();

  const replaceUrl = () => {
    navigate('/products', { replace: true });
  };

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = postCall('/login', { username, password });
      if (response?.data?.data?.token) {
        localStorage.setItem('token', response?.data?.data?.token);
        replaceUrl();
      } else {
        localStorage.setItem('token', '');
      }
      console.info('res',response);

    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-heading">Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            className="input-field"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            className="input-field"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button className="login-button" type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;