// import { useState } from "react";

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import OurWork from "./pages/OurWork";
import SolutionsPage from "./components/solutions/SolutionsPage";
import BubblePage from "./components/solutions/page/Bubblepage";
import Blog from "./pages/Blog";
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
          {/* <Route path="/blogs" element={<Blog/>}/> */}
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
