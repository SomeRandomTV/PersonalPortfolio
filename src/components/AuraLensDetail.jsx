import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import auralensData from '../data/auralens.json'

const AuraLensDetail = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate('/#projects')}
          className="mb-8 flex items-center gap-2 text-textSecondary hover:text-primary transition-colors font-light"
        >
          <span>←</span> Back to Projects
        </motion.button>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <h1 className="text-5xl md:text-6xl font-light text-textPrimary mb-6 tracking-tight">
            AuraLens
          </h1>
          <p className="text-xl text-textSecondary max-w-3xl mx-auto font-light leading-relaxed mb-8">
            {auralensData.overview}
          </p>
        </motion.div>

        {/* Key Features */}
        <Section title="KEY FEATURES">
          <div className="luxury-card p-8">
            <ul className="space-y-3 text-textSecondary font-light">
              {auralensData.keyFeatures.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-primary">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </Section>

        {/* Challenges */}
        <Section title="CHALLENGES">
          <div className="luxury-card p-8">
            <ul className="space-y-3 text-textSecondary font-light">
              {auralensData.challenges.map((c, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-secondary">•</span>
                  <span><b>{c.challenge}</b> <span className="text-textMuted">{c.solution}</span></span>
                </li>
              ))}
            </ul>
          </div>
        </Section>
      </div>
    </div>
  )
}

const Section = ({ title, children }) => (
  <motion.section
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="mb-16"
  >
    <h2 className="text-2xl md:text-3xl font-bold text-textPrimary mb-6">
      <span className="animated-gradient font-mono">[{title.toUpperCase()}]</span>
    </h2>
    {children}
  </motion.section>
)

export default AuraLensDetail
