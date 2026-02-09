import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import educationData from '../data/education.json'

const EducationDetail = () => {
  const navigate = useNavigate()
  const edu = educationData

  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      <div className="container mx-auto px-6 max-w-7xl">
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
            Academic Journey
          </h1>
          
          <p className="text-xl text-textSecondary max-w-3xl mx-auto font-light leading-relaxed">
            From military discipline to cutting-edge AI research
          </p>
        </motion.div>

        {/* Texas Tech University */}
        <Section title={edu.currentEducation.institution.toUpperCase()}>
          <div className="luxury-card p-8">
            {/* University Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 pb-6 border-b border-border/30">
              <div>
                <h3 className="text-2xl font-light text-primary mb-2">{edu.currentEducation.degree}</h3>
                <p className="text-textMuted font-light">{edu.currentEducation.location}</p>
              </div>
              <div className="text-textSecondary font-light mt-2 md:mt-0">
                {edu.currentEducation.period}
              </div>
            </div>

            {/* Overview */}
            <p className="text-textSecondary font-light leading-relaxed mb-8">
              {edu.currentEducation.overview}
            </p>

            {/* Focus Areas */}
            <h4 className="text-primary text-lg font-light mb-6 tracking-wide uppercase">Areas of Focus</h4>
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              {edu.currentEducation.focusAreas.map((area, i) => (
                <FocusCard
                  key={i}
                  icon={area.icon}
                  title={area.title}
                  description={area.description}
                />
              ))}
            </div>

            {/* Taken Courses */}
            <h4 className="text-primary text-lg font-light mb-2 tracking-wide uppercase">Taken Courses</h4>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {edu.currentEducation.takenCourses.map((course, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-3 p-3 border-l-2 border-secondary/30 hover:border-secondary/60 transition-colors"
                >
                  <span className="text-secondary">→</span>
                  <span className="text-textSecondary font-light">{course}</span>
                </motion.div>
              ))}
            </div>

            {/* Planned Courses */}
            <h4 className="text-secondary text-lg font-light mb-2 tracking-wide uppercase">Active Courses</h4>
            <div className="grid md:grid-cols-2 gap-4 mb-10">
              {edu.currentEducation.activeCourses.map((course, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-3 p-3 border-l-2 border-secondary/30 hover:border-secondary/60 transition-colors"
                >
                  <span className="text-secondary">→</span>
                  <span className="text-textSecondary font-light">{course}</span>
                </motion.div>
              ))}
            </div>

          </div>
        </Section>

        {/* New Mexico Military Institute */}
        <Section title={edu.previousEducation.institution.toUpperCase()}>
          <div className="luxury-card p-8">
            {/* University Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 pb-6 border-b border-border/30">
              <div>
                <h3 className="text-2xl font-light text-secondary mb-2">{edu.previousEducation.degree}</h3>
                <p className="text-textMuted font-light">{edu.previousEducation.location}</p>
              </div>
              <div className="text-textSecondary font-light mt-2 md:mt-0">
                {edu.previousEducation.period}
              </div>
            </div>

            {/* Overview */}
            <p className="text-textSecondary font-light leading-relaxed mb-8">
              {edu.previousEducation.overview}
            </p>

            {/* Military College Experience */}
            <h4 className="text-secondary text-lg font-light mb-6 tracking-wide uppercase">Military College Experience</h4>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {edu.previousEducation.experience.map((exp, i) => (
                <div key={i} className="luxury-card p-6 bg-surface/50">
                  <h5 className="text-secondary text-sm font-light mb-3 tracking-wide uppercase">{exp.title}</h5>
                  <p className="text-textSecondary text-sm font-light leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Foundation Courses */}
            <h4 className="text-secondary text-lg font-light mb-6 tracking-wide uppercase">Core Foundation</h4>
            <div className="flex flex-wrap gap-3">
              {edu.previousEducation.foundationCourses.map((course, i) => (
                <motion.span
                  key={i}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-4 py-2 border border-secondary/30 text-secondary text-sm font-light hover:border-secondary/60 transition-colors cursor-default"
                >
                  {course}
                </motion.span>
              ))}
            </div>
          </div>
        </Section>

        {/* Early Coding Journey */}
        <Section title="THE ORIGIN STORY">
          <div className="luxury-card p-8">
            <div className="space-y-6 text-textSecondary font-light leading-relaxed">
              {edu.originStory.map((story, i) => (
                <div key={i}>
                  <h4 className="text-primary font-light text-lg mb-3">{story.title}</h4>
                  <p>{story.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Beyond Academics */}
        <Section title="BEYOND THE CLASSROOM">
          <div className="grid md:grid-cols-2 gap-6">
            {edu.beyondClassroom.map((activity, i) => (
              <div key={i} className="luxury-card p-8">
                <div className="text-3xl mb-4">{activity.icon}</div>
                <h3 className={`${i === 0 ? 'text-primary' : 'text-secondary'} text-lg font-light mb-4 tracking-wide uppercase`}>
                  {activity.title}
                </h3>
                <p className="text-textSecondary font-light leading-relaxed">
                  {activity.title === 'ZIATECHNICA Startup' ? (
                    <>
                      Assembled and lead a team of students to build <a href="https://www.ziatechnica.org/" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-secondary transition-colors">ZIATECHNICA</a>, our startup focused on privacy-first AI systems. Our flagship project A.R.A. (Adaptive Real-time Assistant) combines computer vision, NLP, and local inference for healthcare applications—translating academic knowledge into real-world impact.
                    </>
                  ) : activity.title === 'Septilith (Deathcore Band)' ? (
                    <>
                      Despite the demanding schedule of work, classes, and entrepreneurship, music remains a vital creative outlet. As a guitarist for the deathcore band <a href="https://open.spotify.com/artist/3VaMLcFxbNo7uddutF36eD?si=KerXDExbT3aAYkJzUyloAw" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-secondary transition-colors">Septilith</a>, I channel technical precision and creativity in a completely different domain—proving that passion transcends boundaries.
                    </>
                  ) : activity.description}
                </p>
              </div>
            ))}
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

const FocusCard = ({ icon, title, description }) => (
  <motion.div
    whileHover={{ y: -3 }}
    className="luxury-card p-6"
  >
    <div className="text-3xl mb-4">{icon}</div>
    <h5 className="text-primary text-sm font-light mb-3 tracking-wide uppercase">{title}</h5>
    <p className="text-textSecondary text-sm font-light leading-relaxed">{description}</p>
  </motion.div>
)

const ProjectCard = ({ title, description }) => (
  <div className="luxury-card p-6 bg-surface/50">
    <div className="flex items-start gap-3 mb-3">
      <span className="text-primary text-xl">◆</span>
      <h5 className="text-primary font-light text-base">{title}</h5>
    </div>
    <p className="text-textSecondary font-light text-sm leading-relaxed pl-8">{description}</p>
  </div>
)

export default EducationDetail
