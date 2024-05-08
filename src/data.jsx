import React, { createContext, useState } from 'react';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [users, setUsers] = useState([
    {
      name: "Amira",
      password: "test123",
      email: "amira@goodgiving.com"
    },
    {
      name: "Hassan",
      password: "test123",
      email: "hassan@goodgiving.com"
    }
  ]);

  const addUser = (name, password, email) => {
    setUsers(prevUsers => [...prevUsers, { name, password, email }]);
  };

  return (
    <DataContext.Provider value={{ users, addUser }}>
      {children}
    </DataContext.Provider>
  );
};
