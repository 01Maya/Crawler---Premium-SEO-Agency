'use client'

import { motion } from 'framer-motion'
import {
  ArrowRight,
  TrendingUp,
  Target,
  Rocket,
  BadgeDollarSign,
} from 'lucide-react'
import { useEffect, useState } from 'react'

const caseStudies = [
  {
    id: 1,
    emoji: '🚀',
    metric: '+165%',
    title: 'Organic Traffic Growth',

    description:
      'Achieved massive traffic growth with advanced SEO optimization.',

    details: [
      '165% increase in organic traffic',
      'Technical SEO improvements',
      'Optimized high-ranking content',
      'Better indexing & visibility',
      'Authority backlink strategy',
    ],

    icon: TrendingUp,
  },

  {
    id: 2,
    emoji: '🎯',
    metric: '+93%',
    title: 'Keyword Rankings',

    description:
      'Boosted rankings across multiple competitive search terms.',

    details: [
      '500+ keywords optimized',
      'Improved Google rankings',
      'Advanced keyword strategy',
      'Enhanced on-page SEO',
      'Higher search visibility',
    ],

    icon: Target,
  },

  {
    id: 3,
    emoji: '📈',
    metric: '+120%',
    title: 'Leads Generated',

    description:
      'Generated more qualified leads through conversion optimization.',

    details: [
      '120% growth in leads',
      'Optimized conversion funnels',
      'Improved CTA placements',
      'Enhanced user journey',
      'Higher engagement rates',
    ],

    icon: Rocket,
  },

  {
    id: 4,
    emoji: '💰',
    metric: '+245%',
    title: 'Revenue Growth',

    description:
      'Increased revenue through stronger organic performance.',

    details: [
      '245% revenue growth',
      'Improved traffic quality',
      'Better conversion strategy',
      'Higher ROI performance',
      'Long-term business growth',
    ],

    icon: BadgeDollarSign,
  },
]

