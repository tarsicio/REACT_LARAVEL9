import React, { createContext } from 'react';
import axios from 'axios';

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const authData = {
    username: 'username',
    password: 'password',
  };

  return (
    <AuthContext.Provider value={authData}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => React.useContext(AuthContext);

const useAxios = () => {
  const authData = useAuth();

  return axios.create({
    auth: {
      username: authData.username,
      password: authData.password,
    },
  }