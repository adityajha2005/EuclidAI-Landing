"use client"

import { motion } from "framer-motion"

export function SocialProof() {
  const companies = [
    { name: "TechCorp", logo: "TC", industry: "Technology" },
    { name: "InnovateLabs", logo: "IL", industry: "Research & Development" },
    { name: "FutureWorks", logo: "FW", industry: "Innovation" },
    { name: "DataSphere", logo: "DS", industry: "Data Analytics" },
    { name: "QuantumTech", logo: "QT", industry: "Quantum Computing" },
  ]

  const testimonials = [
    {
      quote:
        "Euclid AI has transformed how we approach market analysis. The platform delivers exceptional insights for our investment decisions.",
      author: "Aditya R.",
      position: "Investment Director",
      company: "Capital Ventures",
    },
    {
      quote: "The speed and accuracy of Euclid's responses have significantly improved our research capabilities.",
      author: "Aditya K.",
      position: "Head of Research",
      company: "TechCorp",
    },
    {
      quote: "Euclid stands out with its deep understanding of complex topics and ability to provide actionable insights.",
      author: "Aditya M.",
      position: "Chief Strategy Officer",
      company: "InnovateLabs",
    },
  ]

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/50 to-transparent dark:from-gray-900 dark:via-gray-900/50 dark:to-transparent pointer-events-none" />
      
      <div className="relative max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400">
            Trusted by Industry Leaders
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Leading organizations across various sectors rely on Euclid AI to enhance their analytical capabilities.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-20"
        >
          {companies.map((company, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center p-6 bg-white/50 dark:bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 mb-2">
                {company.logo}
              </span>
              <span className="text-sm text-gray-600 dark:text-gray-400 text-center">
                {company.industry}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/80 dark:bg-gray-800/30 backdrop-blur-sm p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50"
            >
              <p className="text-gray-700 dark:text-gray-300 mb-8 text-base leading-relaxed">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-700/50 backdrop-blur-sm flex items-center justify-center mr-4 border border-gray-200/50 dark:border-gray-700/50">
                  <span className="text-lg font-medium bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white text-base">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.position}, {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