export default function CaseStudies() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [cardsPerView, setCardsPerView] = useState(3)
  const [isPaused, setIsPaused] = useState(false)
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set())

  const duplicatedCards = [...caseStudies, ...caseStudies]

  // Responsive cards
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCardsPerView(1)
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2)
      } else {
        setCardsPerView(3)
      }
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Infinite auto slide
  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1)
    }, 4500)

    return () => clearInterval(interval)
  }, [isPaused])

  // Reset infinite loop
  useEffect(() => {
    if (currentIndex >= caseStudies.length) {
      const timeout = setTimeout(() => {
        setCurrentIndex(0)
      }, 900)

      return () => clearTimeout(timeout)
    }
  }, [currentIndex])

  // Dot click
  const handleDotClick = (index: number) => {
    setCurrentIndex(index)

    setIsPaused(true)

    setTimeout(() => {
      setIsPaused(false)
    }, 5000)
  }

  // Flip card
  const toggleFlip = (id: number) => {
    setFlippedCards((prev) => {
      const updated = new Set(prev)

      if (updated.has(id)) {
        updated.delete(id)
      } else {
        updated.add(id)
      }

      return updated
    })
  }

  return (
    <section
      id="case-studies"
      className="relative py-24 px-4 sm:px-6 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-purple-200/20 blur-3xl rounded-full" />

        <div className="absolute bottom-0 right-0 w-80 h-80 bg-pink-200/20 blur-3xl rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Case Studies
          </h2>

          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Real results from real clients. Discover how strategic SEO
            transformed their online growth.
          </p>
        </motion.div>

        {/* Carousel */}
        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => {
            setTimeout(() => {
              setIsPaused(false)
            }, 4000)
          }}
        >
          <motion.div
            animate={{
              x:
                cardsPerView === 3
                  ? `-${currentIndex * 33.333}%`
                  : cardsPerView === 2
                  ? `-${currentIndex * 50}%`
                  : `-${currentIndex * 100}%`,
            }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex will-change-transform"
          >
            {duplicatedCards.map((study, i) => {
              const isFlipped = flippedCards.has(i)

              return (
                <div
                  key={i}
                  className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-3"
                >
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 30,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.6,
                      delay: i * 0.08,
                    }}
                    viewport={{ once: true }}
                    whileHover={{
                      y: -8,
                    }}
                    className="relative h-[420px] cursor-pointer"
                    style={{
                      perspective: '1600px',
                    }}
                    onClick={() => toggleFlip(i)}
                  >
                    {/* Glow */}
                    <motion.div
                      animate={{
                        opacity: [0.3, 0.5, 0.3],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                      }}
                      className="absolute -inset-2 rounded-[34px] bg-gradient-to-r from-purple-300/20 to-pink-300/20 blur-xl"
                    />

                    {/* Flip */}
                    <motion.div
                      animate={{
                        rotateY: isFlipped ? 180 : 0,
                      }}
                      transition={{
                        duration: 0.75,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      style={{
                        transformStyle: 'preserve-3d',
                      }}
                      className="relative w-full h-full"
                    >
                      {/* FRONT */}
                      <div
                        style={{
                          backfaceVisibility: 'hidden',
                        }}
                        className="absolute inset-0 rounded-[30px] border border-white/50 bg-white/70 backdrop-blur-xl shadow-[0_10px_30px_rgba(168,85,247,0.08)] overflow-hidden"
                      >
                        {/* Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/[0.03] to-pink-500/[0.04]" />

                        {/* Shine */}
                        <motion.div
                          animate={{
                            x: ['-120%', '220%'],
                          }}
                          transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: 'linear',
                          }}
                          className="absolute top-0 left-0 w-32 h-full bg-white/20 blur-2xl rotate-12"
                        />

                        <div className="relative h-full p-8 flex flex-col justify-between">
                          {/* Top */}
                          <div className="space-y-6">
                            {/* Lucide Icon */}
                            <div className="flex items-center justify-between">
                              <motion.div
                                animate={{
                                  y: [0, -4, 0],
                                }}
                                transition={{
                                  duration: 4,
                                  repeat: Infinity,
                                  ease: 'easeInOut',
                                }}
                                className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center shadow-sm"
                              >
                                <study.icon
                                  size={28}
                                  className="text-purple-600"
                                  strokeWidth={2.3}
                                />
                              </motion.div>

                              {/* Bottom Right Emoji */}
                              <motion.div
                                animate={{
                                  y: [0, -5, 0],
                                  rotate: [0, 5, -5, 0],
                                }}
                                transition={{
                                  duration: 5,
                                  repeat: Infinity,
                                  ease: 'easeInOut',
                                }}
                                className="absolute bottom-8 right-8 text-4xl opacity-90"
                              >
                                {study.emoji}
                              </motion.div>
                            </div>

                            {/* Metric */}
                            <div className="space-y-3">
                              <motion.div
                                animate={{
                                  opacity: [0.8, 1, 0.8],
                                }}
                                transition={{
                                  duration: 4,
                                  repeat: Infinity,
                                }}
                                className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent"
                              >
                                {study.metric}
                              </motion.div>

                              <h3 className="text-2xl font-bold text-gray-900 leading-tight">
                                {study.title}
                              </h3>
                            </div>

                            {/* Description */}
                            <p className="text-gray-600 leading-relaxed pr-8">
                              {study.description}
                            </p>
                          </div>

                          {/* Bottom */}
                          <motion.div
                            whileHover={{
                              x: 4,
                            }}
                            className="flex items-center gap-2 text-purple-600 font-medium"
                          >
                            Read Case Study
                            <ArrowRight size={18} />
                          </motion.div>
                        </div>
                      </div>

                      {/* BACK */}
                      <div
                        style={{
                          backfaceVisibility: 'hidden',
                          transform: 'rotateY(180deg)',
                        }}
                        className="absolute inset-0 rounded-[30px] border border-white/50 bg-white/70 backdrop-blur-xl shadow-[0_10px_30px_rgba(168,85,247,0.08)] overflow-hidden"
                      >
                        {/* Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/[0.05] to-pink-500/[0.06]" />

                        <div className="relative h-full p-8 flex flex-col justify-between">
                          <div className="space-y-6">
                            {/* Icon */}
                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center shadow-sm">
                              <study.icon
                                size={28}
                                className="text-purple-600"
                                strokeWidth={2.3}
                              />
                            </div>

                            <h3 className="text-3xl font-bold text-gray-900">
                              Details
                            </h3>

<div className="space-y-3">
  {study.details.map((point, idx) => (
    <div
      key={idx}
      className="flex items-start gap-3 text-gray-600"
    >
      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mt-2 flex-shrink-0" />

      <p className="leading-relaxed text-sm">
        {point}
      </p>
    </div>
  ))}
</div>

                          </div>

                          <motion.div
                            whileHover={{
                              x: 4,
                            }}
                            className="flex items-center gap-2 text-purple-600 font-medium"
                          >
                            Back
                            <ArrowRight size={18} />
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              )
            })}
          </motion.div>
        </div>

        {/* Dots */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            duration: 0.6,
            delay: 0.3,
          }}
          className="flex justify-center gap-3 mt-10"
        >
          {caseStudies.map((_, i) => (
            <motion.button
              key={i}
              onClick={() => handleDotClick(i)}
              whileHover={{
                scale: 1.15,
              }}
              whileTap={{
                scale: 0.9,
              }}
              className={`rounded-full transition-all duration-500 ${
                i === currentIndex % caseStudies.length
                  ? 'w-10 h-3 bg-gradient-to-r from-purple-600 to-pink-500 shadow-md shadow-purple-400/30'
                  : 'w-3 h-3 bg-purple-200 hover:bg-purple-300'
              }`}
            />
          ))}
        </motion.div>

        {/* Hint */}
        <motion.p
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="text-center text-xs text-gray-500 mt-6"
        >
          Swipe cards • Tap card to flip
        </motion.p>
      </div>
    </section>
  )
}