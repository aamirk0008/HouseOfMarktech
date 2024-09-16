// import { useState } from "react";

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import OurWork from "./components/OurWork";
import SolutionsPage from "./components/solutions/SolutionsPage";
import BubblePage from "./components/solutions/page/Bubblepage";
function App() {
  return (
    <>
      <Router>
        {/* Define Routes here */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/our-work" element={<OurWork />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/description/:name" element={<BubblePage />} />
        </Routes>
      </Router>
      {/* <Navbar/>
      <GoToTopButton/>
      <HeroSection/>
      <CTA/>
      <Solutions/>
      <Testimonials/>

      <Companies/>
      <Footer/> */}
    </>
  );
}

export default App;
