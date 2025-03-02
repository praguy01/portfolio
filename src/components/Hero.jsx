import React from 'react'
import { motion } from 'framer-motion'
import HeroImage from '../assets/14304.jpg'

const Hero = () => {
  return (
    <div className='bg-black text-white text-center py-16'>
    <img 
        src={HeroImage} 
        alt='' 
        className='mx-auto mb-8 w-64 h-64 rounded-full object-cover transform 
        transition-transform duration-300 hover:scale-105'/>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center">
                  I'm{" "}
                  <motion.span 
                    className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 inline-block"
                    initial={{ x: -100, opacity: 0 }} 
                    animate={{ x: 0, opacity: 1 }} 
                    transition={{ duration: 1, ease: "easeOut" }}
                  >
                    Prakaikan Rittitis
                  </motion.span>
                </h1>
                
            <p className="mt-4 text-base sm:text-lg text-gray-300 text-center px-6 sm:px-8 md:px-0 max-w-[95%] sm:max-w-[80%] md:max-w-[60%] leading-normal sm:leading-relaxed mx-auto">
            I graduated with a <span className="font-semibold text-white">Bachelor's degree in Computer Engineering</span> from Naresuan University. 
            I am passionate about software development, with a keen interest in becoming a 
            <span className="text-fuchsia-400 font-semibold"> Software Engineer</span>,  
            <span className="text-pink-400 font-semibold"> Programmer</span>, or  
            <span className="text-rose-400 font-semibold"> Frontend Developer</span>.  
            </p>
         <div className='mt-8'>
            <a 
                href="/portfolio/resume_prakaikan_rittitis.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className='bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full transform transition-transform duration-300 hover:scale-105'>Resume</a>
         </div>
</div>

  )
}

export default Hero