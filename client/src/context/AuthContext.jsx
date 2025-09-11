import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userType, setUserType] = useState(null); // 'student' or 'admin'

  const login = (userData, type) => {
    setUser(userData);
    setUserType(type);
  };

  const logout = () => {
    setUser(null);
    setUserType(null);
  };

  const isAuthenticated = () => {
    return user !== null;
  };

  const isAdmin = () => {
    return userType === 'admin';
  };

  const isStudent = () => {
    return userType === 'student';
  };

  return (
    <AuthContext.Provider value={{
      user,
      userType,
      login,
      logout,
      isAuthenticated,
      isAdmin,
      isStudent
    }}>
      {children}
    </AuthContext.Provider>
  );
};