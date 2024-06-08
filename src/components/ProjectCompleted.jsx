import React from 'react';
import Test from './Test';
import Fabrication from '../assets/Fabrication.jpeg';
import Concrete from '../assets/Concrete.jpeg';
import Construction from '../assets/General_construction.jpeg';
import Planning from '../assets/Planning.jpeg';

const ProjectCompleted = () => {
  const Chooseus = [
    { id: 1, image: Construction, quality: "General Construction", description: "Comprehensive management from foundation to finish." },
    { id: 2, image: Fabrication, quality: "Structural Fabrication", description: "Custom steel and metal structures." },
    { id: 3, image: Planning, quality: "Pre-build Consulting", description: " Detailed project planning, budgeting, and scheduling." },
    { id: 4, image: Concrete, quality: "Concrete Work", description: "Specialized concrete services, including foundations, slabs, walls, and decorative concrete." },
    
  ];

  return (
    
    <div className='flex flex-wrap justify-center gap-2 p-1 mt-4 '>
        
      {Chooseus.map(item => (
        <div key={item.id} className="bg-white flex flex-col w-[10em] border-5 border-black items-center  rounded-lg shadow-md ">
          <div className=' w-full h-[3/4] flex justify-center items-center overflow-hidden '>
            <img  src={item.image} alt="" className='overflow-hidden' />
          </div>
          <p className="text-gray-800  text-center  font-bold tracking-tighter text-sm mt-2 mb-2">{item.quality}</p>
          <p className="text-gray-800  text-center  text-xs ">{item.description}</p>
         
        </div>
      ))}
    </div>
  );
}

export default ProjectCompleted;
