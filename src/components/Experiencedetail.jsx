import { useParams, Link } from "react-router-dom";
import work2 from "../assets/work2.png";
import work3 from "../assets/work3.png";

const experience = [
  {
    id: 1,
    name: "Frontend Developer",
    company: "Intern Programmer, SCAP Solutions Co.,Ltd.",
    details: [
      {
        title: "Doctor Fee",
        description:
          "Developed the frontend of the Payor Office website. Implemented Search, Edit, Update, and AutoComplete using AJAX, jQuery, and Spring Boot.",
      },
      {
        title: "Doctor Portal",
        description: "Designed a Swimlane Activity Diagram.",
      },
    ],
    images: [work3, work2],
  },
];

const Experiencedetail = () => {
  const { id } = useParams();
  const project = experience.find((p) => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="text-white text-center py-20">Project not found</div>
    );
  }

  return (
    <div className="bg-black text-white py-20">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
            {project.name}
          </h2>
          <p className="text-gray-300 text-lg mt-2">{project.company}</p>
        </div>

        {/* Details with Images */}
        <div className="space-y-10 pl-6">
          {project.details.map((detail, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-xl font-semibold text-pink-400 hover:underline ">
                {detail.title}
              </h3>
              <p className="text-gray-300">{detail.description}</p>
              {/* Show corresponding image below each section */}
              <img
                src={project.images[index]}
                alt={`${project.name} - ${detail.title}`}
                className="w-full rounded-lg shadow-lg transition-transform hover:scale-105 "
              />
            </div>
          ))}
        </div>

        {/* Back Button */}
        <div className="text-center mt-10">
          <Link
            to="/"
            className="inline-block text-pink-400 hover:text-blue-500 text-lg font-medium transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Experiencedetail;
