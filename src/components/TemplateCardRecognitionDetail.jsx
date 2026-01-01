import templateCardRecognitionData from '../data/template_card_recognition.json'
import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import 'katex/dist/katex.min.css';
import { InlineMath } from 'react-katex';

const howItWorksImages = [
  // Example: { src: '/template_card_recognition/original.png', label: 'Original Image' },
  // Add your actual images here
]

// Helper: get all template image paths for ranks and suits
const rankTemplates = [
  'Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King'
].map(r => ({
  name: r,
  src: `/cards/templates/RANKS/${r}.jpg`
}))
const suitTemplates = [
  'Clubs', 'Diamonds', 'Hearts', 'Spades'
].map(s => ({
  name: s,
  src: `/cards/templates/SUITS/${s}.jpg`
}))

// Demo: pick 3 random templates for each, assign mock scores, animate
const AnimatedTemplateSlider = () => {
  // Pick 3 random ranks and suits for demo
  const getRandom = arr => arr.sort(() => 0.5 - Math.random()).slice(0, 3)
  const topRanks = getRandom(rankTemplates).map((t, i) => ({ ...t, score: 0.95 - i * 0.07 }))
  const topSuits = getRandom(suitTemplates).map((t, i) => ({ ...t, score: 0.97 - i * 0.08 }))
  return (
    <div className="flex flex-col gap-8 items-center">
      <motion.div
        className="flex gap-6 justify-center"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.15 } }
        }}
      >
        {topRanks.map((template, idx) => (
          <motion.div
            key={template.name}
            className={`p-2 rounded border ${idx === 0 ? 'border-primary scale-110 shadow-lg' : 'border-border'} bg-zinc-900/70 transition-all`}
            whileHover={{ scale: 1.13, boxShadow: '0 4px 32px #c9a96133' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 200, damping: 18 }}
          >
            <img src={template.src} alt={template.name} className="w-20 h-28 object-contain mb-2" />
            <div className="text-xs font-mono text-center">
              {template.name}<br />
              Score: <span className="text-primary">{(template.score * 100).toFixed(1)}%</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
      <motion.div
        className="flex gap-6 justify-center"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.15 } }
        }}
      >
        {topSuits.map((template, idx) => (
          <motion.div
            key={template.name}
            className={`p-2 rounded border ${idx === 0 ? 'border-primary scale-110 shadow-lg' : 'border-border'} bg-zinc-900/70 transition-all`}
            whileHover={{ scale: 1.13, boxShadow: '0 4px 32px #c9a96133' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 200, damping: 18 }}
          >
            <img src={template.src} alt={template.name} className="w-20 h-20 object-contain mb-2" />
            <div className="text-xs font-mono text-center">
              {template.name}<br />
              Score: <span className="text-primary">{(template.score * 100).toFixed(1)}%</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
      <div className="text-xs text-textMuted mt-2">Top 3 template matches for rank and suit, with crisp animated transitions.</div>
    </div>
  )
}

const TemplateCardRecognitionDetail = () => {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate('/#mini-projects')}
          className="mb-8 flex items-center gap-2 text-textSecondary hover:text-primary transition-colors font-light"
        >
          <span>←</span> Back to Mini Projects
        </motion.button>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-textPrimary mb-4">
            Template-Based Card Recognition
          </h1>
          <p className="text-xl text-textSecondary max-w-2xl mx-auto font-light mb-4">
            {templateCardRecognitionData.overview}
          </p>
          <div className="flex flex-wrap gap-2 justify-center mb-4">
            {templateCardRecognitionData.techStack.map((tech, i) => (
              <span key={i} className="px-3 py-1 border border-border text-primary text-xs font-mono rounded">
                {tech}
              </span>
            ))}
            <span className="px-3 py-1 border border-green-500/50 text-green-400 text-xs font-mono rounded">
              {templateCardRecognitionData.status}
            </span>
          </div>
          <a
            href={templateCardRecognitionData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-textMuted hover:text-primary transition-colors font-mono text-sm"
          >
            {'>'} GitHub
          </a>
        </motion.div>

        {/* Live Demo */}
        <Section title="Live Demo">
          <AnimatedTemplateSlider />
        </Section>

        {/* Goals */}
        <Section title="Goals">
          <ul className="list-disc pl-6 text-textSecondary font-light mb-6">
            {templateCardRecognitionData.goals.map((goal, i) => (
              <li key={i}>{goal}</li>
            ))}
          </ul>
        </Section>

        {/* Method */}
        <Section title="Method">
          <ol className="list-decimal pl-6 text-textSecondary font-light mb-6">
            {templateCardRecognitionData.method.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ol>
          <div className="my-6 p-4 bg-zinc-900/70 rounded border border-primary/40 overflow-x-auto text-center">
            <span className="block text-primary font-mono text-base mb-2">Template Matching Equation:</span>
            <div className="flex justify-center" style={{whiteSpace: 'nowrap'}}>
              <InlineMath math={String.raw`\text{Difference} = \frac{\sum |I_{\text{extracted}} - I_{\text{template}}|}{255}`}/>
            </div>
          </div>
        </Section>

        {/* Results */}
        <Section title="Results">
          <div className="mb-6">
            {/* Placeholder for results table and confidence metrics */}
            <div className="overflow-x-auto">
              <table className="min-w-full text-xs text-left text-textSecondary border border-border rounded">
                <thead className="bg-zinc-900/70">
                  <tr>
                    <th className="px-3 py-2">Image</th>
                    <th className="px-3 py-2">Detected Card</th>
                    <th className="px-3 py-2">Confidence</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Example row, replace with real data */}
                  <tr>
                    <td className="px-3 py-2">[img]</td>
                    <td className="px-3 py-2">Ace of Spades</td>
                    <td className="px-3 py-2">98%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Section>

        {/* Visuals */}
        <Section title="Visuals">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {howItWorksImages.length === 0 ? (
              <div className="text-center col-span-3 text-textMuted">[Add pipeline/processing images here]</div>
            ) : (
              howItWorksImages.map((img, i) => (
                <div key={i} className="text-center">
                  <img src={img.src} alt={img.label} className="w-full rounded border border-border mb-2" />
                  <div className="text-xs text-textMuted font-mono">{img.label}</div>
                </div>
              ))
            )}
          </div>
        </Section>

        {/* Further Reading */}
        <Section title="Further Reading">
          <ul className="list-disc pl-6 text-sm">
            <li><a href="https://github.com/SomeRandomTV/Image-Processing-Project-4" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Project GitHub Repository</a></li>
            <li><a href="https://docs.opencv.org/4.x/d4/dc6/tutorial_template_matching.html" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">OpenCV: Template Matching</a></li>
          </ul>
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
    className="mb-12"
  >
    <h2 className="text-2xl md:text-3xl font-bold text-textPrimary mb-6">
      <span className="animated-gradient font-mono">[{title.toUpperCase()}]</span>
    </h2>
    {children}
  </motion.section>
)

export default TemplateCardRecognitionDetail
