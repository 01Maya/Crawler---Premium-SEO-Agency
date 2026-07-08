'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight, Mail, Phone } from 'lucide-react'

export default function CTABanner() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="cta"
      className="relative px-4 sm:px-6 pt-10 pb-24 overflow-hidden"
    >
      {/* CTA CARD */}
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[32px] border border-white/20 shadow-[0_20px_60px_rgba(168,85,247,0.25)]"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 opacity-95" />

          {/* Glow */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <div className="absolute -top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl" />

            <div className="absolute bottom-0 right-0 w-80 h-80 bg-pink-300/10 rounded-full blur-3xl" />
          </div>

          {/* Floating Elements */}
          <motion.div
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute top-12 left-[45%] w-4 h-4 rounded-full bg-yellow-300 blur-[1px]"
          />

          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute bottom-14 right-[35%] w-3 h-3 rounded-full bg-pink-300 blur-[1px]"
          />

          {/* Content */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center px-6 sm:px-10 lg:px-14 py-10 sm:py-12">
            {/* LEFT */}
            <motion.div
              initial={{
                opacity: 0,
                x: -30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.7,
              }}
              viewport={{ once: true }}
              className="text-white"
            >
              <motion.h2
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
                  delay: 0.1,
                }}
                className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight max-w-xl"
              >
                Ready to grow your business with SEO?
              </motion.h2>

              <motion.p
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
                  delay: 0.2,
                }}
                className="mt-5 text-white/85 text-base sm:text-lg leading-relaxed max-w-lg"
              >
                Join hundreds of businesses that have transformed their online
                presence through smart SEO strategies and digital marketing.
              </motion.p>

              {/* Contact */}
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
                  delay: 0.25,
                }}
                className="flex flex-col sm:flex-row gap-5 mt-7"
              >
                {/* Phone */}
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-white/15 border border-white/20 backdrop-blur-md flex items-center justify-center">
                    <Phone size={18} />
                  </div>

                  <div>
                    <p className="text-xs text-white/70">
                      Call Us
                    </p>

                    <p className="font-medium text-sm sm:text-base">
                      +91 98765 43210
                    </p>
                  </div>
                </div>

                {/* Mail */}
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-white/15 border border-white/20 backdrop-blur-md flex items-center justify-center">
                    <Mail size={18} />
                  </div>

                  <div>
                    <p className="text-xs text-white/70">
                      Email Us
                    </p>

                    <p className="font-medium text-sm sm:text-base">
                      hello@crawlerseo.com
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Button */}
              <motion.button
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
                  delay: 0.3,
                }}
                whileHover={{
                  scale: 1.04,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                onClick={() => scrollToSection('pricing')}
                className="mt-8 px-7 py-3.5 rounded-full bg-white text-purple-600 font-semibold flex items-center gap-2 hover:shadow-[0_10px_30px_rgba(255,255,255,0.35)] transition-all w-fit"
              >
                Get Started Now

                <ArrowRight size={18} />
              </motion.button>
            </motion.div>

            {/* RIGHT IMAGE */}
            <motion.div
              initial={{
                opacity: 0,
                x: 30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.15,
              }}
              viewport={{ once: true }}
              className="relative h-[250px] sm:h-[320px] md:h-[360px] lg:h-[320px] flex items-center justify-center"
            >
              <motion.div
                animate={{
                  y: [0, -12, 0],
                  rotate: [0, 2, -2, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="relative w-full h-full"
              >
                <Image
                  src="/news bg.png"
                  alt="SEO Target Illustration"
                  fill
                  priority
                  className="object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.18)]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* FOOTER SPACING */}
      <div className="h-10" />
    </section>
  )
}