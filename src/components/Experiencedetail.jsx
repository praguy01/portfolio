import { useParams, Link } from 'react-router-dom';
import work2 from '../assets/work2.png';
import work3 from '../assets/work3.png';

const experience = [
  {
    id: 1,
    name: 'Frontend Developer',
    description: 'I have designed a Swimlane Activity Diagram and developed the frontend of the Payor Office website. The additional functionalities implemented include Search, Edit, Update, and AutoComplete Additionally, I have two months of internship experience.',
    images: [work3, work2] 
  }
];

const Experiencedetail = () => {
  const { id } = useParams();
    const project = experience.find(p => p.id === parseInt(id));
  
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
          <p className='text-gray-400 text-center md:text-left'>{project.description}</p>
          <div className="flex flex-wrap justify-center gap-4">
            {project.images.map((image, index) => (
              <img key={index} src={image} alt={`${project.name} - ${index + 1}`} 
                className='w-full md:w-[600px] lg:w-[800px] rounded-lg shadow-lg' />
            ))}
          </div>
          <Link to="/" className='mt-4 inline-block text-pink-400 hover:text-blue-500 self-center'>
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Experiencedetail