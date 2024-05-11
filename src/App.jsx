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
import SchedOrg from './SchedOrg.jsx';
import ViewDonors from './ViewDonors.jsx';
import ViewOrgs from './ViewOrgs.jsx';
import Request from './Request.jsx';
import ProductPage from './products/Product1.jsx';






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
        <Route path="/Requests" element={<Request />} />
        <Route path="/SchedOrg" element={<SchedOrg />} />
        <Route path="/views/donors" element={<ViewDonors />} />
        <Route path="/views/organizations" element={<ViewOrgs />} />
        <Route path="/product" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;