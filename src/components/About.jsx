import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  const skills = {
    'AI/ML Systems': [],
    'Cybersecurity': [],
    'Development': [],
    'Tools & Platforms': [],
  }

  const values = [
    'Privacy-first engineering',
    'Local-inference AI systems',
    'Offensive security mindset',
  ]

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
    <section id="about" className="py-20 bg-surface">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-textPrimary mb-4">
              About <span className="text-primary">/ System Overview</span>
            </h2>
            <div className="h-1 w-24 bg-primary neural-glow" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Bio & Philosophy */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="bg-card border border-border p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-textPrimary mb-4">
                  <span className="text-primary font-mono">[ID]</span> 
                </h3>
                
                <div className="space-y-4 text-textSecondary leading-relaxed">
                  <p>
                    
                  </p>
                  
                  <div className="border-l-2 border-primary pl-4 my-6">
                    <p className="text-textPrimary italic">
                      
                    </p>
                  </div>
                </div>

                {/* Core Values */}
                <div className="mt-8">
                  <h4 className="text-lg font-semibold text-textPrimary mb-4 font-mono">
                    <span className="text-primary">&gt;</span> Core Principles
                  </h4>
                  <div className="space-y-2">
                    {values.map((value, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-3 text-textSecondary group cursor-default"
                      >
                        <span className="text-primary group-hover:text-neural transition-colors">▸</span>
                        <span className="group-hover:text-textPrimary transition-colors">{value}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Skills Matrix */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="bg-card border border-border p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-textPrimary mb-6">
                  <span className="text-primary font-mono">[SKILLS_MATRIX]</span>
                </h3>

                <div className="space-y-6">
                  {Object.entries(skills).map(([category, items], categoryIndex) => (
                    <div key={categoryIndex}>
                      <h4 className="text-sm font-semibold text-primary mb-3 font-mono uppercase tracking-wider">
                        {category}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {items.length > 0 ? (
                          items.map((skill, skillIndex) => (
                            <motion.span
                              key={skillIndex}
                              whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(193, 18, 31, 0.3)' }}
                              className="px-3 py-1.5 bg-surface border border-primary/30 text-textSecondary text-sm rounded hover:border-primary hover:text-textPrimary transition-all duration-200 cursor-default"
                            >
                              {skill}
                            </motion.span>
                          ))
                        ) : (
                          <span className="text-textMuted text-sm italic">
                            [Skills to be added]
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Optional: Experience Timeline placeholder */}
              <div className="bg-card border border-border p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-textPrimary mb-6">
                  <span className="text-primary font-mono">[EXPERIENCE]</span>
                </h3>
                <div className="space-y-4 text-textMuted">
                  <p className="text-sm italic">
                    Experience timeline to be added
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
