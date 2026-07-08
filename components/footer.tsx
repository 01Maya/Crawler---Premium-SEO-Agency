'use client'

import { motion } from 'framer-motion'
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-purple-500 to-pink-600" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        {/* Floating stars and dots */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-1/4 right-10 text-2xl opacity-40"
        >
          ⭐
        </motion.div>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-1/4 left-10 text-3xl opacity-30"
        >
          ✨
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-12">
          {/* Column 1 - Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-white">Crawler</h3>
            <p className="text-white/80 text-sm leading-relaxed">
              Your premium SEO agency partner for driving growth and digital success.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4 pt-4">
              {[
                { Icon: Facebook, label: 'Facebook' },
                { Icon: Twitter, label: 'Twitter' },
                { Icon: Instagram, label: 'Instagram' },
                { Icon: Linkedin, label: 'LinkedIn' },
              ].map(({ Icon, label }, i) => (
                <motion.button
                  key={i}
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="p-2 bg-white/10 backdrop-blur-xl rounded-full text-white hover:bg-white/20 transition-all"
                  aria-label={label}
                >
                  <Icon size={20} />
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Column 2 - Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-bold text-white">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'Services', 'Case Studies', 'Blog', 'Contact'].map(
                (link) => (
                  <li key={link}>
                    <motion.a
                      href="#"
                      whileHover={{ x: 5 }}
                      className="text-white/80 text-sm hover:text-white transition-colors"
                    >
                      {link}
                    </motion.a>
                  </li>
                )
              )}
            </ul>
          </motion.div>

          {/* Column 3 - Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-bold text-white">Services</h4>
            <ul className="space-y-3">
              {[
                'SEO Ranking',
                'Technical SEO',
                'Social Media',
                'Local SEO',
                'Web Booster',
              ].map((service) => (
                <li key={service}>
                  <motion.a
                    href="#"
                    whileHover={{ x: 5 }}
                    className="text-white/80 text-sm hover:text-white transition-colors"
                  >
                    {service}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4 - Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-bold text-white">Resources</h4>
            <ul className="space-y-3">
              {['Blog', 'Documentation', 'Privacy Policy', 'Terms', 'Sitemap'].map(
                (resource) => (
                  <li key={resource}>
                    <motion.a
                      href="#"
                      whileHover={{ x: 5 }}
                      className="text-white/80 text-sm hover:text-white transition-colors"
                    >
                      {resource}
                    </motion.a>
                  </li>
                )
              )}
            </ul>
          </motion.div>

          {/* Column 5 - Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-bold text-white">Newsletter</h4>
            <p className="text-white/80 text-sm">
              Subscribe to get latest updates and SEO tips.
            </p>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-l-full text-white placeholder:text-white/50 focus:outline-none focus:border-white/40"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-r-full text-white font-semibold transition-all"
              >
                →
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mb-8" />

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-6 text-white/80 text-sm"
        >
          <p>
            &copy; {currentYear} Crawler. All rights reserved. | Privacy Policy
          </p>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span>+987 654 321</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} />
              <span>info@crawler.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>123 Business St, City</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
