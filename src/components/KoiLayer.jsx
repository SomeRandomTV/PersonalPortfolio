import React, { useEffect, useMemo } from 'react'
import Koi from './Koi'
import koiManager from '../context/koiManager'

// KoiLayer: fixed viewport-anchored container that renders multiple Koi instances.
// Accepts `instances` prop: array of config objects passed to Koi.
const KoiLayer = ({ instances = null }) => {
  // Generate truly randomized koi instances
  const koiInstances = useMemo(() => {
    if (instances && instances.length > 0) return instances

    // Default: spawn 4-6 random fish per page
    const count = Math.floor(Math.random() * 3) + 4
    const variants = ['gold', 'tricolor', 'classic']
    const directions = ['left-to-right', 'right-to-left']

    return Array.from({ length: count }).map((_, i) => ({
      id: `koi-${Date.now()}-${i}-${Math.random().toString(36).slice(2, 9)}`,
      direction: directions[Math.floor(Math.random() * directions.length)],
      duration: Math.random() * 20 + 16, // 16-36 seconds
      delay: Math.random() * 8, // 0-8 second stagger
      y: Math.random() * 100, // 0-100vh (full viewport height)
      scale: Math.random() * 0.4 + 0.7, // 0.7-1.1x
      variant: variants[Math.floor(Math.random() * variants.length)]
    }))
  }, [instances])

  const list = koiInstances

  useEffect(() => {
    // in case occluder elements mount after the koi layer, rescan DOM for occluders
    koiManager.rescanOccluders()
  }, [])

  return (
    <div className="koi-layer pointer-events-none">
      {list.map(cfg => (
        <Koi key={cfg.id} {...cfg} />
      ))}
    </div>
  )
}

export default KoiLayer

