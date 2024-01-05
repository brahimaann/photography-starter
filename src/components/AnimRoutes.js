import React from 'react';

//imoprt pages
import Home from '../pages/Home';
import Services from '../pages/Services';
import Contact from '../pages/Contact';
import Portfolio from '../pages/Portfolio';

//import routes and uselocation hook
import {Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

const AnimRoutes = () => {
  const location = useLocation();
  return(
    <AnimatePresence initial={true} mode='wait'>

   <Routes key={location.pathname} location={location}>
    <Route path="/" element={<Home />} />
    <Route path="/services" element={<Services />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/portfolio" element={<Portfolio />} />
  </Routes>
    </AnimatePresence>
  );
};

export default AnimRoutes;
