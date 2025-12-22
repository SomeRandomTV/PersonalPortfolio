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

function App() {
  return (
    <div className="min-h-screen bg-background">
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
        <Route path="/project/:slug" element={<ProjectDetail />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
