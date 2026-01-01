import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import experienceData from '../data/experience.json'
import KoiLayer from './KoiLayer'

const ExperienceDetail = () => {
  const navigate = useNavigate()

  const exp = experienceData
  // Defensive: ensure overview is always an array
  const overviewArr = Array.isArray(exp.overview)
    ? exp.overview
    : typeof exp.overview === 'string' && exp.overview
      ? [exp.overview]
      : [];

  console.log('Experience data:', exp)

  if (!exp) {
    return <div className="min-h-screen bg-background pt-24 pb-20 text-textPrimary">Loading...</div>
  }

  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      <div className="container mx-auto px-6 max-w-7xl">

        {/* Koi overlay for experience page (fixed layer) */}
        <KoiLayer />
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate('/#about')}
          className="mb-8 flex items-center gap-2 text-textSecondary hover:text-primary transition-colors font-light"
        >
          <span>←</span> Back to About
        </motion.button>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <h1 className="text-5xl md:text-6xl font-light text-textPrimary mb-6 tracking-tight">
            Professional Experience
          </h1>
          
          <p className="text-xl text-textSecondary max-w-3xl mx-auto font-light leading-relaxed">
            Building intelligent systems at the intersection of research and production
          </p>
        </motion.div>

        {/* Main Experience Section */}
        <Section title={exp.position.toUpperCase()}>
          <div data-koi-occluder className="luxury-card p-8">
            {/* Company Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 pb-6 border-b border-border/30">
              <div>
                <h3 className="text-2xl font-light text-primary mb-2">{exp.company}</h3>
                <p className="text-textMuted font-light">{exp.location}</p>
              </div>
              <div className="text-textSecondary font-light mt-2 md:mt-0">
                {exp.period}
              </div>
            </div>

              {/* Images (if provided) */}
              {exp.images && exp.images.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {exp.images.map((img, idx) => (
                    <motion.div key={idx} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="w-full">
                      <img
                        src={img.src}
                        alt={img.alt || ''}
                        loading="lazy"
                        className="w-full h-40 md:h-56 object-cover rounded"
                      />
                      {img.caption && <p className="text-textMuted text-sm mt-2">{img.caption}</p>}
                    </motion.div>
                  ))}
                </div>
              )}

            {/* Overview */}
            <div className="space-y-3 mb-8">
              {overviewArr.map((paragraph, i) => (
                <p key={i} className={`text-textSecondary font-light leading-relaxed ${paragraph.startsWith('NOTE:') ? 'text-textMuted italic text-sm' : ''}`}>
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Responsibilities */}
            <h4 className="text-primary text-lg font-light mb-6 tracking-wide uppercase">Key Responsibilities</h4>
            <div className="grid md:grid-cols-2 gap-6 mb-10">
              {exp.responsibilities.map((resp, i) => (
                <ResponsibilityCard
                  key={i}
                  icon={resp.icon}
                  title={resp.title}
                  description={resp.description}
                />
              ))}
            </div>

            {/* Technologies */}
            <h4 className="text-primary text-lg font-light mb-6 tracking-wide uppercase">Technologies & Tools</h4>
            <div className="flex flex-wrap gap-3 mb-10">
              {exp.technologies.map((tech) => (
                <motion.span
                  key={tech}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-4 py-2 border border-secondary/30 text-secondary text-sm font-light hover:border-secondary/60 transition-colors cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </div>

            {/* Key Achievements */}
            <h4 className="text-primary text-lg font-light mb-6 tracking-wide uppercase">Key Achievements</h4>
            <div className="space-y-4">
              {exp.achievements.map((achievement, i) => (
                <Achievement
                  key={i}
                  metric={achievement.metric}
                  description={achievement.description}
                />
              ))}
            </div>
          </div>
        </Section>

        {/* Skills Developed */}
        <Section title="SKILLS DEVELOPED">
          <div className="grid md:grid-cols-3 gap-6">
            {exp.skillsDeveloped.map((skillGroup, i) => (
              <SkillCard
                key={i}
                icon={skillGroup.icon}
                title={skillGroup.title}
                skills={skillGroup.skills}
              />
            ))}
          </div>
        </Section>

        {/* Professional Growth */}
        <Section title="PROFESSIONAL GROWTH">
          <div className="luxury-card p-8">
            <div className="space-y-6 text-textSecondary font-light leading-relaxed">
              {exp.professionalGrowth.map((growth, i) => (
                <div key={i}>
                  <h4 className="text-primary font-light text-lg mb-3">{growth.title}</h4>
                  {growth.title === 'Life Impact' && exp.lifeImpact ? (
                    <p>
                      <button
                        onClick={() => navigate(exp.lifeImpact.href)}
                        className="text-primary underline font-light"
                        aria-label="Open life in Asia page"
                      >
                        {exp.lifeImpact.text}
                      </button>
                    </p>
                  ) : (
                    <p>{growth.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Section>
      </div>
    </div>
  )
}

// Component Helpers
const Section = ({ title, children }) => (
  <motion.section
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="mb-16"
  >
    <h2 className="text-3xl md:text-4xl font-light text-textPrimary mb-8">
      <span className="animated-gradient bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
        [{title}]
      </span>
    </h2>
    {children}
  </motion.section>
)

const ResponsibilityCard = ({ icon, title, description }) => (
  <motion.div
    whileHover={{ y: -3 }}
    className="luxury-card p-6"
  >
    <div className="text-3xl mb-4">{icon}</div>
    <h5 className="text-primary text-sm font-light mb-3 tracking-wide uppercase">{title}</h5>
    <p className="text-textSecondary text-sm font-light leading-relaxed">{description}</p>
  </motion.div>
)

const Achievement = ({ metric, description }) => (
  <div className="flex items-start gap-4 p-4 border-l-2 border-secondary/50">
    <div className="min-w-fit">
      <div className="text-secondary font-light text-lg">{metric}</div>
    </div>
    <p className="text-textSecondary font-light text-sm leading-relaxed">{description}</p>
  </div>
)

const SkillCard = ({ icon, title, skills }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="luxury-card p-6"
  >
    <div className="text-3xl mb-4">{icon}</div>
    <h4 className="text-primary text-lg font-light mb-4 tracking-wide uppercase">{title}</h4>
    <ul className="space-y-2">
      {skills.map((skill, i) => (
        <li key={i} className="flex items-start gap-2">
          <span className="text-secondary mt-1 -mt-1">→</span>
          <span className="text-textSecondary text-sm font-light">{skill}</span>
        </li>
      ))}
    </ul>
  </motion.div>
)

export default ExperienceDetail
