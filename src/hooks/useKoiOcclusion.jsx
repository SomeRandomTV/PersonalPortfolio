import { useEffect, useRef } from 'react'

// Hook: useKoiOcclusion
// Observes elements with `data-koi-occluder` and applies blur + dim
// to the supplied visualRef (an SVG <g> element) when the koi intersects
// an occluder. Designed to be light-weight: checks run on a timer
// (throttled) to avoid layout thrash. Returns nothing; it mutates
// the `visualRef.current.style` inline for performance.
export default function useKoiOcclusion(visualRef) {
  const rafRef = useRef(null)
  const lastCheckRef = useRef(0)

  useEffect(() => {
    if (!visualRef || !visualRef.current) return

    let mounted = true

    function getOccluders() {
      return Array.from(document.querySelectorAll('[data-koi-occluder]'))
    }

    function check() {
      if (!mounted) return
      const now = performance.now()
      // throttle checks to ~120ms
      if (now - lastCheckRef.current < 120) {
        rafRef.current = requestAnimationFrame(check)
        return
      }
      lastCheckRef.current = now

      const el = visualRef.current
      if (!el) return

      const koiRect = el.getBoundingClientRect()
      const occluders = getOccluders()

      // If any occluder overlaps the koi bounding box, mark occluded
      let occluded = false
      for (const o of occluders) {
        const r = o.getBoundingClientRect()
        const overlap = !(r.right < koiRect.left || r.left > koiRect.right || r.bottom < koiRect.top || r.top > koiRect.bottom)
        if (overlap) { occluded = true; break }
      }

      if (occluded) {
        // apply CSS blur + dim
        el.style.transition = 'filter 180ms linear, opacity 180ms linear'
        el.style.filter = 'blur(3px)'
        el.style.opacity = '0.7'
      } else {
        el.style.transition = 'filter 250ms linear, opacity 250ms linear'
        el.style.filter = ''
        el.style.opacity = '1'
      }

      rafRef.current = requestAnimationFrame(check)
    }

    rafRef.current = requestAnimationFrame(check)

    return () => {
      mounted = false
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [visualRef])
}
