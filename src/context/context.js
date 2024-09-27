// context.js or context.jsx
import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const CourseProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
