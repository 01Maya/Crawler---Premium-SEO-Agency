'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const keywords = [
  'Conversion',
  'Optimization',
  'Ecommerce',
  'Analytic',
  'Link Building',
  'Strategy',
]

export default function DigitalMarketing() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-purple-200/15 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-pink-200/15 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative h-96 hidden lg:flex items-center justify-center"
          >
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="relative w-full h-full"
            >
              <Image
                src="/dm bg.png"
                alt="Analytics dashboard with charts and data"
                fill
                className="object-contain drop-shadow-2xl"
              />
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-balance">
                One-stop digital marketing services
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Transform your online presence with our comprehensive suite of digital marketing solutions. From SEO to social media, we&apos;ve got everything you need to succeed in the digital landscape.
              </p>
            </div>

            {/* Keywords/Pills */}
            <div className="flex flex-wrap gap-3">
              {keywords.map((keyword, i) => (
                <motion.button
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-white/60 backdrop-blur-xl border border-purple-200/50 rounded-full text-sm font-medium text-gray-700 hover:border-purple-400/50 hover:bg-white/80 transition-all"
                >
                  {keyword}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
