import React from 'react'
import { Link } from 'react-router-dom';
import bot from '../assets/bot5.jpg'
import car from '../assets/car.jpg'
import pet from '../assets/pet.jpg'
import tutoring from '../assets/s1.png'
import book2 from '../assets/Screenshot 2025-05-07 151255.png';
import map from '../assets/Screenshot 2025-05-07 152745.png';
import airflow from '../assets/airflow.png';


const project =[
  {
    id:1,
    name:'Digital platforms for safety unit v.2 and Line OA',
    description: 'Development of a Workplace Safety Officer Web System with Digital Platform Data Transmission, AI Integration, and Line OA for Report Sharing and Notifications Instead of Web-Based Submission.',
    technologies:['React','Node.js','MySQL'],
    image:bot
  },
  {
    id:2,
    name:'Search system for tutoring resources',
    description: 'Develop a platform for tutoring centers that displays information about the tutoring locations, shows the location on a map, includes sample teaching videos, and provides a sign-up function for enrolling in courses.',
    technologies:['HTML','CSS','JavaScript','MySQL',],
    image:tutoring
  },
  {
    id:3,
    name:'Line-Following Robot',
    description: 'Using the Arduino UNO R3 Microcontroller Board to Build a Line-Following Robot.',
    technologies:['Arduino','IOT'],
    image:car
  },
  {
    id:4,
    name:'Automatic Pet Feeder',
    description: 'Using NodeMCU ESP8266 with Infrared Module to Build an Automatic Pet Feeder with Scheduled Feeding and Real-Time Monitoring via NETPIE and MQTTBox.',
    technologies:['Arduino','MQTT','NETPIE','IOT',],
    image:pet
  },
    {
      id: 5,
      name: 'Book shop',
      description: 'Develop a mini-project to display a book list with cover image, title, author, price, and category.',
      technologies: ['Vue.js', 'Tailwind', 'Node.js'],
      image:book2
    },{
      id: 6,
      name: 'Map hotspots using satellite data.',
      description: 'Develop a mini-project to display hotspots by pulling data from an API and displaying it on a map.',
      technologies: ['React', 'Tailwind','MapLibre '],
      image:map
    },
    {
      id: 7,
      name: 'Weather ETL Pipeline.',
      description: 'Develop an ETL system to automatically fetch hourly weather forecast data from a public API. Cleaned and processed the data before storing it in a PostgreSQL database. The entire workflow was orchestrated and scheduled using Apache Airflow.',
      technologies: ['Python', 'Airflow','PostgreSQL '],
      image:airflow
    }
]

const Project = () => {
  return (
    <div className='bg-black text-white py-20' id='project'>
  <div className='container mx-auto px-8 md:px-16 lg:px-24'>
    <h2 className='text-4xl font-bold text-center mb-12'>Project</h2>
    
    <div className='flex flex-col gap-8'>
      {project.map(project => (
        <div 
          key={project.id} 
          className='bg-gray-900 p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105 flex flex-col md:flex-row items-center gap-6'
        >
          <img 
            src={project.image} 
            alt={project.name} 
            className='w-full md:w-[300px] h-auto cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105'
          />
          <div className='flex flex-col gap-5 flex-1 md:text-left text-center'>
            <div className='flex flex-col gap-3'>
              <div className='text-xl font-semibold text-gray-300'>{project.name}</div>
              <p className='text-gray-400'>{project.description}</p>
            </div>
            
            <div className="flex flex-wrap gap-2 mt-2 justify-center md:justify-start">
              {project.technologies.map((tech, index) => (
                <span key={index} className="bg-gray-700 text-gray-400 px-3 py-1 rounded-full">
                  {tech}
                </span>
              ))}
            </div>
            <Link to ={`/project/${project.id}`} className="inline-flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 
            text-white px-4 py-2 rounded-full self-center md:self-end">Details</Link>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
  )
}

export default Project