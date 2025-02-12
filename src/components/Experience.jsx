import React from 'react'
import { useParams, Link } from 'react-router-dom';
import work from '../assets/work.png'


const experience =[
  {
    id:1,
    name:'Frontend Developer',
    description: 'Designed a Swimlane Activity Diagram and developed the frontend of the Payor Office website. Implemented additional functionalities, including search, edit, update, and autocomplete.',
    technologies:['Java','HTML','CSS','SSMS'],
    image:work
  }
]

const Experience = () => {
  return (
    <div className='bg-black text-white py-20' id='experience'>
  <div className='container mx-auto px-8 md:px-16 lg:px-24'>
    <h2 className='text-4xl font-bold text-center mb-12'>Experience</h2>
    
    <div className='flex flex-col gap-8'>
      {experience.map(experience => (
        <div 
          key={experience.id} 
          className='bg-gray-900 p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105 flex flex-col md:flex-row items-center gap-6'
        >
          <img 
            src={experience.image} 
            alt={experience.name} 
            className='w-full md:w-[300px] h-auto cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105'
          />
          <div className='flex flex-col gap-5 flex-1 md:text-left text-center'>
            <div className='flex flex-col gap-3'>
              <div className='text-xl font-semibold text-gray-300'>{experience.name}</div>
              <p className='text-gray-400'>{experience.description}</p>
            </div>
            
            <div className="flex flex-wrap gap-2 mt-2 justify-center md:justify-start">
              {experience.technologies.map((tech, index) => (
                <span key={index} className="bg-gray-700 text-gray-400 px-3 py-1 rounded-full">
                  {tech}
                </span>
              ))}
            </div>
            <Link  to ={`/experience/${experience.id}`}  className="inline-flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full self-center md:self-end">Details</Link>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
  )
}

export default Experience