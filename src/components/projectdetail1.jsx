import { useParams, Link } from 'react-router-dom';
import bot7 from '../assets/bot7.png';
import bot9 from '../assets/bot9.png';
import car4 from '../assets/car4.png';
import car3 from '../assets/car3.jpg';
import netpie from '../assets/netpie.png';
import pet1 from '../assets/pet1.png';
import pet2 from '../assets/pet2.png';
import s2 from '../assets/s2.png';
import s3 from '../assets/s3.png';
import s4 from '../assets/s4.png';
import bot from '../assets/bot.png';
import form1 from '../assets/form1.jpg';
import book1 from '../assets/Screenshot 2025-05-07 151223.png';
import book2 from '../assets/Screenshot 2025-05-07 151255.png';
import map from '../assets/Screenshot 2025-05-07 152745.png';
import map2 from '../assets/Screenshot 2025-05-07 153748.png';
import db from '../assets/db.png';
import airflow from '../assets/airflow.png';



const projects = [
  {
    id: 1,
    name: "Digital platforms for safety unit v.2 and Line OA",
    description: "This project focuses on developing a web system for workplace safety officers, integrating AI and Line OA to enhance report sharing and notifications, replacing traditional web-based submissions.",
    details: [
      {
        title: "Website",
        description: "AI Integration : Utilized the Gemini API for document analysis, assisting in generating and analyzing monthly reports.",
        images: [bot9, form1]
      },
      {
        title: "Line OA",
        description: "Designed to function similarly to the web system, with a notification feature to alert employees in case of accidents. Additionally, a rich menu has been implemented to enhance usability and accessibility.",
        images: [bot7, bot]
      }
    ]
  },
  {
    id: 2,
    name: 'Search system for tutoring resources',
    description: 'Develop a platform for tutoring centers that displays information about the tutoring locations, shows the location on a map, includes sample teaching videos, and provides a sign-up function for enrolling in courses.',
    technologies: ['Arduino', 'IOT'],
    images: [s4, s3, s2]
  },
  {
    id: 3,
    name: 'Line-Following Robot',
    description: 'Using the Arduino UNO R3 Microcontroller Board to Build a Line-Following Robot.',
    technologies: ['Arduino', 'IOT'],
    images: [car4, car3]
  },
  {
    id: 4,
    name: 'Automatic Pet Feeder',
    description: 'Using NodeMCU ESP8266 with Infrared Module to Build an Automatic Pet Feeder with Scheduled Feeding and Real-Time Monitoring via NETPIE and MQTTBox.',
    technologies: ['Arduino', 'MQTT', 'NETPIE', 'IOT'],
    images: [netpie, pet2, pet1]
  },
  {
    id: 5,
    name: 'Book shop',
    description: 'Develop a mini-project to display a book list with cover image, title, author, price, and category.',
    technologies: ['vue.js', 'tailwind', 'node.js'],
    images: [book2,book1]
  },
  {
        id: 6,
        name: 'Map hotspots using satellite data',
        description: 'Develop a mini-project to display hotspots by pulling data from an API and displaying it on a map.',
        technologies: ['React', 'Tailwind','MapLibre '],
        images:[map,map2]
      },
       {
            id: 7,
            name: 'Weather ETL Pipeline',
            description: 'Implemented a daily ETL pipeline using Apache Airflow to fetch hourly temperature data from the Open-Meteo API, transform and clean the data, and store it in PostgreSQL using ON CONFLICT DO NOTHING to avoid duplication.',
            technologies: ['Python', 'Airflow','PostgreSQL '],
            images:[airflow,db]
          }
];

const ProjectDetail1 = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id));

  if (!project) {
    return <div className="text-white text-center py-20">Project not found</div>;
  }

  return (
    <div className='bg-black text-white py-20'>
      <div className='container mx-auto px-8 md:px-16 lg:px-24'>
        <div className='flex flex-col gap-8'>
          <h2 className='text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 text-center'>
            {project.name}
          </h2>
          <p className='text-gray-300 text-lg mt-2'>{project.description}</p>
          
          {project.details ? (
            project.details.map((detail, index) => (
              <div key={index} className='space-y-4'>
                <h3 className='text-xl font-semibold text-pink-400 hover:underline'>{detail.title}</h3>
                <p className='text-gray-300'>{detail.description}</p>
                <div className='space-y-8 pl-6'>
                  {detail.images.map((image, imgIndex) => (
                    <img key={imgIndex} src={image} alt={`${detail.title} - ${imgIndex + 1}`} 
                      className='w-full rounded-lg shadow-lg transition-transform hover:scale-105' />
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className='flex flex-wrap justify-center gap-4 mt-4'>
              {project.images.map((image, index) => (
                <img key={index} src={image} alt={`${project.name} - ${index + 1}`} 
                  className='w-full rounded-lg shadow-lg transition-transform hover:scale-105' />
              ))}
            </div>
          )}
          
          <Link to="/" className='inline-block text-pink-400 hover:text-blue-500 text-lg font-medium transition-colors'>
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail1;