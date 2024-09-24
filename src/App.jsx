// import { useState } from "react";

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import OurWork from "./pages/OurWork";
import SolutionsPage from "./components/solutions/SolutionsPage";
import BubblePage from "./components/solutions/page/Bubblepage";
import Blog from "./pages/Blog";
import Marketing from "./components/Marketing";
import BlogNav from "./components/BlogNav";
import BlogHome from "./components/BlogHome";
import Seo from "./components/Seo";
import PPC from "./components/PPC";
import SocialMedia from "./components/SocialMedia";
import WebDesign from "./components/WebDesign";
import Internet from "./components/Internet";
import CaseHome from "./components/casestudy/CaseHome";
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
          <Route path="/blogs" element={<Blog/>}>
            <Route index element={<BlogHome/>} />
            <Route path="marketing" element={<Marketing/>} />
            <Route path="seo" element={<Seo/>} />
            <Route path="ppc" element={<PPC/>} />
            <Route path="social-media" element={<SocialMedia/>} />
            <Route path="web-design" element={<WebDesign/>} />
            <Route path="internet" element={<Internet/>}/>
          </Route>
          <Route path="case-study" element={<CaseHome/>} />
          
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
