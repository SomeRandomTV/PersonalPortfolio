
import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import axiomData from '../data/axiom.json'

const AxiomDetail = () => {
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
            AXIOM
          </h1>
          <p className="text-xl text-textSecondary max-w-3xl mx-auto font-light leading-relaxed mb-8">
            {axiomData.overview}
          </p>
        </motion.div>

        {/* Key Features */}
        <Section title="KEY FEATURES">
          <div className="luxury-card p-8">
            <ul className="space-y-3 text-textSecondary font-light">
              {axiomData.keyFeatures.map((feature, i) => (
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
              {axiomData.challenges.map((c, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-secondary">•</span>
                  <span><b>{c.challenge}</b> <span className="text-textMuted">{c.solution}</span></span>
                </li>
              ))}
            </ul>
          </div>
        </Section>
        {/* Key Principles */}
        <Section title="DESIGN PRINCIPLES">
          <div className="grid md:grid-cols-3 gap-6">
            <PrincipleCard
              icon="🔒"
              title="Privacy-First"
              description="All data processing occurs locally. Zero external API calls, no cloud dependencies. User data never leaves the device, ensuring complete privacy and HIPAA-readiness for future healthcare deployment."
            />
            <PrincipleCard
              icon="🔌"
              title="Modular & Extensible"
              description="Component-based architecture with clear interfaces. Each module (VA, Bus, State, Policy) can be upgraded or replaced independently. Plugin architecture supports future ML/NLP integration."
            />
            <PrincipleCard
              icon="⚡"
              title="Event-Driven"
              description="Asynchronous pub/sub messaging enables decoupled components. Non-blocking I/O throughout the system. Observers can subscribe to events without tight coupling to publishers."
            />
          </div>
        </Section>

        {/* Technical Stack */}
        <Section title="TECHNICAL FOUNDATION">
          <div className="luxury-card p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-primary text-sm font-light mb-4 tracking-wide uppercase">Core Technologies</h4>
                <div className="space-y-3">
                  <TechItem name="Python 3.10+" description="Primary runtime with asyncio for concurrency" />
                  <TechItem name="SQLite" description="Embedded database for zero-dependency persistence" />
                  <TechItem name="asyncio" description="Event loop and async/await patterns throughout" />
                  <TechItem name="Speech Recognition" description="Local ASR engines for voice input" />
                  <TechItem name="Speech Synthesis" description="Local TTS engines for voice output" />
                </div>
              </div>
              <div>
                <h4 className="text-primary text-sm font-light mb-4 tracking-wide uppercase">Architecture Patterns</h4>
                <div className="space-y-3">
                  <TechItem name="Pub/Sub" description="Observer pattern for event-driven communication" />
                  <TechItem name="REPL" description="Read-Eval-Print Loop for interactive CLI" />
                  <TechItem name="Repository Pattern" description="Abstraction layer for data persistence" />
                  <TechItem name="Strategy Pattern" description="Pluggable intent detection and policy rules" />
                  <TechItem name="Modular Design" description="Clear separation of concerns across components" />
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Core Capabilities */}
        <Section title="IMPLEMENTED CAPABILITIES">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              'Multi-modal input processing (text & speech)',
              'Intent detection and classification',
              'Conversational response generation',
              'Full conversation history logging',
              'Session management and context retention',
              'Asynchronous event propagation',
              'Multi-subscriber event routing',
              'Policy-based response validation',
              'Graceful error handling and recovery',
              'Cross-platform CLI interface',
              'Configurable system parameters',
              'Comprehensive logging and debugging'
            ].map((capability, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className="flex items-start gap-3 luxury-card p-4 hover:border-primary/50 transition-colors"
              >
                <span className="text-primary text-lg">✓</span>
                <span className="text-textSecondary text-sm font-light">{capability}</span>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Use Cases */}
        <Section title="CURRENT USE CASES">
          <div className="space-y-6">
            <UseCase
              title="Personal Virtual Assistant"
              description="Basic conversational interaction with time queries, greetings, small talk, and general assistance. All conversations logged locally for continuity across sessions."
            />
            <UseCase
              title="Development & Testing Platform"
              description="Foundational runtime for experimenting with local AI systems. Modular architecture allows testing different NLP approaches, intent detection strategies, and response generation methods."
            />
            <UseCase
              title="Privacy-First AI Research"
              description="Platform for exploring healthcare AI applications where data locality is critical. All processing occurs on-device, making it suitable for HIPAA-sensitive environments."
            />
          </div>
        </Section>

        {/* Future Phases */}
        <Section title="FUTURE DEVELOPMENT">
          <div className="luxury-card p-8">
            <div className="space-y-8">
              <PhaseItem
                phase="Phase 2"
                status="Planned"
                title="Sensor Integration Layer"
                description="Stub implementations for future AuraLens computer vision system and other sensor inputs. Event bus expansion to handle real-time sensor data streams."
              />
              <PhaseItem
                phase="Phase 3"
                status="Research"
                title="Advanced ML/NLP Capabilities"
                description="Integration of local language models for more sophisticated intent understanding. Context-aware response generation beyond rule-based templates."
              />
              <PhaseItem
                phase="Phase 4"
                status="Future"
                title="Healthcare Compliance & Deployment"
                description="Full HIPAA compliance implementation in policy engine. Production deployment for caregiver assistance and patient monitoring applications."
              />
            </div>
          </div>
        </Section>

        {/* Technical Challenges */}
        <Section title="ENGINEERING CHALLENGES">
          <div className="space-y-6">
            <Challenge
              title="Local-Only Inference Constraints"
              description="Achieving acceptable response quality and speed without cloud-based LLMs required careful architecture of rule-based systems with clear expansion paths to local models. Balancing capability with resource constraints on standard hardware."
            />
            <Challenge
              title="Async Event Coordination"
              description="Managing complex event flows across multiple subscribers without race conditions or deadlocks. Implementing proper error handling in async contexts while maintaining system responsiveness."
            />
            <Challenge
              title="Extensibility vs. Simplicity"
              description="Designing Phase 1 to be production-ready while maintaining clean extension points for future capabilities. Avoiding over-engineering while ensuring the architecture can support sensor integration and ML expansion."
            />
            <Challenge
              title="Cross-Platform Consistency"
              description="Ensuring identical behavior across Linux, macOS, and Windows with varying filesystem semantics, audio subsystems, and Python runtime differences. Achieving comprehensive test coverage on all platforms."
            />
          </div>
        </Section>

        {/* Privacy & Compliance */}
        <Section title="PRIVACY & COMPLIANCE">
          <div className="luxury-card p-8 border-l-4 border-primary">
            <div className="space-y-4 text-textSecondary font-light leading-relaxed">
              <p>
                <strong className="text-primary">Zero External Dependencies:</strong> AXIOM processes all data locally without any network calls during normal operation. No telemetry, no cloud APIs, no external services. User conversations and system state never leave the device.
              </p>
              <p>
                <strong className="text-primary">HIPAA-Ready Architecture:</strong> The policy engine framework is designed with healthcare compliance in mind. While full HIPAA certification is planned for future phases, the foundational architecture ensures data handling practices align with privacy regulations.
              </p>
              <p>
                <strong className="text-primary">Transparent Data Flow:</strong> All conversation logging is explicit and user-controlled. SQLite database remains on local storage with no synchronization or backup to external services. Users maintain complete ownership of their data.
              </p>
              <p>
                <strong className="text-primary">Audit Trail:</strong> Comprehensive event logging provides full system observability for debugging and compliance verification. All component interactions are traceable through the event bus.
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

const PrincipleCard = ({ icon, title, description }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="luxury-card p-6 text-center"
  >
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-primary text-lg font-light mb-3 tracking-wide uppercase">{title}</h3>
    <p className="text-textSecondary text-sm font-light leading-relaxed">{description}</p>
  </motion.div>
)

const TechItem = ({ name, description }) => (
  <div className="border-l-2 border-primary/30 pl-4">
    <h5 className="text-textPrimary text-sm font-light mb-1">{name}</h5>
    <p className="text-textMuted text-xs font-light">{description}</p>
  </div>
)

const UseCase = ({ title, description }) => (
  <div className="luxury-card p-6">
    <div className="flex items-start gap-3 mb-3">
      <span className="text-secondary text-xl">→</span>
      <h4 className="text-primary font-light text-lg">{title}</h4>
    </div>
    <p className="text-textSecondary font-light leading-relaxed">{description}</p>
  </div>
)

const Challenge = ({ title, description }) => (
  <div className="luxury-card p-6">
    <div className="flex items-start gap-3 mb-3">
      <span className="text-secondary text-xl">⚙</span>
      <h4 className="text-secondary font-light text-lg">{title}</h4>
    </div>
    <p className="text-textSecondary font-light leading-relaxed">{description}</p>
  </div>
)

const PhaseItem = ({ phase, status, title, description }) => (
  <div className="border-l-2 border-primary/30 pl-6">
    <div className="flex items-center gap-4 mb-3">
      <span className="text-primary font-light text-lg">{phase}</span>
      <span className="px-3 py-1 text-xs font-light border border-textMuted text-textMuted tracking-wide uppercase">
        {status}
      </span>
    </div>
    <h4 className="text-textPrimary font-light text-xl mb-3">{title}</h4>
    <p className="text-textSecondary font-light leading-relaxed">{description}</p>
  </div>
)

export default AxiomDetail
