import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./sections/Navbar";
import Footer from "./sections/Footer";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

import "./MainRouter.css";

const MainRouter = () => {
  return (
    <div className="MainRouter">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default MainRouter;
