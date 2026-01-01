import { useEffect } from 'react'
import koiManager from '../context/koiManager'

// Hook to register a koi instance with the shared koiManager
// Accepts svgRef and visualRef (both refs to DOM nodes) and an id
export default function useKoiOcclusionManager(id, svgRef, visualRef) {
  useEffect(() => {
    if (!svgRef || !svgRef.current || !visualRef || !visualRef.current) return
    koiManager.register(id, svgRef, visualRef)

    // ensure occluders are scanned (useful when pages mount occluder attributes dynamically)
    koiManager.rescanOccluders()

    return () => koiManager.unregister(id)
  }, [id, svgRef, visualRef])
}
