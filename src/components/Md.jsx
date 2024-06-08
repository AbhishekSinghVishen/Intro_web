import React from 'react'
import { HERO_CONTENT } from '../constants'
import Director from '../assets/Director.jpeg'
import {motion} from 'framer-motion'

const container=(delay)=>({
    hidden: {x:-100, opacity:0},
    visible:{
        x:0,
        opacity:1,
        transition:{
            duration: 0.5,
            delay:delay
        }
    },
});
const Md = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
    <div className='flex flex-wrap'>
        <div className='w-full  lg:w-1/2'>
            <div className='flex flex-col items-center lg-items-start'>
                <motion.h1 
                variants={container(0)}
                initial='hidden'
                animate='visible'
                 className=' text-4xl  tracking-tight mt-4 lg:mt-16 lg:text-7xl tracking-tighter'>Rakesh Kumar</motion.h1>
                <motion.span 
                  variants={container(0.5)}
                  initial='hidden'
                  animate='visible'
                className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-sm lg:text-2xl tracking-tight text-transparent'>CEO MD</motion.span>
                <motion.p 
                variants={container(2)}
                initial='hidden'
                animate='visible'
                className='mx-6 text-lg text-justify mt-6 text-gray-700 leading-relaxed' >{HERO_CONTENT}</motion.p>
            </div>
        </div>
        <div className='w-full  lg:w-1/2 lg:p-8 lg:mt-12'>
            <div className='flex w-full h-[60vh]  justify-center'>
                <motion.img 
                initial={{x:100, opacity:0}} 
                animate={{x:0, opacity:1}}
                transition={{duration:1, delay: 1.2}}
                className='rounded-md object-cover' src={Director} alt="" />
            </div>
        </div>
    </div>
    </div>
  )
}

export default Md