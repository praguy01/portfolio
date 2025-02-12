import React from 'react'
import { FaEnvelope, FaPhone,FaFacebook,FaInstagram,FaGithub, FaLinkedin } from 'react-icons/fa'

const Contact = () => {
  return (
   <div className='bg-black text-white py-20' id='contact'>
        <div className='container mx-auto px-8 md:px-16 lg:px-24'>
          <h2 className='text-4xl font-bold text-center mb-12'>Contact</h2>


                    <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-2xl">
              <div className="bg-gray-900 p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 
                  flex items-center justify-center h-[80px]">
                <div className='flex items-center gap-2'>
                  <FaPhone className='text-pink-500' />
                  <span>(+66) 096-635-0708</span>
                </div> 
              </div>

              <div className="bg-gray-900 p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 
                  flex items-center justify-center h-[80px]">
                <div className='flex items-center gap-2'>
                  <FaEnvelope className='text-pink-500' />
                  <a href="mailto:prakaikan.rt@gmail.com" className='hover:underline'>
                    prakaikan.rt@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

            <div className='flex justify-center gap-x-6 mt-6'>
            <a href="https://www.linkedin.com/in/prakaikan-rittitis-b80186350" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-700">
                <FaLinkedin className='text-2xl' />
            </a>
            <a href="https://www.facebook.com/share/15n4kKNoom/" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-700">
                <FaFacebook className='text-2xl' />
            </a>
            <a href="https://www.instagram.com/_prakaikan?igsh=MTJnZzZmYXljeGV6cg==" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-700">
                <FaInstagram className='text-2xl' />
            </a>
            <a href="https://github.com/praguy01" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-700">
                <FaGithub className='text-2xl' />
            </a>
          </div>
    </div>
  </div>
    )
  }

export default Contact