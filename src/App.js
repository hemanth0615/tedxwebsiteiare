import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage/Home";
import Aboutus from "./pages/AboutUs/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<Aboutus />}></Route>
        <Route path="/navbar" element={<Navbar />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
