import { motion } from 'framer-motion'
import miniProjectsData from '../data/miniProjects.json'

const MiniProjects = () => {
  const miniProjects = miniProjectsData

  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case 'completed':
        return 'border-green-500/50 text-green-400'
      case 'active':
        return 'border-primary/50 text-primary'
      case 'early stages':
        return 'border-yellow-500/50 text-yellow-400'
      default:
        return 'border-border text-textMuted'
    }
  }

  return (
    <section id="mini-projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="inline-block mb-4">
            <span className="text-primary font-mono text-sm">
              [ UTILITIES & TOOLS ]
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-textPrimary mb-6">
            Mini Projects
          </h2>
          <p className="text-textSecondary text-lg max-w-2xl mx-auto">
            Smaller tools and utilities built for learning and experimentation
          </p>
        </motion.div>

        {/* Mini Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {miniProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -3, boxShadow: '0 0 20px rgba(255, 215, 0, 0.1)' }}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300 cursor-pointer group"
            >
              {/* Header with Status */}
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-textPrimary group-hover:text-primary transition-colors">
                  {project.name}
                </h3>
                {project.status && (
                  <span className={`px-2 py-1 text-xs font-mono border rounded whitespace-nowrap ${getStatusColor(project.status)}`}>
                    [{project.status.toUpperCase()}]
                  </span>
                )}
              </div>

              {/* Category */}
              <div className="mb-3">
                <span className="text-xs text-primary font-mono">
                  {project.category}
                </span>
              </div>

              {/* Description */}
              <p className="text-textSecondary text-sm mb-4 line-clamp-2">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-background border border-border rounded text-xs text-textMuted font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-4 text-sm">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-textMuted hover:text-primary transition-colors flex items-center gap-1"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span className="font-mono">{'>'}</span> GitHub
                  </a>
                )}
                {project.detailRoute ? (
                  <a
                    href={project.detailRoute}
                    className="text-textMuted hover:text-primary transition-colors font-mono"
                    onClick={e => e.stopPropagation()}
                  >
                    {'>'} View Details
                  </a>
                ) : (
                  <span className="text-textMuted hover:text-primary transition-colors font-mono">
                    {'>'} View Details
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Optional: More Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-textMuted font-mono text-sm">
            [ MORE TOOLS COMING SOON ]
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default MiniProjects
