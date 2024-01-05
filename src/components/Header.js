import React from 'react';
//import components
import Socials from './Socials';
import Logo from '../img/header/logo.svg';
import MobileNav from './MobileNav';
//import link
import {Link} from 'react-router-dom'

const Header = () => {
  return <header className=' fixed bottom-0 w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center'>
    <div  className='flex flex-col lg:flex-row lg:items-center w-full justify-between'>
      {/** Logo */}
      <Link to={'/'} className='max-w-[200px]'>
      <img src={Logo} alt=''/>
      </Link>
      {/** navbar- initially hidden - shows on desktop mode */}
      <nav className='hidden xl:flex gap-x-12 font-semibold'>
        <Link to={"/"} className='text-[white] hover:text-primary transition'>Home</Link>
        <Link to={"/services"} className='text-white hover:text-primary transition'>Services</Link>
        <Link to={"/portfolio"} className='text-white hover:text-primary transition'>Portfolio</Link>
        <Link to={"/contact"} className='text-white hover:text-primary transition'>Contact</Link>
      </nav>
      </div>
      {/** socials */}
      <Socials/>
      {/** mobile navbar */}
      <MobileNav/>
    </header>;
};

export default Header;
