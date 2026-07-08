'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent body scroll when mobile menu open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#cta' },
  ]

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault()

    const targetId = href.replace('#', '')
    const element = document.getElementById(targetId)

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }

    setIsOpen(false)
  }

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/55 backdrop-blur-2xl border-b border-white/20 shadow-[0_8px_30px_rgba(168,85,247,0.08)]'
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent"
          >
            Crawler
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="relative text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors duration-300 group"
              >
                {link.name}

                <span className="absolute -bottom-1 left-0 w-0 h-0.5 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Desktop Right */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
              <Phone
                size={17}
                className="text-purple-600"
              />

              +987 654 321
            </div>

            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="px-6 py-2.5 rounded-full bg-gradient-to-r from-purple-600 to-purple-700 text-white text-sm font-medium shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-all duration-300"
            >
              Free Trial
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative z-[60] text-gray-700"
            aria-label="Toggle Menu"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={26} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={26} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Mobile Nav */}
            <motion.div
              initial={{
                opacity: 0,
                y: -20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -20,
              }}
              transition={{
                duration: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="fixed top-[76px] left-4 right-4 z-50 md:hidden"
            >
              <div className="rounded-3xl border border-white/20 bg-white/80 backdrop-blur-2xl shadow-[0_10px_40px_rgba(168,85,247,0.15)] overflow-hidden">
                <div className="flex flex-col p-6">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.name}
                      initial={{
                        opacity: 0,
                        x: -20,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay: index * 0.06,
                      }}
                    >
                      <Link
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link.href)}
                        className="flex items-center justify-between py-4 text-base font-medium text-gray-700 hover:text-purple-600 transition-colors border-b border-gray-100 last:border-none"
                      >
                        {link.name}

                        <span className="text-purple-400">→</span>
                      </Link>
                    </motion.div>
                  ))}

                  {/* Phone */}
                  <div className="flex items-center gap-3 mt-6 mb-5 text-gray-700">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                      <Phone
                        size={18}
                        className="text-purple-600"
                      />
                    </div>

                    <div>
                      <p className="text-xs text-gray-500">
                        Call Us
                      </p>

                      <p className="text-sm font-medium">
                        +987 654 321
                      </p>
                    </div>
                  </div>

                  {/* Button */}
                  <motion.button
                    whileHover={{
                      scale: 1.02,
                    }}
                    whileTap={{
                      scale: 0.97,
                    }}
                    className="w-full py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-medium shadow-lg shadow-purple-500/20"
                  >
                    Free Trial
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}