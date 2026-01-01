// Simple singleton Koi manager: registers koi refs and manages occlusion
const koiManager = (() => {
  const kois = new Map() // id -> { svgRef, visualRef }
  const occluders = new Set() // just track which elements are occluders
  let observer = null
  let raf = null
  let lastCheck = 0

  function initObserver() {
    if (observer) return
    observer = new IntersectionObserver(handleIO, { root: null, threshold: [0, 0.01] })
    // observe existing occluders in DOM
    const els = Array.from(document.querySelectorAll('[data-koi-occluder]'))
    els.forEach(e => observer.observe(e))
  }

  function handleIO(entries) {
    for (const entry of entries) {
      const el = entry.target
      if (entry.isIntersecting) {
        occluders.add(el)
      } else {
        occluders.delete(el)
      }
    }
  }

  function startRAF() {
    if (raf) return
    function tick(now) {
      // throttle to ~120ms
      if (now - lastCheck < 120) {
        raf = requestAnimationFrame(tick)
        return
      }
      lastCheck = now

      if (kois.size === 0) {
        raf = requestAnimationFrame(tick)
        return
      }

      // GET FRESH BOUNDING RECTS EVERY FRAME (don't cache them)
      const occluderRects = Array.from(occluders).map(el => el.getBoundingClientRect())

      kois.forEach(({ svgRef, visualRef }) => {
        try {
          const svg = svgRef && svgRef.current
          const vis = visualRef && visualRef.current
          if (!svg || !vis) return
          const koiRect = svg.getBoundingClientRect()

          let occluded = false
          for (const r of occluderRects) {
            const overlap = !(r.right < koiRect.left || r.left > koiRect.right || r.bottom < koiRect.top || r.top > koiRect.bottom)
            if (overlap) { occluded = true; break }
          }

          if (occluded) vis.classList.add('koi-occluded')
          else vis.classList.remove('koi-occluded')
        } catch (err) {
          // ignore individual errors
        }
      })

      raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
  }

  function observeNewOccluders() {
    if (!observer) return
    const els = Array.from(document.querySelectorAll('[data-koi-occluder]'))
    els.forEach(e => {
      if (!occluders.has(e)) {
        // start observing element so IO callbacks update occluders map
        observer.observe(e)
      }
    })
  }

  function register(id, svgRef, visualRef) {
    kois.set(id, { svgRef, visualRef })
    initObserver()
    observeNewOccluders()
    startRAF()
  }

  function unregister(id) {
    kois.delete(id)
  }

  // Also expose a helper to manually re-scan occluders (pages can call when they mount new content)
  function rescanOccluders() {
    if (!observer) initObserver()
    observeNewOccluders()
  }

  return { register, unregister, rescanOccluders }
})()

export default koiManager
