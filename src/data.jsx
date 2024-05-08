import React, { createContext, useState } from 'react';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [users, setUsers] = useState([
    {
      first: "Amira",
      last:"Sameh",
      gender:"Female",
      email: "amira@goodgiving.com",
      number: "01000000000",
      password: "test123",
      type: 'Doctor',
      doc: null

    },
    {
      name: "Hassan",
      last:"Reda",
      gender:"Male",
      email: "hassan@goodgiving.com",
      number: "01000000000",
      password: "test123",
      type: "Teacher",
      doc: null
    }
  ]);

  const addUser = (name, password, email) => {
    setUsers(prevUsers => [...prevUsers, { name, last, gender,email,number,password,type,doc }]);
  };

  return (
    <DataContext.Provider value={{ users, addUser }}>
      {children}
    </DataContext.Provider>
  );
};
