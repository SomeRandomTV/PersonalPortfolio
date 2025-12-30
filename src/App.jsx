import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import MiniProjects from './components/MiniProjects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ProjectDetail from './components/ProjectDetail'
import EidosDetail from './components/EidosDetail'
import TryEverythingNetDetail from './components/TryEverythingNetDetail'
import AxiomDetail from './components/AxiomDetail'
import ExperienceDetail from './components/ExperienceDetail'
import EducationDetail from './components/EducationDetail'

function App() {
  return (
    <div className="min-h-screen bg-background">
      {/* Sophisticated Background Pattern */}
      <div className="luxury-bg-pattern" />
      <Header />
      <Routes>
        <Route path="/" element={
          <main>
            <Hero />
            <About />
            <Projects />
            <MiniProjects />
            <Contact />
          </main>
        } />
        <Route path="/project/eidos" element={<EidosDetail />} />
        <Route path="/project/try-everything-net" element={<TryEverythingNetDetail />} />
        <Route path="/project/axiom" element={<AxiomDetail />} />
        <Route path="/experience" element={<ExperienceDetail />} />
        <Route path="/education" element={<EducationDetail />} />
        <Route path="/project/:slug" element={<ProjectDetail />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
