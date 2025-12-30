import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useParams, useNavigate } from 'react-router-dom'
import projectsData from '../data/projects.json'
import projectDetails from '../data/projectDetails.json'

const ProjectDetail = () => {
  const { slug } = useParams()
  const navigate = useNavigate()
  const [project, setProject] = useState(null)
  const [details, setDetails] = useState(null)

  useEffect(() => {
    const foundProject = projectsData.find(p => p.slug === slug)
    setProject(foundProject)
    if (slug && projectDetails[slug]) {
      setDetails(projectDetails[slug])
    }
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0)
  }, [slug])

  if (!project || !details) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center pt-24">
        <p className="text-textMuted font-mono">[PROJECT NOT FOUND]</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      <div className="container mx-auto px-6 max-w-5xl">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate('/#projects')}
          className="mb-8 flex items-center gap-2 text-textSecondary hover:text-primary transition-colors font-mono"
        >
          <span>←</span> Back to Projects
        </motion.button>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-textPrimary mb-4">
                {project.name}
              </h1>
              {project.status && (
                <span className="px-3 py-1 text-xs font-mono border border-primary text-primary rounded">
                  [{project.status.toUpperCase()}]
                </span>
              )}
            </div>
          </div>
          
          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-6">
            {(Array.isArray(project.category) ? project.category : [project.category]).map((cat, i) => (
              <span key={i} className="px-3 py-1 bg-card border border-border text-primary text-sm font-mono rounded">
                {cat}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-4">
            {details.links?.github && (
              <a
                href={details.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-card border border-border hover:border-primary text-textSecondary hover:text-primary transition-colors rounded font-mono text-sm"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                GitHub
              </a>
            )}
            {details.links?.demo && (
              <a
                href={details.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-secondary text-textPrimary transition-colors rounded font-mono text-sm"
              >
                Live Demo →
              </a>
            )}
          </div>
        </motion.div>

        {/* Overview */}
        <Section title="Overview">
          <p className="text-textSecondary leading-relaxed">{details.overview}</p>
        </Section>

        {/* Problem & Motivation */}
        <Section title="Problem / Motivation">
          <div className="space-y-4">
            <div>
              <h4 className="text-primary font-mono text-sm mb-2">THE PROBLEM</h4>
              <p className="text-textSecondary leading-relaxed">{details.problem}</p>
            </div>
            <div>
              <h4 className="text-primary font-mono text-sm mb-2">MOTIVATION</h4>
              <p className="text-textSecondary leading-relaxed">{details.motivation}</p>
            </div>
          </div>
        </Section>

        {/* Technical Architecture */}
        <Section title="Technical Architecture">
          <p className="text-textSecondary leading-relaxed mb-6">{details.architecture.description}</p>
          <div className="bg-card border border-border rounded-lg p-6">
            <h4 className="text-textPrimary font-mono text-sm mb-4">CORE COMPONENTS</h4>
            <div className="space-y-3">
              {details.architecture.components.map((component, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-primary mt-1">▸</span>
                  <span className="text-textSecondary">{component}</span>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Key Features */}
        <Section title="Key Features">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {details.keyFeatures.map((feature, i) => (
              <motion.div
                key={i}
                whileHover={{ x: 5 }}
                className="flex items-start gap-3 bg-card border border-border rounded-lg p-4 hover:border-primary transition-colors"
              >
                <span className="text-primary text-xl">✓</span>
                <span className="text-textSecondary text-sm">{feature}</span>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Technologies Used */}
        <Section title="Technologies Used">
          <div className="flex flex-wrap gap-3">
            {details.technologies.map((tech, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-card border border-primary/30 text-textSecondary rounded hover:border-primary transition-colors font-mono text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </Section>

        {/* Challenges & Solutions */}
        <Section title="Challenges & Solutions">
          <div className="space-y-6">
            {details.challenges.map((item, i) => (
              <div key={i} className="bg-card border border-border rounded-lg p-6">
                <h4 className="text-neural font-semibold mb-2">⚠ {item.challenge}</h4>
                <p className="text-textSecondary leading-relaxed">
                  <span className="text-primary font-mono">→</span> {item.solution}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* Screenshots */}
        {details.screenshots && details.screenshots.length > 0 && (
          <Section title="Screenshots / Demo">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {details.screenshots.map((screenshot, i) => (
                <img
                  key={i}
                  src={screenshot}
                  alt={`${project.name} screenshot ${i + 1}`}
                  className="w-full rounded-lg border border-border hover:border-primary transition-colors"
                />
              ))}
            </div>
          </Section>
        )}
      </div>
    </div>
  )
}

const Section = ({ title, children }) => (
  <motion.section
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="mb-12"
  >
    <h2 className="text-2xl md:text-3xl font-bold text-textPrimary mb-6">
      <span className="animated-gradient font-mono">[{title.toUpperCase()}]</span>
    </h2>
    {children}
  </motion.section>
)

export default ProjectDetail
