import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    username: "",
    isLoggedIn: false,
  });

  const login = (username) => {
    setUser({ username, isLoggedIn: true });
  };

  const logout = () => {
    setUser({ username: null, isLoggedIn: false });
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
