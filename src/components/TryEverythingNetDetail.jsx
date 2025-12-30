import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const TryEverythingNetDetail = () => {
  const navigate = useNavigate()
  const [selectedComparison, setSelectedComparison] = useState('gaussian')

  const comparisons = {
    gaussian: {
      title: 'Gaussian Filter',
      noisy: '/tryeverythingnet/gaussian_25_sigma.png',
      traditional: '/tryeverythingnet/gaussian_image_1.png',
      description: 'σ=25 Gaussian noise removal using traditional Gaussian filter'
    },
    bilateral: {
      title: 'Bilateral Filter',
      noisy: '/tryeverythingnet/gaussian_25_sigma.png',
      traditional: '/tryeverythingnet/bilateral_image_1.png',
      description: 'Edge-preserving bilateral filtering for Gaussian noise'
    },
    median: {
      title: 'Median Filter',
      noisy: '/tryeverythingnet/sp_noise_05_percent.png',
      traditional: '/tryeverythingnet/median_image_1.png',
      description: 'Salt & pepper noise removal using median filtering'
    },
    nlm: {
      title: 'Non-Local Means',
      noisy: '/tryeverythingnet/gaussian_25_sigma.png',
      traditional: '/tryeverythingnet/nlm_image_1.png',
      description: 'Advanced patch-based denoising with NLM algorithm'
    },
    wiener: {
      title: 'Wiener Filter',
      noisy: '/tryeverythingnet/motion_blurred_0001.png',
      traditional: '/tryeverythingnet/wiener_image_1.png',
      description: 'Frequency-domain Wiener filtering for motion blur'
    },
    xray: {
      title: 'Deep Learning (X-Ray)',
      noisy: '/tryeverythingnet/gaussian_25_sigma.png',
      traditional: '/tryeverythingnet/clean.png',
      description: 'DnCNN deep learning model trained on Gaussian noise (medical imaging)'
    }
  }

  const benchmarkResults = [
    { method: 'DnCNN', psnr: 39.13, psnrStd: 0.91, ssim: 0.9340, ssimStd: 0.0170, rank: 1 },
    { method: 'Bilateral', psnr: 37.22, psnrStd: 0.71, ssim: 0.8860, ssimStd: 0.0170, rank: 2 },
    { method: 'Wiener', psnr: 36.54, psnrStd: 0.88, ssim: 0.8930, ssimStd: 0.0240, rank: 3 },
    { method: 'Median', psnr: 34.91, psnrStd: 0.53, ssim: 0.8360, ssimStd: 0.0080, rank: 4 },
    { method: 'NLM', psnr: 34.41, psnrStd: 1.09, ssim: 0.7980, ssimStd: 0.0260, rank: 5 },
    { method: 'Gaussian', psnr: 34.15, psnrStd: 0.84, ssim: 0.8000, ssimStd: 0.0020, rank: 6 }
  ]

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
          <div className="inline-block mb-6">
            <span className="px-4 py-1.5 text-xs font-light border border-secondary/50 text-secondary tracking-luxury-wide uppercase">
              Group Project
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-light text-textPrimary mb-6 tracking-tight">
            TryEverythingNet
          </h1>
          
          <p className="text-xl text-textSecondary max-w-3xl mx-auto font-light leading-relaxed mb-8">
            Adaptive Image Denoising Through Traditional Filters & Deep Learning Comparison
          </p>

          <div className="flex flex-wrap gap-3 justify-center mb-8">
            <span className="px-3 py-1 border border-primary/30 text-primary text-xs font-light tracking-wide">
              Image Processing
            </span>
            <span className="px-3 py-1 border border-primary/30 text-primary text-xs font-light tracking-wide">
              AI/ML
            </span>
            <span className="px-3 py-1 border border-green-500/50 text-green-400 text-xs font-light tracking-wide">
              Phase 3/5 Complete
            </span>
          </div>

          <div className="flex gap-4 justify-center">
            <a
              href="https://github.com/Raf-360/ImageProcessingProject5"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 border border-primary/50 hover:border-primary text-primary transition-all duration-400 font-light text-sm"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              View Repository
            </a>
          </div>
        </motion.div>

        {/* Current Status Banner */}
        <Section title="CURRENT STATUS">
          <div className="luxury-card p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-primary text-sm font-light mb-4 tracking-wide uppercase">What's Working Now</h4>
                <ul className="space-y-3 text-textSecondary">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span className="font-light">Traditional filtering methods (Gaussian, Bilateral, Median, NLM, Wiener)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span className="font-light">Deep learning denoiser (DnCNN) trained on Gaussian noise</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span className="font-light">Side-by-side comparison of traditional vs. deep learning approaches</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span className="font-light">PSNR/SSIM quality metrics for objective evaluation</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-secondary text-sm font-light mb-4 tracking-wide uppercase">Future Vision</h4>
                <ul className="space-y-3 text-textSecondary">
                  <li className="flex items-start gap-3">
                    <span className="text-textMuted mt-1">○</span>
                    <span className="font-light">Adaptive system that tries all filters and selects the best result automatically</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-textMuted mt-1">○</span>
                    <span className="font-light">Multiple DnCNN models for different noise types (salt & pepper, motion blur)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-textMuted mt-1">○</span>
                    <span className="font-light">Iterative filtering with quality-based convergence detection</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-textMuted mt-1">○</span>
                    <span className="font-light">Ensemble methods combining traditional + deep learning outputs</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Section>

        {/* Benchmark Results */}
        <Section title="BENCHMARK RESULTS">
          <div className="luxury-card p-8 mb-8">
            <div className="mb-6 text-center">
              <p className="text-textSecondary font-light">
                Comprehensive evaluation across 5 test images • Generated December 2, 2025
              </p>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-4 px-4 text-primary text-sm font-light tracking-wide uppercase">Rank</th>
                    <th className="text-left py-4 px-4 text-primary text-sm font-light tracking-wide uppercase">Method</th>
                    <th className="text-right py-4 px-4 text-primary text-sm font-light tracking-wide uppercase">PSNR (dB)</th>
                    <th className="text-right py-4 px-4 text-primary text-sm font-light tracking-wide uppercase">SSIM</th>
                    <th className="text-right py-4 px-4 text-primary text-sm font-light tracking-wide uppercase">Consistency</th>
                  </tr>
                </thead>
                <tbody>
                  {benchmarkResults.map((result, i) => (
                    <tr key={i} className="border-b border-border/30 hover:bg-primary/5 transition-colors">
                      <td className="py-4 px-4">
                        <span className={`text-lg font-light ${result.rank === 1 ? 'text-secondary' : 'text-textMuted'}`}>
                          #{result.rank}
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <span className={`font-light ${result.rank === 1 ? 'text-secondary' : 'text-textPrimary'}`}>
                          {result.method}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-right">
                        <span className="text-textSecondary font-light">
                          {result.psnr.toFixed(2)} <span className="text-textMuted text-xs">±{result.psnrStd.toFixed(2)}</span>
                        </span>
                      </td>
                      <td className="py-4 px-4 text-right">
                        <span className="text-textSecondary font-light">
                          {result.ssim.toFixed(4)} <span className="text-textMuted text-xs">±{result.ssimStd.toFixed(4)}</span>
                        </span>
                      </td>
                      <td className="py-4 px-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <div className="w-20 h-2 bg-border rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-primary"
                              style={{ width: `${Math.max(0, 100 - result.psnrStd * 50)}%` }}
                            />
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="luxury-card p-6 border-l-2 border-secondary">
              <h4 className="text-secondary text-sm font-light mb-2 tracking-wide uppercase">Best PSNR</h4>
              <p className="text-3xl font-light text-textPrimary mb-1">39.13 dB</p>
              <p className="text-textMuted text-sm font-light">DnCNN (Deep Learning)</p>
            </div>
            <div className="luxury-card p-6 border-l-2 border-secondary">
              <h4 className="text-secondary text-sm font-light mb-2 tracking-wide uppercase">Best SSIM</h4>
              <p className="text-3xl font-light text-textPrimary mb-1">0.9340</p>
              <p className="text-textMuted text-sm font-light">DnCNN (Deep Learning)</p>
            </div>
            <div className="luxury-card p-6 border-l-2 border-primary">
              <h4 className="text-primary text-sm font-light mb-2 tracking-wide uppercase">Most Consistent</h4>
              <p className="text-3xl font-light text-textPrimary mb-1">±0.53 dB</p>
              <p className="text-textMuted text-sm font-light">Median Filter (PSNR)</p>
            </div>
          </div>
        </Section>

        {/* Interactive Comparison */}
        <Section title="DENOISING COMPARISON">
          <div className="mb-8">
            <div className="flex flex-wrap gap-3 justify-center">
              {Object.entries(comparisons).map(([key, data]) => (
                <button
                  key={key}
                  onClick={() => setSelectedComparison(key)}
                  className={`px-4 py-2 text-xs font-light tracking-wide uppercase transition-all duration-400 ${
                    selectedComparison === key
                      ? 'bg-primary/10 border border-primary text-primary'
                      : 'border border-border text-textSecondary hover:border-primary/50 hover:text-primary'
                  }`}
                >
                  {data.title}
                </button>
              ))}
            </div>
          </div>

          <div className="luxury-card p-8">
            <p className="text-center text-textSecondary font-light mb-8">
              {comparisons[selectedComparison].description}
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Noisy */}
              <div>
                <h4 className="text-primary text-sm font-light mb-4 text-center tracking-wide uppercase">
                  Noisy Input
                </h4>
                <div className="border border-border hover:border-primary/50 transition-colors overflow-hidden">
                  <img
                    src={comparisons[selectedComparison].noisy}
                    alt="Noisy"
                    className="w-full h-auto"
                  />
                </div>
              </div>

              {/* Denoised */}
              <div>
                <h4 className="text-secondary text-sm font-light mb-4 text-center tracking-wide uppercase">
                  {selectedComparison === 'xray' ? 'Deep Learning Output' : 'Traditional Filter Output'}
                </h4>
                <div className="border border-border hover:border-primary/50 transition-colors overflow-hidden">
                  <img
                    src={comparisons[selectedComparison].traditional}
                    alt="Denoised"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Overview */}
        <Section title="OVERVIEW">
          <div className="space-y-4 text-textSecondary font-light leading-relaxed">
            <p>
              TryEverythingNet is a collaborative research project exploring the effectiveness of various image denoising techniques across traditional signal processing and modern deep learning approaches. Built as part of computer vision coursework, this system currently implements and compares five traditional filtering methods against a custom-trained DnCNN model.
            </p>
            <p>
              The project takes its name from the envisioned end goal: an adaptive system that applies multiple denoising strategies to corrupted images and automatically selects the best result based on quality metrics. Currently in Phase 3 of development, we've completed the traditional filtering pipeline and initial deep learning integration, focusing on Gaussian noise removal.
            </p>
            <p>
              This is a group effort where I've contributed to the deep learning architecture, training pipeline, and comparative analysis framework. The system processes medical X-ray images, synthetic test images, and natural photographs corrupted by various noise types including Gaussian, salt-and-pepper, and motion blur.
            </p>
          </div>
        </Section>

        {/* Technical Approach */}
        <Section title="TECHNICAL APPROACH">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="luxury-card p-8">
              <h3 className="text-primary text-lg font-light mb-6 tracking-wide uppercase">Traditional Methods</h3>
              <div className="space-y-4">
                <FilterMethod
                  name="Gaussian Blur"
                  description="Baseline smoothing filter using spatial convolution"
                  params="kernel_size, sigma"
                  strength="Fast, simple"
                  weakness="Blurs edges"
                />
                <FilterMethod
                  name="Median Filter"
                  description="Rank-order filter replacing pixels with neighborhood median"
                  params="kernel_size, iterations"
                  strength="Excellent for salt-and-pepper noise"
                  weakness="Can remove fine details"
                />
                <FilterMethod
                  name="Bilateral Filter"
                  description="Edge-preserving filter considering spatial and color similarity"
                  params="d, sigma_color, sigma_space"
                  strength="Preserves edges while smoothing"
                  weakness="Computationally expensive"
                />
                <FilterMethod
                  name="Non-Local Means"
                  description="Patch-based method averaging similar image regions"
                  params="h, template_window, search_window"
                  strength="State-of-the-art traditional method"
                  weakness="Very slow, high complexity"
                />
                <FilterMethod
                  name="Wiener Filter"
                  description="Optimal linear filter operating in frequency domain"
                  params="window_size, noise_variance"
                  strength="Optimal for Gaussian noise"
                  weakness="Requires noise estimation"
                />
              </div>
            </div>

            <div className="luxury-card p-8">
              <h3 className="text-secondary text-lg font-light mb-6 tracking-wide uppercase">Deep Learning Approach</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-primary text-sm font-light mb-3 tracking-wide uppercase">DnCNN Architecture</h4>
                  <ul className="space-y-2 text-textSecondary text-sm font-light">
                    <li>• 17-layer convolutional neural network (~1.5M parameters)</li>
                    <li>• Residual learning: predicts noise instead of clean image</li>
                    <li>• Formula: Clean = Noisy - Predicted_Noise</li>
                    <li>• Batch normalization + ReLU activation</li>
                    <li>• 3×3 convolution kernels throughout</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-primary text-sm font-light mb-3 tracking-wide uppercase">Training Configuration</h4>
                  <ul className="space-y-2 text-textSecondary text-sm font-light">
                    <li>• Dataset: X-ray images + synthetic noise (σ=15, 25, 55)</li>
                    <li>• Loss: MSE between predicted and actual noise</li>
                    <li>• Optimizer: Adam with learning rate scheduling</li>
                    <li>• Batch size: 128 patches (40×40 pixels)</li>
                    <li>• Data augmentation: random flips, rotations</li>
                    <li>• Early stopping with validation monitoring</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-primary text-sm font-light mb-3 tracking-wide uppercase">Current Limitations</h4>
                  <ul className="space-y-2 text-textSecondary text-sm font-light">
                    <li>• Only Gaussian noise model trained so far</li>
                    <li>• Grayscale only (single-channel input)</li>
                    <li>• Fixed noise levels (blind denoising not yet achieved)</li>
                    <li>• Models for salt-and-pepper and motion blur in development</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Quality Metrics */}
        <Section title="EVALUATION METRICS">
          <div className="grid md:grid-cols-3 gap-6">
            <MetricCard
              title="PSNR"
              subtitle="Peak Signal-to-Noise Ratio"
              description="Logarithmic measure of reconstruction quality. Higher is better. Typical range: 20-40 dB for denoised images."
            />
            <MetricCard
              title="SSIM"
              subtitle="Structural Similarity Index"
              description="Perceptual quality metric considering luminance, contrast, and structure. Range: 0-1, where 1 is perfect."
            />
            <MetricCard
              title="MSE"
              subtitle="Mean Squared Error"
              description="Average squared difference between pixels. Lower is better. Less correlated with human perception than SSIM."
            />
          </div>
        </Section>

        {/* Key Features */}
        <Section title="IMPLEMENTED FEATURES">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              'Unified denoising framework for all methods',
              'Automated PSNR/SSIM/MSE evaluation',
              'Bayesian parameter auto-tuning',
              'Iterative filtering support',
              'Batch processing pipeline',
              'Noise level estimation (MAD method)',
              'Frequency-domain Wiener filter with FFT visualization',
              'DnCNN residual learning architecture',
              'PyTorch dataset with lazy loading',
              'Training with early stopping & checkpointing',
              'TensorBoard integration for monitoring',
              'CLI for all denoising experiments'
            ].map((feature, i) => (
              <div key={i} className="flex items-start gap-3 luxury-card p-4 hover:border-primary/50 transition-colors">
                <span className="text-primary text-lg">✓</span>
                <span className="text-textSecondary text-sm font-light">{feature}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* Technologies */}
        <Section title="TECH STACK">
          <div className="flex flex-wrap gap-3">
            {['Python', 'PyTorch', 'OpenCV', 'Scikit-Image', 'Matplotlib', 'NumPy', 'Pandas', 'SciPy', 'TensorBoard'].map((tech, i) => (
              <span
                key={i}
                className="px-4 py-2 border border-primary/30 text-textSecondary hover:border-primary transition-colors text-sm font-light"
              >
                {tech}
              </span>
            ))}
          </div>
        </Section>

        {/* Challenges */}
        <Section title="TECHNICAL CHALLENGES">
          <div className="space-y-6">
            <Challenge
              title="Traditional vs. Deep Learning Trade-offs"
              description="Traditional filters are interpretable and require no training but struggle with complex noise patterns. Deep learning excels at learned noise patterns but requires large datasets and lacks interpretability. Finding the right balance for each use case."
            />
            <Challenge
              title="Multi-Noise Type Training"
              description="Training a single model to handle Gaussian, salt-and-pepper, and motion blur simultaneously (blind denoising) proves difficult. Currently developing separate models for each noise type before attempting unified architecture."
            />
            <Challenge
              title="Real-Time Performance on Medical Images"
              description="Medical X-ray denoising requires both high quality and reasonable speed. Optimizing model inference through quantization and efficient patch processing to achieve <50ms latency on CPU."
            />
            <Challenge
              title="Parameter Auto-Tuning Efficiency"
              description="Bayesian optimization for traditional filter parameters is expensive. Implemented smart caching and parallel evaluation to reduce tuning time from hours to minutes."
            />
          </div>
        </Section>

        {/* Future Development */}
        <Section title="ROADMAP">
          <div className="luxury-card p-8">
            <div className="space-y-6">
              <PhaseItem
                phase="Phase 4"
                status="Planned"
                title="Adaptive Filter Selection"
                items={[
                  'Implement automatic best-filter selection based on quality metrics',
                  'Train noise-type classifier for intelligent method routing',
                  'Develop ensemble approach combining multiple denoising outputs',
                  'Iterative refinement with convergence detection'
                ]}
              />
              <PhaseItem
                phase="Phase 5"
                status="Future"
                title="Production System"
                items={[
                  'Real-time web interface for image upload and denoising',
                  'Multi-model support (separate DnCNN for each noise type)',
                  'Blind denoising without prior noise knowledge',
                  'REST API for integration with medical imaging systems'
                ]}
              />
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
      <span className="animated-gradient">[{title}]</span>
    </h2>
    {children}
  </motion.section>
)

