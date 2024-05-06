import { useState } from 'react';
import Login from './Login.jsx';
import { Link } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './Register.jsx';
import ChangePassword from './ChangePassword.jsx';
import Home from './Home.jsx';



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path="/changepassword" element={<ChangePassword />} />
      </Routes>

    </BrowserRouter>


  );
}

export default App;