import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import experienceData from '../data/experience.json'

const LifeInAsia = () => {
  const navigate = useNavigate()
  const exp = experienceData || {}
  const images = Array.isArray(exp.images) ? exp.images : []
  const [expandedIndex, setExpandedIndex] = useState(null)
  const [expandedGalleryIndex, setExpandedGalleryIndex] = useState(0)

  const reduceMotion = useReducedMotion()

  const containerVariants = {
    hidden: { opacity: 1 },
    show: { opacity: 1, transition: { staggerChildren: 0.06 } }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.32, ease: 'easeOut' } }
  }

  const initialTimeline = [
    {
      date: '2024-06-07 — 2024-06-14',
      place: 'Seoul, South Korea',
      note: "To start us off, thank you to CRCC Asia for guiding me through such a great opportunity and the friendships I made along the way. While in Korea, my group stayed around Myeongdong / Euljiro. It was a massive culture shock at first — the streets, the lights, the smells — and the first thing we did after arriving was find some food. I still remember meeting my roommate: I said, ‘Yo, what's up I'm Alejandro’ and after a short silence I asked, ‘You like Star Wars?’ He said yes, and we bonded immediately.\n\nMarkets became a central part of my days — from Cheonggyecheon at night to the market alleys of Insadong. I tried everything from sweet corn dogs to live octopus; the food and the energy of the stalls are unforgettable. Myeongdong felt alive 24/7 — always crowded but in a polite way; it's where I met locals who became lasting friends. And the views from Seoul Tower were breathtaking — seeing the city spread beneath you with mountains on the horizon felt like a reset.",
      img: '/experience/Korea2024/Cheonggyecheon-Stream-Night.jpg',
      imgAlt: 'Cheonggyecheon stream at night'
    },
    {
      date: '2024-06-09',
      place: 'Insadong, Seoul',
      note: 'Insadong was a maze of traditional shops and market stalls — a place to taste street snacks, pick up handcrafted souvenirs, and soak in the slower side of Seoul away from the neon bustle.',
      img: '/experience/Korea2024/Insadong.jpg',
      imgAlt: 'Insadong market stalls'
    },
    {
      date: '2024-06-10',
      place: 'Myeongdong Shopping Street',
      note: 'The shopping center of Myeongdong is alive 24/7 — a polite, crowded maze of stalls, vendors, and neon where I met locals and made friends who lasted a lifetime.',
      img: '/experience/Korea2024/Myeongdong-Shopping-Street.jpg',
      imgAlt: 'Myeongdong shopping street'
    },
    {
      date: '2024-06-12',
      place: 'Seoul Tower',
      note: 'Seoul Tower stands as a familiar landmark visible from many parts of the city, a place to appreciate the structure, the lights, and the atmosphere up close. It was the first time I have ever seen something like this, as I am from a super small town. Funny enough while visiting Seoul Tower, I ran into a friend of mine from T.T.U. which was wild. Man, such a small world, but such a big world, its a medium sized world. The hike up the to the tower wasn\'t too bad as I have been hiking before, but the HUMIDITY, bro, I was drowning. Totally worth it.',
      img: '/experience/Korea2024/seoul-tower.jpg',
      imgAlt: 'N Seoul Tower during the day'
    },
    {
      date: '2024-06-12',
      place: 'View from Seoul Tower',
      note: 'The view from Seoul Tower was breathtakingm seeing the city spread out with mountains on the horizon felt like a reset and a moment to breathe. Aside from all the people there, once I tuned them out and it was just me and the view, everything, everything fell into place and I felt at peace. A view I hope to see again.',
      img: '/experience/Korea2024/view-from-seoul-tower.jpg',
      imgAlt: 'View from N Seoul Tower'
    },
    {
      date: '2024-06-16',
      place: 'Osaka, Japan',
      note: 'Dotonbori nights, neon signs, and iconic street food — Osaka was lively, welcoming, and delicious.',
      gallery: [
        { src: '/experience/Japan2024/doto.jpg', alt: 'Dotonbori at night', caption: 'Dōtonbori — neon and street food' },
        { src: '/experience/Japan2024/view-from-hotel-IT-osaka.jpg', alt: 'View from hotel in Osaka', caption: 'View from hotel in IT Osaka' }
      ],
      img: '/experience/Japan2024/doto.jpg',
      imgAlt: 'Dotonbori street'
    },
    {
      date: '2024-06-17',
      place: 'Kyoto, Japan',
      note: 'Temples, torii gates, and the quieter, traditional side of Japan — Kyoto felt timeless and reflective.',
      gallery: [
        { src: '/experience/Japan2024/golden-temple-Kinkaku-ji-kyoto.jpg', alt: 'Kinkaku-ji Golden Temple', caption: 'Kinkaku-ji — Golden Temple' },
        { src: '/experience/Japan2024/torii-gates-kyoto.jpg', alt: 'Torii gates, Kyoto', caption: 'Torii gates pathway' },
        { src: '/experience/Japan2024/torii-gates-kyoto-2.jpg', alt: 'Torii gates, Kyoto (2)', caption: 'Torii gates — perspective' }
      ],
      img: '/experience/Japan2024/golden-temple-Kinkaku-ji-kyoto.jpg',
      imgAlt: 'Kinkaku-ji Golden Temple, Kyoto'
    },
    {
      date: '2024-06-18',
      place: 'Shinjuku, Tokyo',
      note: 'Shinjuku was the heart of Tokyo nights — endless lights, crowds, and unforgettable streets.',
      gallery: [
        { src: '/experience/Japan2024/downtown-shinjuku-2.jpg', alt: 'Shinjuku street 2', caption: 'Shinjuku — bustling streets' },
        { src: '/experience/Japan2024/downtown-shinjuku.jpg', alt: 'Shinjuku street', caption: 'Shinjuku — nightlife' },
        { src: '/experience/Japan2024/downtown-shinjuku-3.jpg', alt: 'Shinjuku street 3', caption: 'Shinjuku — late night' }
      ],
      img: '/experience/Japan2024/downtown-shinjuku.jpg',
      imgAlt: 'Downtown Shinjuku'
    },
    {
      date: '2024-06-19 — 2024-06-21',
      place: 'Hakusan, Tokyo (Lived here)',
      note: 'I lived in Hakusan — quiet residential streets and rooftop garden views that felt like a small sanctuary within the city.',
      gallery: [
        { src: '/experience/Japan2024/night-view-from-apartment-hakusan.jpg', alt: 'Night view from apartment in Hakusan', caption: 'Night view from apartment' },
        { src: '/experience/Japan2024/night-view-roof-top-garden.jpg', alt: 'Night view roof top garden', caption: 'Roof-top garden view' },
        { src: '/experience/Japan2024/roof-garden-apartment.jpg', alt: 'Apartment roof garden', caption: 'Apartment roof garden' }
      ],
      img: '/experience/Japan2024/night-view-from-apartment-hakusan.jpg',
      imgAlt: 'Night view from apartment Hakusan'
    },
    {
      date: '2024-06-22',
      place: 'Asakusa, Tokyo',
      note: 'Asakusa offered old Tokyo charm — narrow streets, temple grounds, and the famous five-story pagoda that anchors the neighborhood.',
      gallery: [
        { src: '/experience/Japan2024/asakusa-streets.jpg', alt: 'Asakusa streets', caption: 'Asakusa — streets and stalls' },
        { src: '/experience/Japan2024/IMG_0881.jpg', alt: 'Five-story temple in Asakusa', caption: 'Famous five-story pagoda in Asakusa' }
      ],
      img: '/experience/Japan2024/asakusa-streets.jpg',
      imgAlt: 'Asakusa streets'
    },
    {
      date: '2024-06-23',
      place: 'Tokyo Big Sight',
      note: 'Attended an expo at Tokyo Big Sight with the AndGo CEO — a major moment for work and networking.',
      img: '/experience/Japan2024/tokyo-big-sight.jpg',
      imgAlt: 'Tokyo Big Sight'
    },
    {
      date: '2024-06-24',
      place: 'Kachidoki, Tokyo',
      note: 'Kachidoki had a different pace — waterfront views and city textures that grew on me.',
      gallery: [
        { src: '/experience/Japan2024/downtown-kachidoki.jpg', alt: 'Downtown Kachidoki', caption: 'Kachidoki — downtown' },
        { src: '/experience/Japan2024/downtown-kachidoki-2.jpg', alt: 'Downtown Kachidoki 2', caption: 'Kachidoki — evening' },
        { src: '/experience/Japan2024/downtown-kachidoki-3.jpg', alt: 'Downtown Kachidoki 3', caption: 'Kachidoki — night' }
      ],
      img: '/experience/Japan2024/downtown-kachidoki.jpg',
      imgAlt: 'Downtown Kachidoki'
    }
  ]

  const [timelineState, setTimelineState] = useState(initialTimeline)

  const handleCloseModal = () => {
    if (expandedIndex === null) { setExpandedIndex(null); return }
    const item = timelineState[expandedIndex]
    if (item && Array.isArray(item.gallery) && item.gallery.length > 0) {
      const sel = item.gallery[expandedGalleryIndex] || item.gallery[0]
      const newTimeline = timelineState.map((t, idx) => {
        if (idx !== expandedIndex) return t
        const copy = { ...t }
        copy.img = sel.src
        copy.imgAlt = sel.alt || sel.caption || ''
        copy.selectedGalleryIndex = expandedGalleryIndex
        if (Array.isArray(copy.gallery) && copy.gallery.length > 0) {
          const newGallery = copy.gallery.slice()
          newGallery[0] = { ...newGallery[0], caption: sel.caption || newGallery[0].caption }
          copy.gallery = newGallery
        }
        return copy
      })
      setTimelineState(newTimeline)
    }
    setExpandedIndex(null)
  }

  const handleOpenModal = (index) => {
    if (expandedIndex === index) { handleCloseModal(); return }
    setExpandedGalleryIndex((timelineState[index] && timelineState[index].selectedGalleryIndex) ?? 0)
    setExpandedIndex(index)
  }

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') handleCloseModal()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [expandedIndex, expandedGalleryIndex, timelineState])

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
    <div className="min-h-screen bg-background pt-24 pb-20 relative">
      
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
          <p className="text-textSecondary font-light leading-relaxed">A short timeline and some reflections from my trip while working with AndGo.</p>
        </motion.div>

        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial={reduceMotion ? undefined : 'hidden'}
          animate={reduceMotion ? undefined : 'show'}
        >
          {timelineState.map((item, i) => {
            const summary = getSummary(item.note)
            const whatIs = (Array.isArray(item.gallery) && item.gallery[0] && item.gallery[0].caption) || item.imgAlt || ''
            return (
              <motion.div key={i} variants={itemVariants}>
                <motion.div
                  onClick={() => handleOpenModal(i)}
                  className="luxury-card p-4 cursor-pointer"
                  role="button"
                  aria-expanded={expandedIndex === i}
                  whileHover={!reduceMotion ? { y: -6 } : undefined}
                  whileTap={!reduceMotion ? { scale: 0.997 } : undefined}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
                    <div className={i % 2 === 1 ? 'md:order-2' : ''}>
                      <motion.img
                        src={item.img}
                        alt={item.imgAlt || ''}
                        loading="lazy"
                        className="w-full h-44 md:h-56 object-cover rounded"
                        layoutId={`timeline-${i}-img-main`}
                      />
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
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>

        <AnimatePresence>
          {expandedIndex !== null && (
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-6"
            >
              <div className="absolute inset-0 bg-black/40" onClick={handleCloseModal} />
              <motion.div
                initial={{ scale: 0.98, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.98, opacity: 0 }}
                transition={{ duration: 0.18 }}
                className="relative bg-background w-full max-w-4xl rounded shadow-2xl p-6 z-10 border-2 border-amber-400 ring-amber-300/30"
              >
                {(() => {
                  const item = timelineState[expandedIndex]
                  if (!item) return null
                  return (
                    <div className="flex flex-col md:flex-row items-start gap-6">
                      <div className="w-full md:w-1/2">
                        {Array.isArray(item.gallery) && item.gallery.length > 0 ? (
                          (() => {
                            const main = item.gallery[expandedGalleryIndex] || item.gallery[0]
                            return (
                              <div>
                                <motion.img
                                  src={main.src}
                                  alt={main.alt || ''}
                                  className="w-full h-auto max-h-[75vh] object-contain rounded"
                                  layoutId={`timeline-${expandedIndex}-img-main`}
                                />
                                <div className="mt-3 flex gap-2 flex-wrap">
                                  {item.gallery.map((g, gi) => (
                                    <button
                                      key={gi}
                                      onClick={(e) => { e.stopPropagation(); setExpandedGalleryIndex(gi) }}
                                      className={`w-20 h-14 overflow-hidden rounded border ${gi === expandedGalleryIndex ? 'border-amber-400 ring-amber-200/40' : 'border-border/20'}`}
                                    >
                                      <motion.img src={g.src} alt={g.alt || ''} loading="lazy" className="w-full h-full object-cover" whileHover={!reduceMotion ? { scale: 1.03 } : undefined} />
                                    </button>
                                  ))}
                                </div>
                              </div>
                            )
                          })()
                        ) : (
                          item.img ? (
                            <motion.img src={item.img} alt={item.imgAlt || ''} className="w-full h-auto max-h-[75vh] object-contain rounded" layoutId={`timeline-${expandedIndex}-img-main`} />
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
                          <button onClick={handleCloseModal} className="text-textSecondary ml-4">Close</button>
                        </div>
                        <div className="text-textSecondary font-light leading-relaxed">
                          <p>{item.note}</p>
                          <p className="mt-4">More details can go here — you can edit this text later.</p>
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
                <div key={i} className="luxury-card p-4">
                  <motion.img src={img.src} alt={img.alt || ''} loading="lazy" className="w-full h-48 object-cover rounded" layoutId={`photo-${i}`} />
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
