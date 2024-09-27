import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';

const LoginPage = ({ history }) => {
  const { login } = useContext(AuthContext);
  const [role, setRole] = useState('admin');

  const handleLogin = () => {
    login(role);
    history.push(`/${role}`);
  };

  return (
    <div>
      <h1>Login</h1>
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="admin">Admin</option>
        <option value="teacher">Teacher</option>
        <option value="student">Student</option>
      </select>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;
