import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    // Retrieve user role from local storage
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const login = (role) => {
    const user = { role };
    setUser(user);
    localStorage.setItem('user', JSON.stringify(user)); // Store in local storage
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user'); // Remove from local storage
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
