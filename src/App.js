import React, { useContext } from 'react';
//import components
import Header from './components/Header';
import AnimRoutes from './components/AnimRoutes';

//import router
import { BrowserRouter as Router } from 'react-router-dom';
//import motion
import { motion } from 'framer-motion';
//import cursor
import { CursorContext } from './context/CursorContext'

const App = () => {
  return (
    <div className='bg-[#E1BB8E]'>
      <Router>
        <Header />
        <AnimRoutes />
      </Router>
      {/** cursor */}
    </div>
  )
};

export default App;
