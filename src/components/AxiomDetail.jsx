import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const AxiomDetail = () => {
  const navigate = useNavigate()
  const [activeComponent, setActiveComponent] = useState('bus')

  const systemComponents = {
    bus: {
      name: 'Event Bus',
      icon: '⚡',
      description: 'Asynchronous publish/subscribe messaging system enabling decoupled component communication',
      features: [
        'Event-driven architecture with observer pattern',
        'Multi-subscriber support for each event type',
        'Non-blocking async event propagation',
        'Built-in event logging for debugging'
      ]
    },
    va: {
      name: 'Virtual Assistant',
      icon: '🎯',
      description: 'Conversational interface supporting text and speech input with local inference',
      features: [
        'Multi-modal input processing (text/speech)',
        'Rule-based intent detection and classification',
        'Template-based response generation',
        'Extensible architecture for ML/NLP integration'
      ]
    },
    state: {
      name: 'State Store',
      icon: '💾',
      description: 'SQLite-backed persistence layer for conversation history and system state',
      features: [
        'Zero-dependency embedded database',
        'Conversation logging with full context',
        'Session management and retrieval',
        'Schema designed for future sensor data expansion'
      ]
    },
    policy: {
      name: 'Policy Engine',
      icon: '🛡️',
      description: 'Compliance framework enforcing response guardrails and privacy policies',
      features: [
        'Modular policy enforcement system',
        'Response validation and filtering',
        'Framework ready for HIPAA compliance',
        'Extensible rule-based architecture'
      ]
    }
  }

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
            <span className="px-4 py-1.5 text-xs font-light border border-green-500/50 text-green-400 tracking-luxury-wide uppercase">
              Phase 1 Complete
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-light text-textPrimary mb-6 tracking-tight">
            AXIOM
          </h1>
          
          <p className="text-xl text-textSecondary max-w-3xl mx-auto font-light leading-relaxed mb-8">
            ARA's eXtensible Intent & Orchestration Machine
          </p>

          <div className="flex flex-wrap gap-3 justify-center mb-8">
            <span className="px-3 py-1 border border-primary/30 text-primary text-xs font-light tracking-wide">
              Tools & Infrastructure
            </span>
            <span className="px-3 py-1 border border-primary/30 text-primary text-xs font-light tracking-wide">
              AI/ML
            </span>
            <span className="px-3 py-1 border border-textMuted/50 text-textMuted text-xs font-light tracking-wide">
              Private Repository
            </span>
          </div>

          <div className="text-textMuted font-light text-sm">
            Privacy-First Virtual Assistant Runtime • Local-Only Inference • Event-Driven Architecture
          </div>
        </motion.div>

        {/* Animated System Architecture */}
        <Section title="SYSTEM ARCHITECTURE">
          <div className="luxury-card p-8">
            {/* Component Selector */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              {Object.entries(systemComponents).map(([key, component]) => (
                <motion.button
                  key={key}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setActiveComponent(key)}
                  className={`p-4 border transition-all duration-400 ${
                    activeComponent === key
                      ? 'border-primary bg-primary/5'
                      : 'border-border hover:border-primary/50'
                  }`}
                >
                  <div className="text-3xl mb-2">{component.icon}</div>
                  <div className={`text-xs font-light tracking-wide uppercase ${
                    activeComponent === key ? 'text-primary' : 'text-textSecondary'
                  }`}>
                    {component.name}
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Component Details */}
            <motion.div
              key={activeComponent}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="border-l-2 border-primary/50 pl-6"
            >
              <h3 className="text-2xl font-light text-primary mb-4">
                {systemComponents[activeComponent].name}
              </h3>
              <p className="text-textSecondary font-light leading-relaxed mb-6">
                {systemComponents[activeComponent].description}
              </p>
              <div className="grid md:grid-cols-2 gap-3">
                {systemComponents[activeComponent].features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="text-primary -mt-1">→</span>
                    <span className="text-textSecondary text-sm font-light">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Data Flow Visualization */}
            <div className="mt-10 pt-10 border-t border-border/30">
              <h4 className="text-center text-textMuted text-xs font-light mb-6 tracking-wide uppercase">
                Event-Driven Message Flow
              </h4>
              <div className="flex items-center justify-center gap-4 flex-wrap">
                {['User Input', 'Event Bus', 'VA Core', 'Policy Check', 'State Store', 'Response'].map((node, i) => (
                  <React.Fragment key={node}>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                      className="px-4 py-2 border border-primary/30 text-textSecondary text-xs font-light"
                    >
                      {node}
                    </motion.div>
                    {i < 5 && <span className="text-primary">→</span>}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* Phase 1 Deliverables */}
        <Section title="PHASE 1 DELIVERABLES">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="luxury-card p-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">✓</span>
                <h3 className="text-primary text-lg font-light tracking-wide uppercase">Core Runtime Complete</h3>
              </div>
              <ul className="space-y-3 text-textSecondary font-light">
                <li className="flex items-start gap-3">
                  <span className="text-primary">•</span>
                  <span>Fully functional virtual assistant with conversational interface</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary">•</span>
                  <span>Asynchronous event bus with pub/sub pattern</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary">•</span>
                  <span>SQLite-backed conversation history and state management</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary">•</span>
                  <span>Cross-platform CLI interface (Linux, macOS, Windows)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary">•</span>
                  <span>Policy engine framework with extensible compliance hooks</span>
                </li>
              </ul>
            </div>

            <div className="luxury-card p-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">🎯</span>
                <h3 className="text-secondary text-lg font-light tracking-wide uppercase">Validation & Testing</h3>
              </div>
              <ul className="space-y-3 text-textSecondary font-light">
                <li className="flex items-start gap-3">
                  <span className="text-secondary">•</span>
                  <span>80%+ unit test coverage across all core components</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary">•</span>
                  <span>End-to-end integration tests for conversation flows</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary">•</span>
                  <span>Performance validated: &lt;2s response time (95th percentile)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary">•</span>
                  <span>Multi-platform deployment verification complete</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary">•</span>
                  <span>Comprehensive architecture and API documentation</span>
                </li>
              </ul>
            </div>
          </div>
        </Section>

        {/* Overview */}
        <Section title="OVERVIEW">
          <div className="space-y-4 text-textSecondary font-light leading-relaxed">
            <p>
              AXIOM is the orchestration engine powering the A.R.A. (Adaptive Real-time Assistant) system. Phase 1 establishes the foundational runtime with a privacy-first architecture designed for extensibility and future healthcare applications. All processing occurs locally with zero external dependencies or cloud services.
            </p>
            <p>
              The system implements an event-driven architecture where components communicate through an asynchronous message bus, enabling modular design and easy integration of future capabilities. The virtual assistant core provides conversational interaction through text and speech interfaces, with all conversations persisted to a local database for context retention.
            </p>
            <p>
              Built entirely in Python with asyncio at its core, AXIOM is designed to operate efficiently on standard desktop hardware while maintaining the architectural flexibility needed for future expansion into sensor integration, advanced ML capabilities, and healthcare compliance requirements.
            </p>
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
