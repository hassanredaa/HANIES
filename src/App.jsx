import { useState } from 'react';
import Login from './Login.jsx';
import { Link } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './Register.jsx';
import ChangePassword from './ChangePassword.jsx';
import Home from './Home.jsx';
import AdminDB from './AdminDB.jsx';
import ReviewOrgSub from './ReviewOrgSub';
// import ReviewOrgSub from './ReviewDonSub';





function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path="/changepassword" element={<ChangePassword />} />
        <Route path="/admin" element={<AdminDB />} />
        <Route path="/submissions/organizations" element={<ReviewOrgSub />} />
        {/* <Route path="/submissions/donations" element={<ReviewDonSub />} /> */}

      </Routes>
    </BrowserRouter>
  );
}

export default App;