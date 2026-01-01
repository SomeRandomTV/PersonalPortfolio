import React, { useEffect, useMemo, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useAnimation } from 'framer-motion'
import useKoiOcclusionManager from '../hooks/useKoiOcclusionManager'

// Helpers
const rand = (min, max) => Math.random() * (max - min) + min
const pick = (arr) => arr[Math.floor(Math.random() * arr.length)]

// KoiSVG - parametric top-down koi renderer (kept for possible external use)
export const KoiSVG = ({ bodyGradient = ['#fff', '#ccc'], finColor = '#ddd', tailColor = '#bbb', spineColor = '#7A7F84', patterns = [], width = 160, height = 80 }) => (
  <svg width={width} height={height} viewBox="0 0 160 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
    <defs>
      <linearGradient id="koiBodyGrad" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor={bodyGradient[0]} />
        <stop offset="100%" stopColor={bodyGradient[1]} />
      </linearGradient>
    </defs>
    <g>
      <path d="M20 40 C28 18, 60 14, 96 18 C124 22, 138 34, 140 40 C138 46, 124 58, 96 62 C60 66, 28 62, 20 40 Z" fill="url(#koiBodyGrad)" />
      <path d="M44 40 C62 36, 82 36, 100 40" stroke={spineColor} strokeWidth="4" strokeLinecap="round" fill="none" />
      <ellipse cx="34" cy="40" rx="10" ry="8" fill="#FFFFFF" opacity="0.55" />
      <path d="M56 44 C46 58, 38 60, 36 56 C38 50, 48 44, 56 44 Z" fill={finColor} opacity="0.9" />
      <path d="M56 36 C46 22, 38 20, 36 24 C38 30, 48 36, 56 36 Z" fill={finColor} opacity="0.9" />
      <rect x="136" y="36" width="6" height="8" rx="3" fill={tailColor} />
      <path d="M142 40 C154 28, 160 30, 160 40 C160 50, 154 52, 142 40 Z" fill={tailColor} />
      {patterns.map((p, i) => (
        <path key={i} d={p.d} fill={p.fill} opacity={p.opacity || 1} />
      ))}
    </g>
  </svg>
)

// Predefined variants mapped to exact SVG colors/patterns provided
const VARIANTS = {
  gold: {
    bodyGradient: ['#F5E6B0', '#9FA4A8'],
    finColor: '#C9CCD0',
    tailColor: '#7A7F84',
    spineColor: '#7A7F84',
    spineWidth: 4,
    patterns: [
      { d: 'M56 44 C46 58, 38 60, 36 56 C38 50, 48 44, 56 44 Z', fill: '#C9CCD0', opacity: 0.85 },
      { d: 'M56 36 C46 22, 38 20, 36 24 C38 30, 48 36, 56 36 Z', fill: '#C9CCD0', opacity: 0.85 }
    ]
  },
  tricolor: {
    bodyGradient: ['#FFFFFF', '#1C1C1C'],
    finColor: '#FFFFFF',
    tailColor: '#1C1C1C',
    spineColor: '#000000',
    spineWidth: 4,
    patterns: [
      { d: 'M38 32 C48 24, 62 26, 68 34 C62 40, 48 40, 38 32 Z', fill: '#B11212' },
      { d: 'M70 42 C82 36, 96 38, 102 44 C94 48, 80 48, 70 42 Z', fill: '#B11212' }
    ]
  },
  classic: {
    bodyGradient: ['#FFFFFF', '#F28C38'],
    finColor: '#FFE6D1',
    tailColor: '#1C1C1C',
    spineColor: '#F28C38',
    spineWidth: 4,
    patterns: [
      { d: 'M36 34 C48 24, 62 26, 68 34 C60 40, 48 40, 36 34 Z', fill: '#F28C38' },
      { d: 'M78 42 C90 36, 104 38, 110 44 C102 48, 88 48, 78 42 Z', fill: '#1C1C1C' }
    ]
  }
}

