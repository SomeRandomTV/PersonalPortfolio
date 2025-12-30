import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const EducationDetail = () => {
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
            Academic Journey
          </h1>
          
          <p className="text-xl text-textSecondary max-w-3xl mx-auto font-light leading-relaxed">
            From military discipline to cutting-edge AI research
          </p>
        </motion.div>

        {/* Texas Tech University */}
        <Section title="TEXAS TECH UNIVERSITY">
          <div className="luxury-card p-8">
            {/* University Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 pb-6 border-b border-border/30">
              <div>
                <h3 className="text-2xl font-light text-primary mb-2">Bachelor of Science in Computer Science</h3>
                <p className="text-textMuted font-light">Lubbock, Texas</p>
              </div>
              <div className="text-textSecondary font-light mt-2 md:mt-0">
                2023 - Present
              </div>
            </div>

            {/* Overview */}
            <p className="text-textSecondary font-light leading-relaxed mb-8">
              Currently pursuing a B.S. in Computer Science at Texas Tech University with a specialized focus on Computer Vision, AI/ML systems, and low-level systems programming. This phase of my education has been transformative, igniting an exponential growth in my appetite for computer science and driving deep technical exploration beyond the classroom.
            </p>

            {/* Focus Areas */}
            <h4 className="text-primary text-lg font-light mb-6 tracking-wide uppercase">Areas of Focus</h4>
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <FocusCard
                icon="👁️"
                title="Computer Vision"
                description="Image processing, object detection, real-time video analysis, and behavior recognition systems using OpenCV and deep learning frameworks."
              />
              <FocusCard
                icon="🧠"
                title="AI/ML Systems"
                description="Deep learning architectures, model optimization, privacy-first local inference, and production deployment of intelligent systems."
              />
              <FocusCard
                icon="⚙️"
                title="Low-Level Programming"
                description="Systems programming in C/C++ and Rust, real-time behavior analysis, and efficient algorithm implementation for performance-critical applications."
              />
            </div>

            {/* Key Courses */}
            <h4 className="text-primary text-lg font-light mb-6 tracking-wide uppercase">Relevant Coursework</h4>
            <div className="grid md:grid-cols-2 gap-4 mb-10">
              {[
                'Data Structures & Algorithms',
                'Computer Architecture',
                'Operating Systems',
                'Database Management Systems',
                'Software Engineering',
                'Artificial Intelligence',
                'Machine Learning',
                'Computer Networks'
              ].map((course, i) => (
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

            {/* Projects & Research */}
            <h4 className="text-primary text-lg font-light mb-6 tracking-wide uppercase">Academic Projects</h4>
            <div className="space-y-4">
              <ProjectCard
                title="A.R.A. (Adaptive Real-time Assistant)"
                description="Leading a student team to build a privacy-first virtual assistant system with local inference capabilities. Combines computer vision, natural language processing, and event-driven architecture for healthcare applications."
              />
              <ProjectCard
                title="Image Denoising Research"
                description="Implemented and compared multiple denoising algorithms including DnCNN, achieving 39.13 PSNR on test datasets. Explored traditional and deep learning approaches for noise reduction in medical imaging."
              />
              <ProjectCard
                title="Compiler Development"
                description="Built a custom lexer and parser for a programming language implementation, deepening understanding of language design, tokenization, and abstract syntax tree construction."
              />
            </div>
          </div>
        </Section>

        {/* New Mexico Military Institute */}
        <Section title="NEW MEXICO MILITARY INSTITUTE">
          <div className="luxury-card p-8">
            {/* University Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 pb-6 border-b border-border/30">
              <div>
                <h3 className="text-2xl font-light text-secondary mb-2">Associate Degree</h3>
                <p className="text-textMuted font-light">Roswell, New Mexico</p>
              </div>
              <div className="text-textSecondary font-light mt-2 md:mt-0">
                2021 - 2022
              </div>
            </div>

            {/* Overview */}
            <p className="text-textSecondary font-light leading-relaxed mb-8">
              Completed foundational computer science education at the New Mexico Military Institute, a rigorous military junior college environment that instilled discipline, leadership, and time management skills essential for balancing academic excellence with demanding schedules.
            </p>

            {/* Military College Experience */}
            <h4 className="text-secondary text-lg font-light mb-6 tracking-wide uppercase">Military College Experience</h4>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="luxury-card p-6 bg-surface/50">
                <h5 className="text-secondary text-sm font-light mb-3 tracking-wide uppercase">Academic Rigor</h5>
                <p className="text-textSecondary text-sm font-light leading-relaxed">
                  Balanced intensive computer science coursework with military training, developing strong time management and prioritization skills under strict schedules and high expectations.
                </p>
              </div>
              <div className="luxury-card p-6 bg-surface/50">
                <h5 className="text-secondary text-sm font-light mb-3 tracking-wide uppercase">Leadership Development</h5>
                <p className="text-textSecondary text-sm font-light leading-relaxed">
                  Cultivated leadership abilities through military structure, learning to work effectively in teams, communicate clearly under pressure, and maintain composure in challenging situations.
                </p>
              </div>
            </div>

            {/* Foundation Courses */}
            <h4 className="text-secondary text-lg font-light mb-6 tracking-wide uppercase">Core Foundation</h4>
            <div className="flex flex-wrap gap-3">
              {[
                'Introduction to Programming',
                'Data Structures',
                'Discrete Mathematics',
                'Calculus I & II',
                'Physics',
                'Computer Organization',
                'Algorithm Analysis'
              ].map((course, i) => (
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
              <div>
                <h4 className="text-primary font-light text-lg mb-3">First Encounter (2015)</h4>
                <p>
                  The journey began in Eunice, New Mexico, during a summer visit with my brother in 2015. He introduced me to HTML, sparking the first lines of code that would eventually shape my career path. Those early summer days of learning web fundamentals planted the seed for a lifelong passion.
                </p>
              </div>
              
              <div>
                <h4 className="text-primary font-light text-lg mb-3">High School Years (2020-2021)</h4>
                <p>
                  Throughout my time at Lake Arthur High School in my New Mexico hometown, I continued coding intermittently. During my senior year, the interest crystallized into a definitive decision: pursue Computer Science at the college level and make it a career.
                </p>
              </div>

              <div>
                <h4 className="text-primary font-light text-lg mb-3">Transfer Challenges</h4>
                <p>
                  The transition from NMMI to Texas Tech in Spring 2023 came with an unexpected setback—only ~30 of my 65 credits transferred. While initially disheartening, this challenge became a turning point. Instead of slowing down, it motivated an intensified focus on computer science fundamentals and advanced topics.
                </p>
              </div>

              <div>
                <h4 className="text-primary font-light text-lg mb-3">Exponential Growth</h4>
                <p>
                  At Texas Tech, my appetite for computer science has grown exponentially. Working day and night while balancing coursework and a part-time job, I've deepened my expertise in image processing, computer vision, and low-level systems engineering. The demanding schedule has only sharpened my focus and determination.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* Beyond Academics */}
        <Section title="BEYOND THE CLASSROOM">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="luxury-card p-8">
              <div className="text-3xl mb-4">🚀</div>
              <h3 className="text-primary text-lg font-light mb-4 tracking-wide uppercase">ZIATECHNICA Startup</h3>
              <p className="text-textSecondary font-light leading-relaxed">
                Assembled and lead a team of students to build ZIATECHNICA, our startup focused on privacy-first AI systems. Our flagship project A.R.A. (Adaptive Real-time Assistant) combines computer vision, NLP, and local inference for healthcare applications—translating academic knowledge into real-world impact.
              </p>
            </div>

            <div className="luxury-card p-8">
              <div className="text-3xl mb-4">🎸</div>
              <h3 className="text-secondary text-lg font-light mb-4 tracking-wide uppercase">Septilith (Deathcore Band)</h3>
              <p className="text-textSecondary font-light leading-relaxed">
                Despite the demanding schedule of work, classes, and entrepreneurship, music remains a vital creative outlet. As a guitarist for the deathcore band Septilith, I channel technical precision and creativity in a completely different domain—proving that passion transcends boundaries.
              </p>
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
