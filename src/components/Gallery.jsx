import React from 'react';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import image4 from '../assets/image4.jpg';
import image5 from '../assets/image5.jpg';
import image6 from '../assets/image6.jpg';
import image7 from '../assets/image7.jpg';
import image8 from '../assets/image8.jpg';
import image9 from '../assets/image9.jpg';
import image10 from '../assets/image10.jpg';
import image11 from '../assets/image11.jpg';
import image12 from '../assets/image12.jpg';
const Gallery = () => {
  // Dummy image data
  const images = [
    { id: 1, src: image1, alt: 'Image 1' },
    { id: 2, src: image2, alt: 'Image2' },
    { id: 3, src: image3, alt: 'Image3' },

    { id: 4, src: image4, alt: 'Image 4' },
    { id: 5, src: image5, alt: 'Image 5' },
    { id: 6, src: image6, alt: 'Image 6' },
    { id: 7, src: image7, alt: 'Image 7' },
    { id: 8, src: image8, alt: 'Image 8' },
    { id: 9, src: image9, alt: 'Image 9' },
    { id: 10, src: image10, alt: 'Image 10' },
    { id: 11, src: image11, alt: 'Image 11' },
    { id: 12, src: image12, alt: 'Image 12' },
    // Add more images as needed
  ];

  return (
    <div className='flex flex-col items-center mt-8 mx-2' >
        <h1 className='lg:text-3xl text-2xl font-extrabold mt-10 text-gray-800'>Gallery</h1>
        <div className='w-10 border-b-2 border-green-400 rounded-md mt-1 mb-4'></div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {images.map(image => (
        <div key={image.id} className="overflow-hidden rounded-lg shadow-md">
          <img src={image.src} alt={image.alt} className="w-full h-auto" />
        </div>
      ))}
    </div>
    </div>
    
  );
}

export default Gallery;
