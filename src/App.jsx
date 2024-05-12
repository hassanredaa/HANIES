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
import Request from './Request.jsx';
import Clothesss from './products/Clothesss.jsx';
import Clothes2 from './products/clothes2.jsx';
import CannedFood from './products/CannedFood.jsx';
import HomemadeFood from './products/HomemadeFood.jsx';
import Toys1 from "./products/Toys1";
import Toys2 from './products/Toys2';
import NoteBooks from './products/NoteBooks';
import Books from './products/Books.jsx';
import Medical from'./products/Medical.jsx';
import Device from './products/Device.jsx';
import Equipment from './products/Equipment.jsx';
import Blood1 from './products/Blood1.jsx';





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
        <Route path="/products/clothes" element={<Clothesss />} />
        <Route path="/products/clothes2" element={<Clothes2 />} />
        <Route path="/products/CannedFood" element={<CannedFood />} />
        <Route path="/products/HomemadeFood" element={<HomemadeFood />} />
        <Route path="/products/Toys1" element={<Toys1 />} />
        <Route path="/products/Toys2" element={<Toys2 />} />
        <Route path="/products/NoteBooks" element={<NoteBooks />} />
        <Route path="/products/Books" element={<Books />} />
        <Route path="/products/Medical" element={<Medical />} />
        <Route path="/products/Device" element={<Device />} />
        <Route path="/products/Equipment" element={<Equipment />} />
        <Route path="/products/Blood1" element={<Blood1 />} />
        {/*<Route path="/products/FastFood" element={<FastFood />} />
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