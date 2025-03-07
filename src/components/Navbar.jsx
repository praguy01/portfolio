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
        <Link to="home" smooth={true} duration={500} className="relative group hover:text-pink-400 cursor-pointer">Home<span className="absolute left-0 bottom-0 w-0 h-[2px] bg-pink-400 transition-all duration-300 group-hover:w-full"></span></Link>
          <Link to="about" smooth={true} duration={500} className="relative group hover:text-pink-400 cursor-pointer">About<span className="absolute left-0 bottom-0 w-0 h-[2px] bg-pink-400 transition-all duration-300 group-hover:w-full"></span></Link>
          <Link to="project" smooth={true} duration={500} className="relative group hover:text-pink-400 cursor-pointer">Project<span className="absolute left-0 bottom-0 w-0 h-[2px] bg-pink-400 transition-all duration-300 group-hover:w-full"></span></Link>
          <Link to="experience" smooth={true} duration={500} className="relative group hover:text-pink-400 cursor-pointer">Experience<span className="absolute left-0 bottom-0 w-0 h-[2px] bg-pink-400 transition-all duration-300 group-hover:w-full"></span></Link>
          <Link to="contact" smooth={true} duration={500} className="relative group hover:text-pink-400 cursor-pointer">Contact<span className="absolute left-0 bottom-0 w-0 h-[2px] bg-pink-400 transition-all duration-300 group-hover:w-full"></span></Link>
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
          <Link to="home" smooth={true} duration={500} className="relative group text-xl hover:text-pink-400 cursor-pointer" onClick={() => setIsOpen(false)}>Home<span className="absolute left-0 bottom-0 w-0 h-[2px] bg-pink-400 transition-all duration-300 group-hover:w-full"></span></Link>
          <Link to="about" smooth={true} duration={500} className="relative group text-xl hover:text-pink-400 cursor-pointer" onClick={() => setIsOpen(false)}>About<span className="absolute left-0 bottom-0 w-0 h-[2px] bg-pink-400 transition-all duration-300 group-hover:w-full"></span></Link>
          <Link to="project" smooth={true} duration={500} className="relative group text-xl hover:text-pink-400 cursor-pointer" onClick={() => setIsOpen(false)}>Project<span className="absolute left-0 bottom-0 w-0 h-[2px] bg-pink-400 transition-all duration-300 group-hover:w-full"></span></Link>
          <Link to="experience" smooth={true} duration={500} className="relative group text-xl hover:text-pink-400 cursor-pointer" onClick={() => setIsOpen(false)}>Experience<span className="absolute left-0 bottom-0 w-0 h-[2px] bg-pink-400 transition-all duration-300 group-hover:w-full"></span></Link>
          <Link to="contact" smooth={true} duration={500} className="relative group text-xl hover:text-pink-400 cursor-pointer" onClick={() => setIsOpen(false)}>Contact<span className="absolute left-0 bottom-0 w-0 h-[2px] bg-pink-400 transition-all duration-300 group-hover:w-full"></span></Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
