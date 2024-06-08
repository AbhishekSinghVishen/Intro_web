

import React, { useEffect, useRef } from 'react';
import videoSrc from '../assets/main_video.mp4';

const Video = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const playVideo = () => {
      if (videoRef.current) {
        videoRef.current.play()
          .catch(error => {
            // Autoplay was prevented, handle it here
            console.error('Autoplay was prevented:', error);
          });
      }
    };

    // Start playing the video when the component mounts
    playVideo();

    // Cleanup: Pause the video when the component unmounts
    return () => {
      if (videoRef.current) {
        videoRef.current.pause();
      }
    };
  }, []);

  return (
    <div className=' w-full relative h-[40%] '>
      <video ref={videoRef} className='w-full h-full' loop autoPlay muted>
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      <div className='absolute inset-0 flex flex-col justify-center items-center text-center  '>
      <h1 className='text-2xl lg:text-3xl font-extrabold text-purple-800' >Welcome to Barbrik</h1>
      <p className='lg:text-xl font-bold'>Your one stop destiny!!</p>
      </div>
     
    </div>
  );
}

export default Video;
