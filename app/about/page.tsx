"use client"

import type React from "react"
import { motion } from "framer-motion"
import { ThemeToggle } from "@/components/theme-toggle"
import { AnimatedBackground } from "@/components/animated-background"
import { MobileMenu } from "@/components/mobile-menu"
import Link from "next/link"
import { Suspense } from "react"

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start bg-gray-50 dark:bg-gray-900">
      <AnimatedBackground />
      
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 flex items-center justify-between px-6 py-4 z-10 bg-gray-50/80 dark:bg-gray-900/80 backdrop-blur-sm">
        <div className="flex-1 flex items-center justify-start">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-200"
          >
            Euclid
          </motion.div>
        </div>

        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex-1 flex items-center justify-center"
        >
          <div className="flex items-center space-x-[120px]">
            <Link 
              href="/" 
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Home
            </Link>
            <Link 
              href="/chat" 
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Chat
            </Link>
            <Link 
              href="/about" 
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              About
            </Link>
          </div>
        </motion.nav>

        <div className="flex-1 flex items-center justify-end space-x-4">
          <ThemeToggle />
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="hidden md:flex items-center space-x-1 bg-white/50 dark:bg-gray-800/50 px-4 py-2 rounded-full border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm"
          >
            <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/50 flex items-center justify-center">
              <span className="text-sm font-medium text-green-800 dark:text-green-200">A</span>
            </div>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">User</span>
          </motion.div>
          <div className="md:hidden">
            <MobileMenu />
          </div>
        </div>
      </header>

      {/* About Content */}
      <div className="flex flex-col mt-[120px] items-center justify-start min-h-[80vh] w-full relative px-4 max-w-6xl mx-auto">
        <Suspense fallback={<div>Loading...</div>}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center max-w-4xl mx-auto text-center space-y-16"
          >
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                type: "spring",
                stiffness: 100,
              }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white tracking-tight leading-[1.15] pb-2"
            >
              About Euclid AI
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="prose prose-lg dark:prose-invert max-w-none space-y-8"
            >
              <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                Euclid AI is a next-generation artificial intelligence platform designed to make complex problem-solving accessible to everyone. Our mission is to democratize access to advanced AI capabilities and empower users to find answers to their most challenging questions.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                  className="bg-white/50 dark:bg-gray-800/50 p-8 rounded-2xl backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50"
                >
                  <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Our Vision</h2>
                  <p className="text-gray-700 dark:text-gray-300">
                    We envision a world where artificial intelligence enhances human capability, making complex decision-making and problem-solving accessible to everyone, regardless of their technical background.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.5 }}
                  className="bg-white/50 dark:bg-gray-800/50 p-8 rounded-2xl backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50"
                >
                  <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Our Technology</h2>
                  <p className="text-gray-700 dark:text-gray-300">
                    Built on cutting-edge AI models and advanced natural language processing, Euclid AI understands context, learns from interactions, and provides accurate, relevant answers to your questions.
                  </p>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="mt-12 text-center"
              >
                <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Join Us on Our Journey</h2>
                <p className="text-xl text-gray-700 dark:text-gray-300">
                  We're building the future of AI assistance, and we'd love for you to be part of it. Join our beta program to experience the power of Euclid AI firsthand.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </Suspense>
      </div>

      {/* Floating button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="fixed bottom-6 left-6"
      >
        <button className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-800 transition-colors">
          <span className="font-medium">N</span>
        </button>
      </motion.div>
    </main>
  )
}
