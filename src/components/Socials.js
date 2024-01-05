import React from 'react';
//import icons
import{
  ImFacebook,
  ImTwitter,
  ImPinterest,
  ImInstagram,
  ImYoutube
} from 'react-icons/im'


const Socials = () => {
  return <div className='hidden xl:flex ml-24'>
    <ul className='flex gap-x-4'>
        <li>
        <a href="http://www.instagram.com/bo.roma/" target='_blank'>
          <ImInstagram/>
        </a> 
        </li>
        <li>
        <a href="https://www.pinterest.co.uk/b0r0ma/shots/" target='_blank'>
          <ImPinterest/>
        </a> 
        </li>
    </ul>
  </div>;
};

export default Socials;
