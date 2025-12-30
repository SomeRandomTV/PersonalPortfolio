import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import projectsData from '../data/projects.json'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All Projects')
  const [projects, setProjects] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    setProjects(projectsData)
  }, [])

  const filters = [
    'All Projects',
    'AI/ML',
    'Computer Vision',
    'Image Processing',
    'Tools & Infrastructure',
    'Open Source'
  ]

  const filteredProjects = activeFilter === 'All Projects'
    ? projects
    : projects.filter(project => {
        if (Array.isArray(project.category)) {
          return project.category.includes(activeFilter)
        }
        return project.category === activeFilter
      })

  const getStatusColor = (status) => {
    switch(status.toLowerCase()) {
      case 'active':
        return 'text-green-500 border-green-500'
      case 'archived':
        return 'text-steel border-steel'
      case 'in development':
        return 'text-neural border-neural'
      default:
        return 'text-textMuted border-textMuted'
    }
  }

  return (
    <section id="projects" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header - Luxury Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <h2 className="section-title-luxury bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
            Featured Work
          </h2>
          <p className="mt-6 text-textSecondary max-w-3xl mx-auto font-light leading-relaxed">
            Technical case studies on computer vision systems, image processing pipelines, and AI/ML engineering projects.
          </p>
        </motion.div>

        {/* Filter Bar - Refined */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-wrap gap-4 justify-center"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActiveFilter(filter)}
              transition={{ duration: 0.3 }}
              className={`px-6 py-3 text-xs tracking-luxury-wide uppercase font-light transition-all duration-400 ${
                activeFilter === filter
                  ? 'bg-transparent border border-primary text-primary gold-glow'
                  : 'bg-transparent border border-border text-silver hover:border-primary hover:text-primary'
              }`}
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="luxury-card p-8 cursor-pointer group"
                onClick={() => navigate(`/project/${project.slug}`)}
              >
                {/* Status Badge */}
                {project.status && (
                  <div className="mb-6">
                    <span className={`px-3 py-1.5 text-xs font-light border tracking-luxury-wide uppercase ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>
                )}

                {/* Project Name */}
                <h3 className="text-xl font-light text-textPrimary mb-4 group-hover:text-primary transition-all duration-400 tracking-wide uppercase">
                  {project.name}
                </h3>

                {/* Category */}
                <div className="mb-4">
                  {Array.isArray(project.category) ? (
                    <div className="flex flex-wrap gap-2">
                      {project.category.map((cat, i) => (
                        <span key={i} className="text-xs text-primary font-light tracking-wide">
                          {cat}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <span className="text-xs text-primary font-light tracking-wide">
                      {project.category}
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-textSecondary text-sm mb-6 line-clamp-3 font-light leading-relaxed">
                  {project.description || '[Description to be added]'}
                </p>

                {/* Tech Stack */}
                {project.techStack.length > 0 && (
                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.techStack.map((tech, i) => (
                      <span key={i} className="text-xs text-textMuted font-light tracking-wide">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                {/* View Details  */}
                <div className="mt-8 pt-6 border-t border-border/30 flex items-center justify-between">
                  <span className="text-xs text-primary font-light tracking-luxury-wide uppercase group-hover:text-secondary transition-all duration-400">
                    View Details
                  </span>
                  
                  {/* Links */}
                  <div className="flex gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-textMuted hover:text-primary transition-all duration-400"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* No Projects Message */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-textMuted font-light tracking-wide">
              No projects found in this category
            </p>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default Projects
