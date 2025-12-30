import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const ExperienceDetail = () => {
  const navigate = useNavigate()

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
            Professional Experience
          </h1>
          
          <p className="text-xl text-textSecondary max-w-3xl mx-auto font-light leading-relaxed">
            Building intelligent systems at the intersection of research and production
          </p>
        </motion.div>

        {/* Main Experience Section */}
        <Section title="AI/ML TECH RESEARCHER">
          <div className="luxury-card p-8">
            {/* Company Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 pb-6 border-b border-border/30">
              <div>
                <h3 className="text-2xl font-light text-primary mb-2">AndGo Inc.</h3>
                <p className="text-textMuted font-light">Tokyo, Japan (Remote)</p>
              </div>
              <div className="text-textSecondary font-light mt-2 md:mt-0">
                June 2024 - August 2024
              </div>
            </div>

            {/* Overview */}
            <p className="text-textSecondary font-light leading-relaxed mb-8">
              Conducted AI/ML research and development for AndGo Inc.'s R&D team, focusing on evaluating and prototyping cutting-edge models for production integration. Collaborated with international team members across multiple time zones to accelerate AI capability deployment.
            </p>

            {/* Responsibilities */}
            <h4 className="text-primary text-lg font-light mb-6 tracking-wide uppercase">Key Responsibilities</h4>
            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <ResponsibilityCard
                icon="🔬"
                title="Research & Evaluation"
                description="Evaluated state-of-the-art AI/ML models from academic papers and open-source repositories. Assessed feasibility, performance characteristics, and production readiness for integration into AndGo's platform."
              />
              <ResponsibilityCard
                icon="⚡"
                title="Rapid Prototyping"
                description="Developed proof-of-concept implementations to validate model capabilities in real-world scenarios. Iterated quickly on architectures to meet performance and accuracy requirements."
              />
              <ResponsibilityCard
                icon="🤝"
                title="Cross-Team Collaboration"
                description="Worked closely with engineering and product teams to align research efforts with business objectives. Communicated technical findings to stakeholders with varying levels of AI expertise."
              />
              <ResponsibilityCard
                icon="📊"
                title="Documentation & Knowledge Transfer"
                description="Created comprehensive documentation of model evaluations, implementation decisions, and integration guidelines. Enabled smooth handoffs to production engineering teams."
              />
            </div>

            {/* Technologies */}
            <h4 className="text-primary text-lg font-light mb-6 tracking-wide uppercase">Technologies & Tools</h4>
            <div className="flex flex-wrap gap-3 mb-10">
              {['PyTorch', 'TensorFlow', 'Hugging Face', 'Transformers', 'scikit-learn', 'NumPy', 'Pandas', 'Jupyter', 'Git', 'Docker'].map((tech) => (
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
              <Achievement
                metric="40% Reduction"
                description="Reduced model evaluation time by implementing automated benchmarking pipeline, accelerating research-to-production cycle"
              />
              <Achievement
                metric="3 Models Integrated"
                description="Successfully researched, prototyped, and handed off three production-ready AI models for platform integration"
              />
              <Achievement
                metric="International Collaboration"
                description="Effectively coordinated with team members across Tokyo and remote locations, managing asynchronous workflows across time zones"
              />
            </div>
          </div>
        </Section>

        {/* Skills Developed */}
        <Section title="SKILLS DEVELOPED">
          <div className="grid md:grid-cols-3 gap-6">
            <SkillCard
              icon="🧠"
              title="AI/ML Research"
              skills={[
                'Model architecture analysis',
                'Performance benchmarking',
                'Hyperparameter optimization',
                'Transfer learning strategies',
                'Academic paper implementation'
              ]}
            />
            <SkillCard
              icon="💻"
              title="Engineering Practices"
              skills={[
                'Rapid prototyping workflows',
                'Production-ready code standards',
                'Version control best practices',
                'Documentation for handoffs',
                'Containerized deployments'
              ]}
            />
            <SkillCard
              icon="🌐"
              title="Soft Skills"
              skills={[
                'Asynchronous communication',
                'Cross-cultural collaboration',
                'Technical writing',
                'Stakeholder presentations',
                'Time zone coordination'
              ]}
            />
          </div>
        </Section>

        {/* Professional Growth */}
        <Section title="PROFESSIONAL GROWTH">
          <div className="luxury-card p-8">
            <div className="space-y-6 text-textSecondary font-light leading-relaxed">
              <div>
                <h4 className="text-primary font-light text-lg mb-3">International Exposure</h4>
                <p>
                  Working with AndGo Inc.'s Tokyo-based team provided valuable experience in international tech collaboration. Navigating time zone differences and cultural communication styles strengthened my ability to work effectively in distributed, global teams—an essential skill in modern software development.
                </p>
              </div>
              
              <div>
                <h4 className="text-primary font-light text-lg mb-3">Research-to-Production Pipeline</h4>
                <p>
                  This role bridged the gap between academic AI research and production engineering. Learning to evaluate models not just for theoretical performance but for real-world deployability—considering latency, resource constraints, and integration complexity—fundamentally shaped my approach to AI development.
                </p>
              </div>

              <div>
                <h4 className="text-primary font-light text-lg mb-3">Rapid Learning & Adaptation</h4>
                <p>
                  The fast-paced research environment required quickly mastering new model architectures, frameworks, and evaluation methodologies. Developing the ability to read academic papers, implement novel techniques, and assess their practical value within tight timelines was transformative for my technical growth.
                </p>
              </div>

              <div>
                <h4 className="text-primary font-light text-lg mb-3">Career Impact</h4>
                <p>
                  This internship solidified my interest in AI/ML engineering and validated my ability to contribute meaningfully to production AI systems. The experience of evaluating cutting-edge research for real-world applications continues to inform my approach to technical projects and career direction.
                </p>
              </div>
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
