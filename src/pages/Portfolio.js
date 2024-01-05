import React from 'react';
//import images
import Image1 from '../img/portfolio/Mawatta bday 23-39.png';
import Image2 from '../img/portfolio/Eid4.21.23 (5 of 50).png';
import Image3 from '../img/portfolio/Reflection 3 himas edit no3.png';
import Image4 from '../img/portfolio/IMG_5457.jpg';
import Image5 from '../img/portfolio/IMG_4972.jpg';
import Image6 from '../img/portfolio/Stuart and donny on motor cycle-1.png';
import Image7 from '../img/portfolio/IMG_5580.jpg';
import Image8 from '../img/portfolio/BabouHoCO23-12.jpg';
//import link
import { Link } from 'react-router-dom';
//import motion
import { motion } from 'framer-motion';
//import transition
import {transition1} from '../transitions'


const Portfolio = () => {
  const portfolioLink = 'https://boroma.myportfolio.com/boroma';

  const handlePortfolioButtonClick = () => {
    window.open(portfolioLink, '_blank');
  };

  return (
    <div className=''>
      <motion.section
        initial={{ opacity: 0, y: '100%' }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: '100%' }}
        transition={transition1}
        className='flex flex-col lg:items-start'
      >
        <div className='container mx-auto h full relative'>
          <div
            className='flex flex-col lg:flex-row h-full items-center
         justify-start gap-x-24 text-center lg:text-left pt-24 
         lg:pt-36 pb-8'
          >
            {/** text */}
            <div className='flex flex-col lg:items-start'>
              <h1 className='h1'>portfolio</h1>
              <p className='lg:mb-12 max-w-sm'>
               Here are a few of my favorite shots so far some from shoots and others just from life!
                <br />
                <br />
               There is a link to more of my work below!
              </p>
              {/* Button to open the link in a new tab */}
              <button
                onClick={handlePortfolioButtonClick}
                className='btn mb-[30px] mx-auto lg:mx-0'
              >
                Portfolio
              </button>
              <Link to={'/contact'} className='btn mb-[30px] mx-auto lg:mx-0'>
                Contact me
              </Link>
            </div>
        {/** img grid */}
        <div className='grid grid-cols-4 lg:gap2'>
           {/** img */}
          <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-[#C7A67C] overflow-hidden'>
            <img className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' src={Image1} alt='Woman with hijab on head looking in the distance' />
          </div>
          <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-[#C7A67C] overflow-hidden'>
            <img className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' src={Image2} alt='Two brothers lean on a stairwell on eid' />
          </div>
          <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-[#C7A67C] overflow-hidden'>
            <img className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' src={Image3} alt='man turning his back on his own reflection' />
          </div>
          <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-[#C7A67C] overflow-hidden'>
            <img className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' src={Image4} alt='Man in thought while sitting on a stool' />
          </div>
          <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-[#C7A67C] overflow-hidden'>
            <img className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' src={Image7} alt=' man posing on a stool like an rnb cover' />
          </div>
          <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-[#C7A67C] overflow-hidden'>
            <img className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' src={Image8} alt='Young man all dressed up ready to go to the dance' />
          </div>
        </div>
      </div>
    </div>
  </motion.section>;
  </div>
  );
};

export default Portfolio;