// Koi main component
const Koi = ({
  id,
  direction = 'random',
  duration = 24,
  delay = 0,
  y = null,
  scale = 1,
  variant = 'random'
}) => {
  const instanceId = useMemo(() => id || `koi-${Math.random().toString(36).slice(2,9)}`, [id])
  const chosenDirection = useMemo(() => {
    if (direction === 'random') return Math.random() > 0.5 ? 'left-to-right' : 'right-to-left'
    return direction
  }, [direction])

  const chosenVariant = useMemo(() => {
    if (variant === 'random') return pick(Object.keys(VARIANTS))
    return variant
  }, [variant])

  const cfg = VARIANTS[chosenVariant] || VARIANTS.classic

  const svgRef = useRef(null)
  const visualRef = useRef(null)
  useKoiOcclusionManager(instanceId, svgRef, visualRef)

  // randomize vertical position if not provided (vh -> px)
  const [baseY, setBaseY] = useState(() => {
    if (typeof y === 'number') return y
    return null
  })

  // seed wobble parameters
  const wobble = useMemo(() => {
    const count = Math.floor(rand(2,5))
    return Array.from({ length: count }).map(() => ({ amp: rand(6, 18), freq: rand(0.6, 1.6), phase: rand(0, Math.PI * 2) }))
  }, [])

  const tailAnim = useAnimation()
  const finAnim = useAnimation()

  useEffect(() => {
    tailAnim.start({ rotate: [-10, 12, -8], transition: { duration: rand(0.8, 1.6), repeat: Infinity, ease: 'easeInOut' } })
    finAnim.start({ rotate: [6, -6, 6], transition: { duration: rand(1.2, 2.2), repeat: Infinity, ease: 'easeInOut' } })
  }, [tailAnim, finAnim])

  // motion values
  const x = useMotionValue(0)
  const yMotion = useMotionValue(0)
  const scaleY = useMotionValue(1)

  // breathing spring for smoothness
  const scaleYSpring = useSpring(scaleY, { stiffness: 60, damping: 12 })

  // compute start and end X in px, and compute baseY in px
  const [startX, setStartX] = useState(0)
  const [endX, setEndX] = useState(0)
  const [remountKey, setRemountKey] = useState(0)
  
  // small instance seed for phase offsets
  const instanceSeed = useMemo(() => Math.random() * 10000, [])

  useEffect(() => {
    function computeBounds() {
      const w = window.innerWidth || 1024
      const h = window.innerHeight || 768
      const buffer = 160 * (scale || 1)
      if (chosenDirection === 'left-to-right') {
        setStartX(-buffer)
        setEndX(w + buffer)
      } else {
        setStartX(w + buffer)
        setEndX(-buffer)
      }

      if (baseY === null) {
        const vh = rand(10, 85)
        setBaseY((vh / 100) * h)
      }
    }

    computeBounds()
    let resizeTimer = null
    function onResize() {
      clearTimeout(resizeTimer)
      resizeTimer = setTimeout(() => setRemountKey(k => k + 1), 180)
    }

    window.addEventListener('resize', onResize)
    window.addEventListener('orientationchange', onResize)
    window.addEventListener('scroll', onResize)
    return () => {
      window.removeEventListener('resize', onResize)
      window.removeEventListener('orientationchange', onResize)
      window.removeEventListener('scroll', onResize)
      if (resizeTimer) clearTimeout(resizeTimer)
    }
  }, [chosenDirection, scale, baseY, remountKey])

  // orientation flip: if moving right-to-left, flip horizontally
  const flipped = chosenDirection === 'right-to-left'

  // Animation RAF loop: drive x (translateX) and yMotion (translateY) using requestAnimationFrame.
  // Uses fractional progress for continuous looping, applies vertical wobble, and small "breathing" scaleY.
  useEffect(() => {
    let mounted = true
    let raf = null

    const halfH = (80 * (scale || 1)) / 2

    const durationMs = Math.max(100, (duration || 24) * 1000)
    const delayMs = (delay || 0) * 1000

    const localStart = startX === 0 && endX === 0 ? (chosenDirection === 'left-to-right' ? -160 * (scale || 1) : (window.innerWidth || 1024) + 160 * (scale || 1)) : startX
    const localEnd = startX === 0 && endX === 0 ? (chosenDirection === 'left-to-right' ? (window.innerWidth || 1024) + 160 * (scale || 1) : -160 * (scale || 1)) : endX

    const startTime = performance.now() + delayMs

    function frame(now) {
      if (!mounted) return

      // fractional progress for looping (0..1)
      const t = (now - startTime) / durationMs
      const frac = t - Math.floor(t)

      const xPos = localStart + (localEnd - localStart) * frac
      x.set(xPos)

      // vertical wobble (sum of sin waves) — use time in seconds
      const s = now / 1000
      let wob = 0
      for (const w of wobble) {
        wob += Math.sin(s * w.freq * 2 * Math.PI + w.phase + instanceSeed) * w.amp
      }

      const baseYPx = (baseY !== null ? baseY : ((window.innerHeight || 768) * 0.45)) - halfH
      yMotion.set(baseYPx + wob)

      // gentle breathing
      const breath = 1 + Math.sin(s * 1.6 + instanceSeed) * 0.02
      scaleY.set(breath)

      raf = requestAnimationFrame(frame)
    }

    raf = requestAnimationFrame(frame)

    return () => {
      mounted = false
      if (raf) cancelAnimationFrame(raf)
    }
  // intentionally include start/end/baseY/remountKey so loop restarts when layout changes
  }, [startX, endX, baseY, duration, delay, wobble, scale, chosenDirection, remountKey])

  // inline style for container: translateX via motion value and translateY via yMotion
  return (
    <motion.svg
      key={instanceId + '-' + remountKey}
      ref={svgRef}
      style={{ position: 'absolute', left: 0, top: 0, pointerEvents: 'none', x, y: yMotion }}
      className="koi-svg"
      width={160 * scale}
      height={80 * scale}
      viewBox="0 0 160 80"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <filter id="koiDepthBlur" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" />
        </filter>
      </defs>

      <motion.g
        ref={visualRef}
        style={{ transformOrigin: '50% 50%', scaleY: scaleYSpring }}
        transform={flipped ? `scale(-1,1) translate(-160,0)` : undefined}
      >
        {/* Tail group animated independently */}
        <motion.g animate={tailAnim} style={{ originX: '150px', originY: '40px' }}>
          {/* tail shapes drawn in KoiSVG; reuse internal shapes here for animation hook */}
          <path d="M142 40 C154 28, 160 30, 160 40 C160 50, 154 52, 142 40 Z" fill={cfg.tailColor} />
        </motion.g>

        {/* Fin group animated independently */}
        <motion.g animate={finAnim} style={{ originX: '48px', originY: '44px' }}>
          <path d="M56 44 C46 58, 38 60, 36 56 C38 50, 48 44, 56 44 Z" fill={cfg.finColor} opacity="0.9" />
          <path d="M56 36 C46 22, 38 20, 36 24 C38 30, 48 36, 56 36 Z" fill={cfg.finColor} opacity="0.9" />
        </motion.g>

        {/* Body and overlays via KoiSVG internals */}
        <g>
          <path d="M20 40 C28 18, 60 14, 96 18 C124 22, 138 34, 140 40 C138 46, 124 58, 96 62 C60 66, 28 62, 20 40 Z" fill={`url(#koi-${instanceId}-grad)`} />
          <defs>
            <linearGradient id={`koi-${instanceId}-grad`} x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor={cfg.bodyGradient[0]} />
              <stop offset="100%" stopColor={cfg.bodyGradient[1]} />
            </linearGradient>
          </defs>

          <ellipse cx="34" cy="40" rx="10" ry="8" fill="#FFFFFF" opacity="0.55" />
          <path d="M44 40 C62 36, 82 36, 100 40" stroke={cfg.spineColor} strokeWidth={cfg.spineWidth || 4} strokeLinecap="round" fill="none" />

          {/* patterns */}
          {cfg.patterns.map((p, i) => (
            <path key={i} d={p.d} fill={p.fill} opacity={p.opacity || 1} />
          ))}

          {/* tail base */}
          <rect x="136" y="36" width="6" height="8" rx="3" fill={cfg.tailColor} />
        </g>
      </motion.g>
    </motion.svg>
  )
}

export default Koi
