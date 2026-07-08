'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 px-6 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-xl rounded-full border border-purple-200/50 w-fit"
            >
              <span className="w-2 h-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full" />
              <span className="text-sm font-medium text-gray-700">SEO Agency</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight text-balance"
            >
              Boost Your Website{' '}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                SEO
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-gray-600 leading-relaxed max-w-md"
            >
              Unlock your website&apos;s full potential with our comprehensive SEO solutions. Drive more organic traffic, improve rankings, and grow your business.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('pricing')}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-full font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-purple-500/50 transition-all"
              >
                Get Started
                <ArrowRight size={20} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('pricing')}
                className="px-8 py-4 bg-white/60 backdrop-blur-xl text-gray-900 rounded-full font-semibold border border-purple-200/50 hover:bg-white/80 hover:shadow-lg transition-all"
              >
                See Pricing
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Side - 3D Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] flex items-center justify-center"
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="relative w-full h-full"
            >
              <Image
                src="/hero bg.png"
                alt="Hero illustration with rocket and analytics"
                fill
                className="object-contain drop-shadow-2xl"
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
