import frequencyFilteringData from '../data/frequency_filtering.json'
import 'katex/dist/katex.min.css';
import { InlineMath } from 'react-katex';
import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'


// List of images to use, with descriptive labels
const howItWorksImages = [
  {
    src: '/frequency_filtering/raw_image.png',
    label: 'Raw Input Image',
  },
  {
    src: '/frequency_filtering/frequency domain.png',
    label: 'Frequency Domain Representation',
  },
  {
    src: '/frequency_filtering/filter used.png',
    label: 'Frequency-Domain Filter Used',
  },
  {
    src: '/frequency_filtering/mag_peaking_freq.png',
    label: 'Magnitude Spectrum (Peaking Frequency)',
  },
  {
    src: '/frequency_filtering/extracted_pattern.png',
    label: 'Extracted Periodic Pattern',
  },
  {
    src: '/frequency_filtering/uniform_lighting.png',
    label: 'Uniformly Illuminated Image',
  },
]

const FrequencyFilteringDetail = () => {
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
            Frequency Filtering Pattern Extraction
          </h1>
          <p className="text-xl text-textSecondary max-w-2xl mx-auto font-light mb-4">
            {frequencyFilteringData.overview}
          </p>
          <div className="flex flex-wrap gap-2 justify-center mb-4">
            {frequencyFilteringData.techStack.map((tech, i) => (
              <span key={i} className="px-3 py-1 border border-border text-primary text-xs font-mono rounded">
                {tech}
              </span>
            ))}
            <span className="px-3 py-1 border border-green-500/50 text-green-400 text-xs font-mono rounded">
              {frequencyFilteringData.status}
            </span>
          </div>
          <a
            href={frequencyFilteringData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-textMuted hover:text-primary transition-colors font-mono text-sm"
          >
            {'>'} GitHub
          </a>
        </motion.div>

        {/* Goals */}
        <Section title="Goals">
          <ul className="list-disc pl-6 text-textSecondary font-light mb-6">
            {frequencyFilteringData.goals.map((goal, i) => (
              <li key={i}>{goal}</li>
            ))}
          </ul>
        </Section>

        {/* Method */}
        <Section title="Method">
          <ol className="list-decimal pl-6 text-textSecondary font-light mb-6">
            {frequencyFilteringData.method.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ol>
        </Section>

        {/* How It Works */}
        <Section title="How It Works">
          <div className="prose prose-invert max-w-none text-textSecondary font-light mb-8">
            <p>
              This project leverages the <b>2D Discrete Fourier Transform (DFT)</b> to analyze and process microscope images in the frequency domain. The Fourier Transform decomposes an image into its constituent spatial frequencies, making it possible to isolate repeating patterns and correct for uneven illumination.
            </p>
            <div className="my-6 p-4 bg-zinc-900/70 rounded border border-primary/40 overflow-x-auto text-center">
              <span className="block text-primary font-mono text-base mb-2">2D Discrete Fourier Transform:</span>
              <div className="flex justify-center" style={{whiteSpace: 'nowrap'}}>
                <InlineMath math={String.raw`F(u, v) = \sum_{x=0}^{M-1} \sum_{y=0}^{N-1} f(x, y) \cdot \exp\left[-2\pi i \left(\frac{ux}{M} + \frac{vy}{N}\right)\right]`} />
              </div>
            </div>
            <ul className="list-disc pl-6 mb-4">
              <li><b>Frequency Filtering:</b> By transforming the image, we can design filters (e.g., band-pass, notch) to suppress unwanted frequencies (like illumination gradients) and enhance periodic structures.</li>
              <li><b>Pattern Extraction:</b> Dominant periodic components appear as bright spots in the frequency spectrum. Isolating these frequencies and applying the inverse transform reveals the hidden pattern.</li>
              <li><b>Illumination Correction:</b> Low-frequency components often represent non-uniform lighting. Removing or attenuating these frequencies results in a more uniformly illuminated image.</li>
            </ul>
            <p>
              <b>Nuances:</b> The choice of filter shape and cutoff is crucial—too broad, and noise remains; too narrow, and important details are lost. Interpreting the frequency domain requires care: the center usually represents low frequencies (overall brightness), while edges correspond to fine details and noise.
            </p>
          </div>
        {/* Results */}
        <Section title="Results">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Optionally, you can add summary or conclusions here, or remove this section if not needed. */}
          </div>
        </Section>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
              {howItWorksImages.map((img, i) => (
              <div key={i} className="text-center">
                <img src={img.src} alt={img.label} className="w-full rounded border border-border mb-2" />
                <div className="text-xs text-textMuted font-mono">{img.label}</div>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <span className="block text-primary font-mono text-base mb-2">Further Reading:</span>
            <ul className="list-disc pl-6 text-sm">
              <li><a href="https://www.geeksforgeeks.org/computer-vision/frequency-domain-filters-and-its-types/#" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Frequency Domain Filters and Its Types (GeeksforGeeks)</a></li>
              <li><a href="https://en.wikipedia.org/wiki/Frequency_domain" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Frequency Domain (Wikipedia)</a></li>
              <li><a href="https://docs.opencv.org/4.x/de/dbc/tutorial_py_fourier_transform.html" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">OpenCV: Fourier Transform Tutorial</a></li>
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
    className="mb-12"
  >
    <h2 className="text-2xl md:text-3xl font-bold text-textPrimary mb-6">
      <span className="animated-gradient font-mono">[{title.toUpperCase()}]</span>
    </h2>
    {children}
  </motion.section>
)

export default FrequencyFilteringDetail
