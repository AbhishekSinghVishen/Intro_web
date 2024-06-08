import React from 'react';
import { About_content } from '../constants';

const About = () => {
  return (
    <div className='flex flex-col items-center border-b border-neutral-900 pb-12 lg:mb-35  px-6 lg:px-12'>
      <h1 className='text-3xl font-extrabold mt-10 text-gray-800'>ABOUT US</h1>
      <div className='w-16 border-b-4 border-green-500 rounded-md mt-2'></div>
      <p className='text-lg text-justify mt-6 text-gray-700 leading-relaxed'>
        {About_content}
      </p>
    </div>
  );
};

export default About;
