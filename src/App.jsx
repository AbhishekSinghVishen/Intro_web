import React from 'react'
import Navbar from './components/Navbar'
import Video from './components/Video'
import About from './components/About'
import Md from './components/Md'
import Testimonials from './components/Testimonials'
import Gallery from './components/Gallery'
import WhyUs from './components/WhyUs'
import Test from './components/Test'
import Testimonialsd from './components/Testimonialsd'
import ProjectCompleted from './components/ProjectCompleted'
import ProjectCompletedd from './components/ProjectCompletedd'
import WorksweDone from './components/WorksweDone'
import WorksweDoned from './components/WorksweDoned'
import Footer from './components/Footer'
import { ContactUs } from './components/ContactUs'

const App = () => {
  return (
    <div className='overflow-x-hidden  antialiased selection:bg-cyan-300 selection:text-cyan-900'>
      <div className='fixed top-0 -z-10 h-full w-full'>
      <div className="absolute top-0 z-[-2] h-screen w-screen 
      bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(
        255,255,255,0))]"></div>
      </div>
      <div className='container bg-sky-500/[.06] ... mx-auto'>
        <Navbar/>
        <Video/>
        <About/>
        <Md/>
       
        <Test/>
      <WhyUs/>
      <WorksweDoned/>
      < WorksweDone/>
      <hr />
      <ProjectCompletedd/>
      <ProjectCompleted/>
      <Testimonialsd/>
      <Testimonials/>
      <Gallery/>
      <div className='mt-4  w-full h-[600px] flex flex-col justify-center'>
        <h1 className=' text-center text-3xl font-extrabold mt-10 text-gray-800'>Contact Us</h1>
      <ContactUs/>
      </div>
      
     <Footer/>
      
      
      
      </div>
     
    </div>
  )
}

export default App