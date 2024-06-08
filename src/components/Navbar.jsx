import React from 'react';
import Company_logo from '../assets/Company_logo.jpeg';
import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className='fixed top-0 left-0 right-0 bg-white shadow-md z-10 mb-1 flex items-center justify-between py-4'>
      <div className='px-2 flex items-center'>
        <div className='w-[40px] h-[30px] lg:w-[60px] lg:h-[50px]'>
        <img className='overflow-hidden h-full w-full rounded-md ' src={Company_logo} alt="Company Logo" />
        </div>
        
        <h1 className='ml-2 font-bold text-xl'>Barbrik Enterprises</h1>
      </div>
      <div className='flex items-center pr-2'>
        
        {/* Add any additional navigation items or icons here */}
        <div className='flex ml-4'>
          <FaLinkedin className='mx-2' />
          <FaFacebook className='mx-2' />
          <FaInstagram className='mx-2' />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
