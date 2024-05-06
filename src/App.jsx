import { useState } from 'react';
import Login from './Login.jsx';
import { Link } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './Register.jsx';
import ChangePassword from './ChangePassword.jsx';
import Home from './Home.jsx';
import AdminDB from './AdminDB.jsx';
import OrganizationHome from './OrganizationHome.jsx';
import AboutOrg from './AboutOrg.jsx';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path="/changepassword" element={<ChangePassword />} />
        <Route path="/admin" element={<AdminDB />} />
        <Route path="/OrganizationHome" element={<OrganizationHome />} />
        <Route path="/AboutOrg" element={<AboutOrg />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;