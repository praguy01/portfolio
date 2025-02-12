import React from 'react'
import Clogo from '../assets/c_logo.png'
import Csslogo from '../assets/pngwing.png'
import reactlogo from '../assets/reactlogo.png'
import htmllogo from '../assets/html_icon.png'
import jslogo from '../assets/js_logo.png'
import mysqllogo from '../assets/mysql.png'
import sqllogo from '../assets/sql.jpg'
import javalogo from '../assets/java_logo.png'
import pythonlogo from '../assets/python_icon.png'
import mqttlogo from '../assets/mqtt.jpg'


const about = () => {
  return (
    <div className='bg-black text-white py-20' id='about'>
      <div className='container mx-auto px-8 md:px-16 lg:px-24'>
        <h2 className='text-4xl font-bold text-center mb-12'>About Me</h2>
        <div className='flex-1'>
          <p className='text-lg mb-8'>I am a <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 font-semibold"> highly responsible and adaptable</span> individual who is always eager to learn new technologies 
          and improve my skills. I look forward to working in a dynamic environment where I can contribute my knowledge and <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 font-semibold"> grow as a professional.</span></p>
          </div>
           
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
          <p className='text-lg font-semibold mb-4 text-center'>Frontend</p>
          <div className="flex justify-center gap-4 flex-wrap">
            <img src={reactlogo} alt="React" className="w-12 h-12 object-contain"/>
            <img src={Csslogo} alt="CSS" className="w-12 h-12 object-contain"/>
            <img src={htmllogo} alt="HTML" className="w-12 h-12 object-contain"/>
            <img src={jslogo} alt="JavaScript" className="w-12 h-12 object-contain"/>
          </div>
        </div>
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
          <p className='text-lg font-semibold mb-4 text-center'>Backend</p>
          <div className="flex justify-center gap-4 flex-wrap">
            <img src={javalogo} alt="Java" className="w-12 h-12 object-contain"/>
            <img src={pythonlogo} alt="Python" className="w-12 h-12 object-contain"/>
            <img src={Clogo} alt="C" className="w-12 h-12 object-contain"/>
            <img src={mysqllogo} alt="MySQL" className="w-12 h-12 object-contain"/>
            <img src={sqllogo} alt="SQL" className="w-12 h-12 object-contain"/>
            <img src={mqttlogo} alt="MQTT" className="w-12 h-12 object-contain"/>
          </div>
        </div>
    </div>
    

  </div>
</div>
  )
}

export default about