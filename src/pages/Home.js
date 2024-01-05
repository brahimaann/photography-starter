import React from 'react';

//import images
import HimaBack from '../img/home/himaBack.png';
//import link
import { Link } from 'react-router-dom';
//import motion
import { motion } from 'framer-motion';
//import transition
import {transition1} from '../transitions'

const Home = () => {
  return  <motion.section 
  initial={{opacity:0}}
  animate={{opacity:1}}
  exit={{opacity:0}}
  transition={transition1}
  

  
    className='bg-[#E1BB8E] relative lg:-right-40
   overflow-hidden '>
    <div className='container  mx-auto h full relative'>
      {/** text &img wrapper */}
      <div className='flex flex-col justify-center'>
        {/** text */}
        <div className='w-full pt-36 pb-14 lg:pt-0 lg:pb-0
        lg:w-auto z-10 lg:absolute flex flex-col justify center 
        items-center lg:items-start '>
          <h1 className='h1 letter-spacing-2'>
            Brahima <br /> Ann
          </h1>
          <p className='text-[20px] lg:text-[26px] font-primary mb-1 lg:mb-3'>Portrait and Lifestyle Photographer</p>
          <p className='text-[20px] lg:text-[26px] font-primary mb-4 lg:mb-12'>
            Based in Minneapolis, USA
          </p>
          <Link to={'/contact'} className='btn mb-[30px]'> Contact me </Link>
        </div>
        {/** img */}
        <div className='flex justify-end max-h-96 lg:max-h-max'>
          <div className='relative lg:-right-40 overflow-hidden'>
          <img src={HimaBack} alt='' />
          </div>
        </div>

      </div>
    </div>


  </motion.section>;

};

export default Home;
