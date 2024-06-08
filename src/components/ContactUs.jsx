import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const apiKey = import.meta.env.VITE_API_KEY;
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_4lq182w', 'template_ku4riqc', form.current, {
        publicKey: apiKey, // Remove the curly braces
      })
      .then(
        () => {
          console.log(apiKey);
          alert('SUCCESS!');
        },
        (error) => {
          console.log(apiKey);
          alert('FAILED...', error.text);
        },
      );
  };

  return (
    <div className='mx-4'> 
      <form ref={form} onSubmit={sendEmail} className="w-full  lg:w-1/2 lg:mx-auto  mt-6   border-[1px] border-zinc-500 rounded-lg bg-zinc-100 p-4 ">
    <div className="mb-4">
      <label htmlFor="to_name" className="block text-sm font-medium text-gray-700">
        Name
      </label>
      <input type="text" placeholder='Name' name="to_name" id="to_name" className="mt-1 p-2 block w-full rounded-md border-gray-300 focus:border-blue-500 focus:outline-none" />
    </div>
    <div className="mb-4">
      <label htmlFor="from_name" className="block text-sm font-medium text-gray-700">
        Email
      </label>
      <input type="email" placeholder='Email' name="from_name" id="from_name" className="mt-1 p-2 block w-full rounded-md border-gray-300 focus:border-blue-500 focus:outline-none" />
    </div>
    <div className="mb-4">
      <label htmlFor="message" className="block text-sm font-medium text-gray-700">
        Message
      </label>
      <textarea placeholder='Write a message' name="message" id="message" rows="4" className="mt-1 p-2 block w-full rounded-md border-gray-300 focus:border-blue-500 focus:outline-none" />
    </div>
    <div className="text-center">
      <button type="submit" className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
        Send
      </button>
    </div>
  </form>
    </div>
    
  );
};



