import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import experienceData from '../data/experience.json'
import KoiLayer from './KoiLayer'

const LifeInAsia = () => {
  const navigate = useNavigate()
  const exp = experienceData || {}
  const images = Array.isArray(exp.images) ? exp.images : []
  const [expandedIndex, setExpandedIndex] = useState(null)
  const [expandedGalleryIndex, setExpandedGalleryIndex] = useState(0)

  const timeline = [
    {
      date: '2024-06-07 — 2024-06-14',
      place: 'Seoul, South Korea',
      note: "To start us off, thank you to CRCC Asia for guiding me through such a great opportunity and the friendships I made along the way. While in Korea, my group stayed around Myeongdong / Euljiro. It was a massive culture shock at first — the streets, the lights, the smells — and the first thing we did after arriving was find some food. I still remember meeting my roommate: I said, ‘Yo, what's up I'm Alejandro’ and after a short silence I asked, ‘You like Star Wars?’ He said yes, and we bonded immediately.\n\nMarkets became a central part of my days — from Cheonggyecheon at night to the market alleys of Insadong. I tried everything from sweet corn dogs to live octopus; the food and the energy of the stalls are unforgettable. Myeongdong felt alive 24/7 — always crowded but in a polite way; it's where I met locals who became lasting friends. And the views from Seoul Tower were breathtaking — seeing the city spread beneath you with mountains on the horizon felt like a reset.",
      gallery: [
        { src: '/experience/Korea2024/Cheonggyecheon-Stream-Night.jpg', alt: 'Cheonggyecheon at night', caption: 'Night walk along Cheonggyecheon' },
        { src: '/experience/Korea2024/Insadong.jpg', alt: 'Insadong market', caption: 'Insadong market stalls' },
        { src: '/experience/Korea2024/Myeongdong-Shopping-Street.jpg', alt: 'Myeongdong shopping street', caption: 'Myeongdong — shopping street' },
        { src: '/experience/Korea2024/view-from-seoul-tower.jpg', alt: 'View from Seoul Tower', caption: 'View from N Seoul Tower' },
        { src: '/experience/Korea2024/seoul-tower.jpg', alt: 'Seoul Tower lit up', caption: 'Seoul Tower at night' }
      ],
      img: '/experience/Korea2024/Cheonggyecheon-Stream-Night.jpg',
      imgAlt: 'Cheonggyecheon stream at night'
    },
    {
      date: '2024-06-15',
      place: 'Nami Island, South Korea',
      note: 'Day trip to the scenic island — nature and quiet time.',
      img: '/experience/Korea2024/Cheonggyecheon-Stream.jpg',
      imgAlt: 'Cheonggyecheon stream, Seoul'
    },
    {
      date: '2024-06-16 — 2024-06-20',
      place: 'Osaka & Kyoto, Japan',
      note: 'Cultural highlights, temples, and culinary adventures.',
      img: '/experience/Japan2024/golden-temple-Kinkaku-ji-kyoto.jpg',
      imgAlt: 'Kinkaku-ji Golden Temple, Kyoto'
    },
    {
      date: '2024-06-21 — 2024-08-30',
      place: 'Tokyo, Japan',
      note: 'Worked on-site with AndGo — research, prototyping, and life in Tokyo.',
      img: '/experience/Japan2024/tokyo-big-sight.jpg',
      imgAlt: 'Tokyo Big Sight'
    }
  ]

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') setExpandedIndex(null)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  const getSummary = (text) => {
    if (!text) return ''
    // Use first non-empty line
    const firstLine = String(text).split('\n').map(s => s.trim()).find(s => s.length > 0) || ''
    // Take up to first period as one sentence
    const periodIdx = firstLine.indexOf('.')
    if (periodIdx !== -1 && periodIdx < 200) return firstLine.slice(0, periodIdx + 1)
    // fallback: first 140 chars
    return firstLine.length > 140 ? firstLine.slice(0, 137) + '...' : firstLine
  }

  return (
    <div className="relative min-h-screen bg-background pt-24 pb-20">
      <div className="absolute inset-0 z-0 pointer-events-none">
      </div>
      {/* Koi overlay (fixed layer for this page) */}
      <KoiLayer />
      <div className="container relative z-10 mx-auto px-6 max-w-4xl">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate('/experience')}
          className="mb-8 flex items-center gap-2 text-textSecondary hover:text-primary transition-colors font-light"
        >
          <span>←</span> Back to Experience
        </motion.button>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <h1 className="text-4xl font-light text-textPrimary mb-4">Life In Asia — Korea & Japan</h1>
          <p className="text-textSecondary font-light leading-relaxed">A short timeline and some reflections from my trip while visiting Southeast Asia and working with AndGo.</p>
        </motion.div>

        <div className="space-y-8">
          {timeline.map((item, i) => {
            const summary = getSummary(item.note)
            const whatIs = (Array.isArray(item.gallery) && item.gallery[0] && item.gallery[0].caption) || item.imgAlt || ''
            return (
              <div key={i}>
                <div
                  onClick={() => { setExpandedIndex(expandedIndex === i ? null : i); setExpandedGalleryIndex(0); }}
                  data-koi-occluder
                  className="luxury-card p-4 cursor-pointer"
                  role="button"
                  aria-expanded={expandedIndex === i}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
                    <div className={i % 2 === 1 ? 'md:order-2' : ''}>
                      <img src={item.img} alt={item.imgAlt || ''} loading="lazy" className="w-full h-44 md:h-56 object-cover rounded" />
                    </div>
                    <div className="flex items-center justify-center p-4">
                      <div className="text-center">
                        <h3 className="text-primary font-light text-lg mb-2">{item.place}</h3>
                        <div className="text-textSecondary text-sm mb-3">{item.date}</div>
                        <p className="text-textSecondary font-light leading-relaxed max-w-prose">
                          {whatIs && <span className="text-textMuted mr-2">{whatIs} —</span>}
                          {summary}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <AnimatePresence>
          {expandedIndex !== null && (
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-6"
            >
              <div className="absolute inset-0 bg-black/40" onClick={() => setExpandedIndex(null)} />
              <motion.div
                initial={{ scale: 0.98, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.98, opacity: 0 }}
                transition={{ duration: 0.18 }}
                className="relative bg-background w-full max-w-4xl rounded shadow-2xl p-6 z-10 border-2 border-amber-400 ring-amber-300/30"
              >
                {(() => {
                  const item = timeline[expandedIndex]
                  if (!item) return null
                  return (
                    <div className="flex flex-col md:flex-row items-start gap-6">
                      <div className="w-full md:w-1/2">
                        {Array.isArray(item.gallery) && item.gallery.length > 0 ? (
                          (() => {
                            const main = item.gallery[expandedGalleryIndex] || item.gallery[0]
                            return (
                              <div>
                                <img src={main.src} alt={main.alt || ''} className="w-full h-auto max-h-[75vh] object-contain rounded" />
                                <div className="mt-3 flex gap-2 flex-wrap">
                                  {item.gallery.map((g, gi) => (
                                    <button
                                      key={gi}
                                      onClick={(e) => { e.stopPropagation(); setExpandedGalleryIndex(gi) }}
                                      className={`w-20 h-14 overflow-hidden rounded border ${gi === expandedGalleryIndex ? 'border-amber-400 ring-amber-200/40' : 'border-border/20'}`}
                                    >
                                      <img src={g.src} alt={g.alt || ''} loading="lazy" className="w-full h-full object-cover" />
                                    </button>
                                  ))}
                                </div>
                              </div>
                            )
                          })()
                        ) : (
                          item.img ? (
                            <img src={item.img} alt={item.imgAlt || ''} className="w-full h-auto max-h-[75vh] object-contain rounded" />
                          ) : (
                            <div className="w-full h-64 bg-border/10 flex items-center justify-center rounded text-textMuted">No image available</div>
                          )
                        )}
                      </div>
                      <div className="w-full md:w-1/2">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-primary font-light text-xl mb-2">{item.place}</h3>
                            <div className="text-textSecondary text-sm mb-4">{item.date}</div>
                          </div>
                          <button onClick={() => setExpandedIndex(null)} className="text-textSecondary ml-4">Close</button>
                        </div>
                      </div>
                    </div>
                  )
                })()}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {images.length > 0 && (
          <div className="mt-10">
            <h2 className="text-2xl text-textPrimary font-light mb-4">Photos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {images.map((img, i) => (
                <div key={i} data-koi-occluder className="luxury-card p-4">
                  <img src={img.src} alt={img.alt || ''} loading="lazy" className="w-full h-48 object-cover rounded" />
                  {img.caption && <p className="text-textMuted text-sm mt-2">{img.caption}</p>}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default LifeInAsia
