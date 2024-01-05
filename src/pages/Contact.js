import React, { useRef } from 'react';
//import images
import HimaBack from '../img/contact/himaBack.jpg';
//import motion
import { motion } from 'framer-motion';
//import transition
import {transition1} from '../transitions'
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();
  function sendEmail(e){
    e.preventDefault();

    emailjs.sendForm('service_g0gr8jg', 'template_brrgl6n', form.current, 'IaF2Ynx3zGAYW16su')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }
  return <motion.section
  initial={{opacity:0, y: '100%'}}
  animate={{opacity:1, y:0}}
  exit={{opacity:0, y:'100%'}}
  transition={transition1}
   className='section bg-[#E1BB8E]'>
    <div className='container mx-auto h-full top-48'>
      <div className='flex flex-col lg:flex-row h-full items-center
       justify-start pt-36 gap-x-8 text-center lg:text-left pt-12 lg:pt-24'>
        {/**bg */}
        <motion.div 
        initial={{opacity:0, y: '100%'}}
        animate={{opacity:1, y:0}}
        exit={{opacity:0, y:'100%'}}
        transition={transition1}
        className='hidden lg:flex bg-[#C7A67C] absolute
        bottom-0 left-0 right-0 top-72 -z-10'></motion.div>
         {/**text & form */}
         <div className='lg:flex-1 lg:pt-32 px-4'>
          <h1 className='h1'> 
            Contact me
          </h1>
          <p className='mb-12'> Please don't hesitate to contact me about any inquiries or collaborations!!</p>
          <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-y-4'> 
          <div className='flex gap-x-10'>
            <input 
            className= 'outline-none border-b border-b-primary h-[60px]
            bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]'
            type='text'
             placeholder='Your Name'
             name='name'
             />
             <input 
            className= 'outline-none border-b border-b-primary h-[60px]
            bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]'
            type='text'
             placeholder='Your email address'
             name='email'
             />
          </div>
          <input 
            className= 'outline-none border-b border-b-primary h-[60px]
            bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]'
            type='text'
             placeholder='Your message'
             name='message'
             />
             <button className='btn mb-[30px] mx-auto lg:mx-0 self-start'>Send</button>
          </form>
         </div>
          {/**image */}
        <div className='lg:flex-1'>
          <img src= {HimaBack} alt=''/>
        </div>
      </div>
      </div>
  </motion.section>;
};

export default Contact;
