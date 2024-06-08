import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Testimonials = () => {
  // Dummy testimonial data
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const testimonials = [
    { id: 1, name: 'John Doe', text: 'Great product! Highly recommended.',image:"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 2, name: 'Jane Smith', text: 'Excellent service! Will definitely come back.', image:'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 3, name: 'David Johnson', text: 'Impressive quality and fast delivery.',image:'https://images.unsplash.com/flagged/photo-1573740144655-bbb6e88fb18a?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 4, name: 'Emily Davis', text: 'Love the product! Thanks for the amazing experience.', image:'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 5, name: 'Michael Brown', text: 'Outstanding customer support!' },
  ];

  return (
    
        
<div className=" w-3/4  items-center m-auto">
    
    
      <div className="mt-2">
      <Slider {...settings}>
        {testimonials.map(testimonial => (
          <div key={testimonial.id} className=" flex flex-col items-center  p-4 rounded-lg">
            <div className='image h-1/2 w-full  flex justify-center items-center '>
                <img src={testimonial.image} alt="" className='w-[4em] h-[4em] rounded-full bg-blue-400' />
            </div>
            <p className="text-gray-800 mb-2 text-center">{testimonial.text}</p>
            <p className="text-gray-600 font-semibold text-center">{testimonial.name}</p>
          </div>
        ))}
        </Slider>
      </div>
      
    </div>
   
    
  );
}

export default Testimonials;