const FilterMethod = ({ name, description, params, strength, weakness }) => (
  <div className="border-l-2 border-primary/30 pl-4">
    <h4 className="text-primary text-sm font-light mb-1 tracking-wide">{name}</h4>
    <p className="text-textSecondary text-xs font-light mb-2">{description}</p>
    <div className="flex gap-4 text-xs font-light">
      <span className="text-textMuted">Params: {params}</span>
    </div>
    <div className="flex gap-4 text-xs font-light mt-1">
      <span className="text-green-400">+ {strength}</span>
      <span className="text-neural">- {weakness}</span>
    </div>
  </div>
)

const MetricCard = ({ title, subtitle, description }) => (
  <div className="luxury-card p-6">
    <h3 className="text-2xl font-light text-primary mb-2">{title}</h3>
    <h4 className="text-xs font-light text-textMuted mb-4 tracking-wide uppercase">{subtitle}</h4>
    <p className="text-textSecondary text-sm font-light leading-relaxed">{description}</p>
  </div>
)

const Challenge = ({ title, description }) => (
  <div className="luxury-card p-6">
    <div className="flex items-start gap-3 mb-3">
      <span className="text-secondary text-xl">⚠</span>
      <h4 className="text-secondary font-light text-lg">{title}</h4>
    </div>
    <p className="text-textSecondary font-light leading-relaxed">{description}</p>
  </div>
)

const PhaseItem = ({ phase, status, title, items }) => (
  <div>
    <div className="flex items-center gap-4 mb-4">
      <span className="text-primary font-light text-lg">{phase}</span>
      <span className="px-3 py-1 text-xs font-light border border-textMuted text-textMuted tracking-wide uppercase">
        {status}
      </span>
      <h4 className="text-textPrimary font-light text-lg">{title}</h4>
    </div>
    <ul className="space-y-2 ml-6">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3 text-textSecondary font-light">
          <span className="text-primary mt-1">→</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
)

export default TryEverythingNetDetail
