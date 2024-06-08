import React from 'react';
const WhyUs = () => {
  const Chooseus = [
    { id: 1, image: "https://media.istockphoto.com/id/1364946137/photo/businessman-holding-and-showing-the-best-quality-assurance-with-golden-five-stars-for.webp?b=1&s=170667a&w=0&k=20&c=4I8ctr_z1np5DiincV1VFlMjwwEyc-wHb_0gWElH6DU=", quality: "100% Quality Assurance", description: "We assure design satisfaction and assistance till the end of your project" },
    { id: 2, image: "https://images.unsplash.com/photo-1512909006721-3d6018887383?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGRlbGl2ZXJ5fGVufDB8fDB8fHww", quality: "1 Day Delivery", description: "We assure to provide Floor Plan within 24hrs of project created" },
    { id: 3, image: "https://media.istockphoto.com/id/1939454438/photo/digital-search-icon-on-future-tech-background-search-engine-evolution-futuristic-search-icon.webp?b=1&s=170667a&w=0&k=20&c=voARmK0JgtqoCz5fymJDRtOEacd7OY-BDIZnU6V3Hz4=", quality: "Project Trackability", description: "We assure design satisfaction and assistance till the end of your project" },
    { id: 4, image: "https://media.istockphoto.com/id/1215890726/photo/answering-your-call-with-a-smile.webp?b=1&s=170667a&w=0&k=20&c=Q-fMXivsEsD1xAwdBa-VDOEuIa3Eb-OwikPfyyfRilk=", quality: "Dedicated Support Team", description: "We assure design satisfaction and assistance till the end of your project" },
    { id: 5, image: "https://media.istockphoto.com/id/492612002/photo/top-priority.webp?b=1&s=170667a&w=0&k=20&c=YHL4B04vv240jTbDgSr__kxrEk7p5Qq-gdQBzQgJkg4=", quality: "Prioritized delivery", description: "We assure design satisfaction and assistance till the end of your project" },
    
  ];

  return (
    
    <div className='flex flex-wrap justify-center  gap-2 p-1 mt-1'>
        
      {Chooseus.map(item => (
        <div key={item.id} className="bg-white flex flex-col w-[10em] border-5 border-black items-center p-4 rounded-lg shadow-md ">
          <div className='flex justify-center items-center mb-4'>
            <img src={item.image} alt="" className='w-16 h-16 rounded-full ' />
          </div>
          <p className="text-gray-800 mb-2 text-center font-bold">{item.quality}</p>
          <p className="text-gray-600 text-center text-xs tracking-tighter">{item.description}</p>
        </div>
      ))}
    </div>
  );
}

export default WhyUs;