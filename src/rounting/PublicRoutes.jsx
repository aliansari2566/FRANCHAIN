import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


import PageNotFound from "../pages/PageNotFound";

import Login from "../pages/login/index";
import Signup from "../pages/Signup/index";
import EmailVerfiy from "../pages/EmailVerify/index";



export const MyRoute = () => {
  return (
 
      <Router>
      
          <Routes>
            <Route path="/login" element={<Login />} /> 
            <Route path="/" element={<Signup />} /> 
            <Route path="/emailVerfiy" element={<EmailVerfiy />} /> 
         
           
            <Route path="*" element={<PageNotFound />} />
          </Routes>
     
      </Router>

  );
};
