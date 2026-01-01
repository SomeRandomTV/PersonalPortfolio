import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import aboutData from '../data/about.json'

const About = () => {
  const { identity, skills, values, experience, education } = aboutData
  const navigate = useNavigate()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section id="about" className="py-32 bg-surface">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* Section Header - Luxury Style */}
          <motion.div variants={itemVariants} className="mb-20 text-center">
            <h2 className="section-title-luxury gradient-gold-text">
              Profile
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Column - Bio & Philosophy */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="luxury-card p-8">
                <h3 className="text-2xl font-light text-textPrimary mb-8 tracking-luxury uppercase">
                  {identity.name}
                </h3>
                
                <div className="space-y-6 text-textSecondary leading-loose font-light text-base">
                  {identity.bio.map((paragraph, index) => (
                    <p key={index}>
                      {paragraph}
                    </p>
                  ))}
                  
                  {identity.quote && (
                    <div className="border-l border-primary pl-6 my-8">
                      <p className="text-textPrimary italic font-light text-lg">
                        {identity.quote}
                      </p>
                    </div>
                  )}
                </div>

                <div className="mt-6 text-center">
                  <motion.button
                    onClick={() => navigate('/life-in-asia')}
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.18 }}
                    className="text-primary underline font-light"
                    aria-label="Read my Life In Asia page"
                  >
                    Read more — Life In Asia (Korea & Japan)
                  </motion.button>
                </div>

                {/* Core Values */}
                <div className="mt-10">
                  <h4 className="text-base font-light text-primary mb-6 tracking-luxury-wide uppercase">
                    Core Principles
                  </h4>
                  <div className="space-y-3">
                    {values.map((value, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.3 }}
                        className="flex items-center gap-4 text-textSecondary font-light group cursor-default"
                      >
                        <span className="text-primary group-hover:text-secondary transition-all duration-400">—</span>
                        <span className="group-hover:text-textPrimary transition-all duration-400">{value}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Skills Matrix */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="luxury-card p-8">
                <h3 className="text-2xl font-light text-textPrimary mb-10 tracking-luxury uppercase">
                  Expertise
                </h3>

                <div className="space-y-8">
                  {Object.entries(skills).map(([category, items], categoryIndex) => (
                    <div key={categoryIndex}>
                      <h4 className="text-xs font-light text-primary mb-4 tracking-luxury-wide uppercase">
                        {category}
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {items.length > 0 ? (
                          items.map((skill, skillIndex) => (
                            <motion.span
                              key={skillIndex}
                              whileHover={{ scale: 1.05, borderColor: 'rgba(201, 169, 97, 0.6)' }}
                              transition={{ duration: 0.3 }}
                              className="px-4 py-2 bg-surface/50 border border-primary/20 text-textSecondary text-xs rounded hover:text-textPrimary transition-all duration-400 cursor-default font-light tracking-wide"
                            >
                              {skill}
                            </motion.span>
                          ))
                        ) : (
                          <span className="text-textMuted text-sm italic font-light">
                            [Skills to be added]
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Experience Timeline */}
              <motion.div
                whileHover={{ y: -3 }}
                onClick={() => navigate('/experience')}
                className="luxury-card p-8 cursor-pointer hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-10">
                  <h3 className="text-2xl font-light text-textPrimary tracking-luxury uppercase">
                    Experience
                  </h3>
                  <span className="text-primary text-xl">→</span>
                </div>
                <div className="space-y-6">
                  {experience.length > 0 && experience[0].title ? (
                    experience.map((exp, index) => (
                      <div key={index} className="border-l border-primary/30 pl-6">
                        <h4 className="text-textPrimary font-light text-lg">{exp.title}</h4>
                        <p className="text-primary text-sm tracking-wide mt-1">{exp.organization}</p>
                        <div className="flex items-center gap-2 text-textMuted text-xs mb-3 mt-2 font-light">
                          {exp.period && <span>{exp.period}</span>}
                          {exp.period && exp.location && <span>•</span>}
                          {exp.location && <span>{exp.location}</span>}
                        </div>
                        <p className="text-textSecondary text-sm font-light leading-relaxed">{exp.description}</p>
                      </div>
                    ))
                  ) : (
                    <p className="text-textMuted text-sm italic font-light">
                      Experience timeline to be added
                    </p>
                  )}
                </div>
              </motion.div>

              {/* Education Timeline */}
              <motion.div
                whileHover={{ y: -3 }}
                onClick={() => navigate('/education')}
                className="luxury-card p-8 cursor-pointer hover:border-secondary/50 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-10">
                  <h3 className="text-2xl font-light text-textPrimary tracking-luxury uppercase">
                    Education
                  </h3>
                  <span className="text-secondary text-xl">→</span>
                </div>
                <div className="space-y-6">
                  {education && education.length > 0 ? (
                    education.map((edu, index) => (
                      <div key={index} className="border-l border-secondary/30 pl-6">
                        <h4 className="text-textPrimary font-light text-lg">{edu.degree}</h4>
                        <p className="text-secondary text-sm tracking-wide mt-1">{edu.institution}</p>
                        <div className="flex items-center gap-2 text-textMuted text-xs mb-3 mt-2 font-light">
                          {edu.period && <span>{edu.period}</span>}
                          {edu.period && edu.location && <span>•</span>}
                          {edu.location && <span>{edu.location}</span>}
                        </div>
                        {edu.focus && (
                          <p className="text-textSecondary text-sm font-light leading-relaxed">
                            Focus: {edu.focus}
                          </p>
                        )}
                      </div>
                    ))
                  ) : (
                    <p className="text-textMuted text-sm italic font-light">
                      Education timeline to be added
                    </p>
                  )}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
