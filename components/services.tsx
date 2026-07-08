'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const services = [
  { icon: '🚀', name: 'SEO Ranking', description: 'Improve your website ranking and get more traffic' },
  { icon: '📊', name: 'Technical SEO', description: 'Optimize your website for search engines' },
  { icon: '📱', name: 'Social Media', description: 'Grow your brand on social platforms' },
  { icon: '📍', name: 'Local SEO', description: 'Rank higher in local search results' },
  { icon: '⚡', name: 'Web Booster', description: 'Boost performance & website experience' },
]

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  }

  return (
    <section id="services" className="relative py-24 px-6 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-40 h-40 bg-purple-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-40 h-40 bg-pink-200/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive SEO solutions tailored to boost your online presence and drive measurable results.
          </p>
          <p className="text-sm text-purple-600 font-semibold flex items-center justify-center gap-2 hover:gap-3 cursor-pointer transition-all">
            All Services <ArrowRight size={16} />
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative p-6 bg-white/60 backdrop-blur-xl rounded-3xl border border-purple-200/50 hover:border-purple-400/50 shadow-lg hover:shadow-xl hover:shadow-purple-500/20 transition-all cursor-pointer overflow-hidden"
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-pink-600/0 group-hover:from-purple-600/10 group-hover:to-pink-600/10 transition-all duration-300" />

              <div className="relative z-10 space-y-4">
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-5xl"
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-lg font-bold text-gray-900">{service.name}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
