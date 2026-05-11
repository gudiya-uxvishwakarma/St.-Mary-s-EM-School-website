import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Nav from './Components/Nav'
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Career from './Components/Career.jsx';
import Navbar from './Components/Navbar.jsx'
import AboutUs from './Components/AboutUs.jsx'
import VisionMission from './Components/VisionMission.jsx'
import MD from './Components/MD.jsx'
import Admissions from './Components/Admissions.jsx';
import Curriculum from './Components/Academics/Curriculum';
import PrimarySchool from './Components/Academics/PrimarySchool';
import MiddleSchool from './Components/Academics/MiddleSchool';
import SecondarySchool from './Components/Academics/SecondarySchool';
import SeniorSecondary from './Components/Academics/SeniorSecondary';
import Gallery from './Components/Gallery.jsx';
import Contact from './Components/Contact';
import Blog from './Components/Blog';
import BlogPost from './Components/BlogPost';
import Campus from './Components/Campus.jsx';


import ScrollToTop from './Components/ScrollToTop';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Navbar />} />
        <Route path='Career' element={<Career />} />
        <Route path='/AboutUs' element={<AboutUs/>} />
        <Route path='/VisionMission' element={<VisionMission />} />
        <Route path='/MD' element={<MD />} />
        <Route path='/Admissions' element={<Admissions />} />
        <Route path='/academics/curriculum' element={<Curriculum />} />
        <Route path='/academics/primary-school' element={<PrimarySchool />} />
        <Route path='/academics/middle-school' element={<MiddleSchool />} />
        <Route path='/academics/secondary-school' element={<SecondarySchool />} />
        <Route path='/academics/senior-secondary' element={<SeniorSecondary />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/campus" element={<Campus/>} />
       
       
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AnimatedRoutes />
    </Router>
  );
}

export default App
