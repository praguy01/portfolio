import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Project from './components/Project'
import Experience from './components/Experience'
import ProjectDetail1 from './components/projectdetail1'
import Experiencedetail from './components/Experiencedetail'
import Contact from './components/Contact'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <About />
            <Project />
            <Experience />
            <Contact />
          </>
        } />
        <Route path="/project/:id" element={<ProjectDetail1 />} />
        <Route path="/experience/:id" element={<Experiencedetail />} />
      </Routes>
    </Router>
  );
}

export default App
