'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'

const brands = [
  { name: 'Audio', logo: '🎵' },
  { name: 'Monex', logo: '💼' },
  { name: 'Sigma', logo: '⚡' },
  { name: 'Cult', logo: '🎭' },
  { name: 'Tech', logo: '💻' },
  { name: 'Wave', logo: '🌊' },
]

export default function TrustedBrands() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  return (
    <section className="relative py-12 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-sm font-semibold text-gray-600 mb-8">
          TRUSTED BY BRANDS
        </p>

        <div className="relative overflow-hidden">
          {/* Gradient fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white/80 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white/80 to-transparent z-10" />

          <motion.div
            ref={scrollContainerRef}
            animate={{ x: [0, -1000] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="flex gap-12 md:gap-20"
          >
            {[...brands, ...brands].map((brand, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1 }}
                className="flex items-center gap-3 flex-shrink-0 px-6 py-3 bg-white/40 backdrop-blur-xl rounded-full border border-purple-200/30 hover:border-purple-300/50 transition-all"
              >
                <span className="text-2xl">{brand.logo}</span>
                <span className="font-semibold text-gray-700 whitespace-nowrap">
                  {brand.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
