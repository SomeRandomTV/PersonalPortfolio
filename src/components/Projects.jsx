import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import projectsData from '../data/projects.json'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All Projects')
  const [projects, setProjects] = useState([])

  useEffect(() => {
    setProjects(projectsData)
  }, [])

  const filters = [
    'All Projects',
    'AI/ML',
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
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-textPrimary mb-4">
            Projects <span className="text-primary">/ Case Files</span>
          </h2>
          <div className="h-1 w-24 bg-primary neural-glow" />
          <p className="mt-6 text-textSecondary max-w-3xl">
            Intelligence-grade technical briefings on AI systems, cybersecurity infrastructure, and engineering projects.
          </p>
        </motion.div>

        {/* Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 flex flex-wrap gap-3"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded font-mono text-sm transition-all duration-200 ${
                activeFilter === filter
                  ? 'bg-primary text-textPrimary border border-primary neural-glow'
                  : 'bg-card text-textSecondary border border-border hover:border-primary hover:text-textPrimary'
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
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, boxShadow: '0 0 30px rgba(193, 18, 31, 0.2)' }}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-all duration-300 cursor-pointer group"
              >
                {/* Status Badge */}
                {project.status && (
                  <div className="mb-4">
                    <span className={`px-2 py-1 text-xs font-mono border rounded ${getStatusColor(project.status)}`}>
                      [{project.status.toUpperCase()}]
                    </span>
                  </div>
                )}

                {/* Project Name */}
                <h3 className="text-xl font-bold text-textPrimary mb-3 group-hover:text-primary transition-colors">
                  {project.name}
                </h3>

                {/* Category */}
                <div className="mb-3">
                  {Array.isArray(project.category) ? (
                    <div className="flex flex-wrap gap-2">
                      {project.category.map((cat, i) => (
                        <span key={i} className="text-xs text-primary font-mono">
                          {cat}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <span className="text-xs text-primary font-mono">
                      {project.category}
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-textSecondary text-sm mb-4 line-clamp-3">
                  {project.description || '[Description to be added]'}
                </p>

                {/* Tech Stack */}
                {project.techStack.length > 0 && (
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.techStack.map((tech, i) => (
                      <span key={i} className="text-xs text-textMuted font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                {/* View Details Button */}
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-sm text-primary font-mono group-hover:underline">
                    View Details →
                  </span>
                  
                  {/* Links */}
                  <div className="flex gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-textMuted hover:text-primary transition-colors"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
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
            <p className="text-textMuted font-mono">
              [NO PROJECTS FOUND IN THIS CATEGORY]
            </p>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default Projects
