'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Starter',
    price: '$29',
    description: 'Perfect for small businesses',
    features: [
      'SEO Audit & Analysis',
      '10 Keywords Tracking',
      'On-Page Optimization',
      'Email Support',
    ],
    highlight: false,
  },
  {
    name: 'Professional',
    price: '$79',
    description: 'Ideal for growing businesses',
    badge: 'MOST POPULAR',
    features: [
      'Everything in Starter',
      '25 Keywords Tracking',
      'Technical SEO Audit',
      'Competitor Analysis',
      'Priority Support',
    ],
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: '$149',
    description: 'Best for large businesses',
    features: [
      'Everything in Professional',
      'Unlimited Keywords',
      'Advanced Reporting',
      'Dedicated Manager',
      '24/7 Support',
    ],
    highlight: false,
  },
]

export default function Pricing() {
  const handleGetStarted = (planName: string) => {
    console.log(`Selected plan: ${planName}`)
  }

  return (
    <section
      id="pricing"
      className="relative py-24 px-4 sm:px-6 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
          className="absolute top-0 right-1/4 w-96 h-96 bg-purple-200/10 rounded-full blur-3xl"
        />

        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
          className="absolute bottom-0 left-1/4 w-96 h-96 bg-pink-200/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{
              opacity: 0,
              scale: 0.95,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.6,
            }}
            className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight"
          >
            Pricing Plans
          </motion.h2>

          <motion.p
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            transition={{
              delay: 0.2,
            }}
            className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Simple transparent pricing that scales beautifully with your
            business.
          </motion.p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 items-center">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: i * 0.08,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                scale: plan.highlight ? 1.04 : 1.02,
              }}
              className={`group relative overflow-hidden rounded-[30px] border transition-all duration-200 ease-out ${
                plan.highlight
                  ? 'bg-white border-purple-300 shadow-[0_25px_70px_rgba(168,85,247,0.22)] md:scale-105'
                  : 'bg-white/70 backdrop-blur-xl border-purple-100 shadow-[0_10px_30px_rgba(168,85,247,0.08)] hover:border-purple-200'
              }`}
            >
              {/* Floating Glow */}
              <motion.div
                animate={{
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="absolute -inset-2 rounded-[36px] bg-gradient-to-r from-purple-300/20 to-pink-300/20 blur-xl"
              />

              {/* Top Bar */}
              {plan.highlight && (
                <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500" />
              )}

              {/* Badge */}
              {plan.badge && (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: -10,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  className="absolute top-3 left-1/2 -translate-x-1/2 z-20"
                >
                  <div className="px-4 py-1 rounded-full bg-purple-100 text-purple-600 text-[10px] font-bold tracking-wide shadow-sm">
                    {plan.badge}
                  </div>
                </motion.div>
              )}

              {/* Shine Effect */}
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

              {/* Content */}
              <div
                className={`relative z-10 p-8 ${
                  plan.highlight ? 'pt-12' : ''
                }`}
              >
                {/* Plan */}
                <div className="text-center">
                  <motion.h3
                    whileHover={{
                      scale: 1.02,
                    }}
                    transition={{
                      duration: 0.15,
                    }}
                    className="text-3xl font-bold text-gray-900"
                  >
                    {plan.name}
                  </motion.h3>

                  <p className="mt-2 text-sm text-gray-500">
                    {plan.description}
                  </p>
                </div>

                {/* Price */}
                <motion.div
                  whileHover={{
                    scale: 1.02,
                  }}
                  transition={{
                    duration: 0.15,
                  }}
                  className="flex items-end justify-center gap-1 mt-8"
                >
                  <span className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                    {plan.price}
                  </span>

                  <span className="text-gray-500 text-sm mb-1">
                    / month
                  </span>
                </motion.div>

                {/* Features */}
                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature, j) => (
                    <motion.li
                      key={j}
                      initial={{
                        opacity: 0,
                        x: -10,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay: j * 0.05,
                      }}
                      whileHover={{
                        x: 2,
                      }}
                      className="flex items-center gap-3 group/item"
                    >
                      {/* Icon */}
                      <motion.div
                        whileHover={{
                          rotate: 8,
                          scale: 1.08,
                        }}
                        transition={{
                          duration: 0.15,
                        }}
                        className="w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 transition-all duration-200 group-hover/item:bg-purple-200"
                      >
                        <Check
                          size={12}
                          className="text-purple-600"
                          strokeWidth={3}
                        />
                      </motion.div>

                      {/* Text */}
                      <span className="text-sm text-gray-700 font-medium">
                        {feature}
                      </span>
                    </motion.li>
                  ))}
                </ul>

                {/* Button */}
                <motion.button
                  whileHover={{
                    scale: 1.02,
                  }}
                  whileTap={{
                    scale: 0.96,
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 18,
                  }}
                  onClick={() => handleGetStarted(plan.name)}
                  className={`mt-10 w-full py-3 rounded-full font-semibold transition-all duration-200 ease-out ${
                    plan.highlight
                      ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/45'
                      : 'border border-purple-300 text-purple-600 hover:bg-purple-50 hover:border-purple-400'
                  }`}
                >
                  Get Started
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}