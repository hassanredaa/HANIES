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
import MngDonReq from './MngDonReq.jsx';
import DoctorPage from './DoctorPage.jsx';
import TeacherPage from './TeacherPage.jsx';
import DonorHome from './DonorHome.jsx';
import Requests from './Requests.jsx';
import MaleClothing from './products/MaleClothing.jsx';








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
        <Route path="/requests/donors" element={<MngDonReq />} />
        <Route path="/DonorHome" element={<DonorHome />} />
        <Route path="/DoctorPage" element={<DoctorPage />} />
        <Route path="/TeacherPage" element={<TeacherPage />} />
        <Route path="/Requests" element={<Requests />} />
        <Route path="/products/MaleClothing" element={<MaleClothing />} />
        {/* <Route path="/products/FemaleClothing" element={<FemaleClothing />} />
        <Route path="/products/FastFood" element={<FastFood />} />
        <Route path="/products/Homemade" element={<HomeMade />} />
        <Route path="/products/Toys" element={<Toys1 />} />
        <Route path="/products/Toys" element={<Toys2 />} />
        <Route path="/products/NoteBooks" element={<NoteBooks />} />
        <Route path="/products/Pencils" element={<Pencils />} />
        <Route path="/products/Pens" element={<Pens />} />
        <Route path="/products/Markers" element={<Markers />} />
        <Route path="/products/Bandages" element={<Bandages />} />
        <Route path="/products/Wipes" element={<Wipes />} />
        <Route path="/products/Blood2" element={<Blood2 />} /> */}
        

      </Routes>
    </BrowserRouter>
  );
}

export default App;