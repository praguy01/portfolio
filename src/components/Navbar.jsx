import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-scroll";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  if (location.pathname.startsWith("/project/") || location.pathname.startsWith("/experience/")) {
    return null; 
  }


  return (
    <nav className="bg-black text-white px-6 md:px-16 lg:px-24">
      <div className="container py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">Portfolio</div>

        <button
          className="md:hidden block text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <div className="hidden md:flex space-x-6">
        <Link to="home" smooth={true} duration={500} className="hover:text-pink-400 cursor-pointer">Home</Link>
          <Link to="about" smooth={true} duration={500} className="hover:text-pink-400 cursor-pointer">About</Link>
          <Link to="project" smooth={true} duration={500} className="hover:text-pink-400 cursor-pointer">Project</Link>
          <Link to="experience" smooth={true} duration={500} className="hover:text-pink-400 cursor-pointer">Experience</Link>
          <Link to="contact" smooth={true} duration={500} className="hover:text-pink-400 cursor-pointer">Contact</Link>
        </div>
      </div>

      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 flex flex-col items-center justify-center space-y-6 z-50">
          <button
            className="absolute top-6 right-6 text-white"
            onClick={() => setIsOpen(false)}
          >
            <X size={32} />
          </button>
          <Link to="home" smooth={true} duration={500} className="text-xl hover:text-pink-400" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="about" smooth={true} duration={500} className="text-xl hover:text-pink-400" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="project" smooth={true} duration={500} className="text-xl hover:text-pink-400" onClick={() => setIsOpen(false)}>Project</Link>
          <Link to="experience" smooth={true} duration={500} className="text-xl hover:text-pink-400" onClick={() => setIsOpen(false)}>Experience</Link>
          <Link to="contact" smooth={true} duration={500} className="text-xl hover:text-pink-400" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
