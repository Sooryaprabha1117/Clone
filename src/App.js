import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Thozhil from "./website/Thozhil"; // Navbar component
import Home from "./website/Home"; // Home component
import Job from "./website/job/Job"; // Job component
import Login from "./website/Login"; // Login component
import Footer1 from './website/Footer1';
import WorkMain from "./website/works/WorkMain";
import Faq from "./website/FAQ/Faq";

function App() {
  return (
    <Router>
      {/* Render Navbar once here */}
      <Thozhil />

      {/* Define Routes */}
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home page without a navbar */}
        <Route path="/jobs/fulltime" element={<Job />} />
        <Route path="/jobs/parttime" element={<Job />} />
        <Route path="/internships/fulltime" element={<Job />} />
        <Route path="/internships/parttime" element={<Job />} />
        <Route path="/how-it-works" element={<WorkMain/>} />
        <Route path="/faq" element={<Faq/> }/>
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer1 />
    </Router>
  );
}

export default App;
