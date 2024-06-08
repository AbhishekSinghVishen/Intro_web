import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const WorksweDone = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
      const testimonials = [
        { id: 1, name: 'John Doe', text: 'Great product! Highly recommended.',image:"https://images.unsplash.com/photo-1474696100102-01b8519f06f3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJ1aWxkaW5nc3xlbnwwfHwwfHx8MA%3D%3D" },
        { id: 2, name: 'Jane Smith', text: 'Great product! Highly recommended.',image:"https://plus.unsplash.com/premium_photo-1680582107403-04dfac02efc3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJ1aWxkaW5nc3xlbnwwfHwwfHx8MA%3D%3D" },
        { id: 3, name: 'David Johnson', text: 'Great product! Highly recommended.',image:"https://images.unsplash.com/photo-1503951458645-643d53bfd90f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJ1aWxkaW5nc3xlbnwwfHwwfHx8MA%3D%3D" },
        { id: 4, name: 'Emily Davis', text: 'Great product! Highly recommended.',image:"https://media.istockphoto.com/id/501619270/photo/apartments.webp?b=1&s=170667a&w=0&k=20&c=9DEFmutQaDPNbYH9UTDS6MAvV-jpPCjHAaj0BNpbHHw=" },
        { id: 5, name: 'Michael Brown', text: 'Outstanding customer support!', image: 'https://media.istockphoto.com/id/1219696611/photo/aerial-shot-of-building-under-construction-with-crane-at-the-top.webp?b=1&s=170667a&w=0&k=20&c=N9BbIH5uM6V9S-xlYXSRUXPR69UtAG_kBkKn0U2RBR0=' },
      ];
    
      return (
        
            
    <div className=" w-3/4 lg:w-1/2 items-center m-auto">
        
        
          <div className="mt-2">
          <Slider {...settings}>
            {testimonials.map(testimonial => (
              <div key={testimonial.id} className=" flex flex-col items-center  p-4 rounded-lg">
                <div className='image w-full bg-red-300 flex justify-center items-center '>
                    <img src={testimonial.image} alt="" className=' w-full  object-cover' />
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

export default WorksweDone