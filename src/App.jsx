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
import ReviewOrgSub from './ReviewOrgSub';
import ReviewDonSub from './ReviewDonSub';
import MngOrgReq from './MngOrgReq.jsx';





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
        <Route path="/submissions/organizations" element={<ReviewOrgSub />} />
        <Route path="/submissions/donors" element={<ReviewDonSub />} />
        <Route path="/requests/organizations" element={<MngOrgReq />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;