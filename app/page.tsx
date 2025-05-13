"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, ArrowRight, X, ChevronDown } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { toast } from "@/components/ui/use-toast"
import { ThemeToggle } from "@/components/theme-toggle"
import { AnimatedBackground } from "@/components/animated-background"
import { SocialProof } from "@/components/social-proof"
import { MobileMenu } from "@/components/mobile-menu"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { trackWaitlistSignup } from "@/lib/analytics"
import FAQSection from "@/components/faq"

export default function Home() {
  const [query, setQuery] = useState("")
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false)
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)

  // Example questions that will rotate in the input placeholder
  const exampleQuestions = [
    "What are the hottest RWA tokens I should buy?",
    "How do I optimize my crypto portfolio?",
    "What's the latest in AI technology?",
    "Explain quantum computing simply",
    "What are the best investment strategies for 2025?",
  ]
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)

  // Rotate through example questions
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const interval = setInterval(() => {
        setCurrentQuestionIndex((prev) => (prev + 1) % exampleQuestions.length)
      }, 3000)
      return () => clearInterval(interval)
    }
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // This would connect to your backend
    console.log("Query submitted:", query)
  }

  const handleWaitlistSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || data.message || "Something went wrong")
      }

      trackWaitlistSignup(email)
      setIsLoading(false)
      setIsSubmitted(true)
      toast({
        title: "Success!",
        description: "You've been added to our waitlist.",
      })

      setTimeout(() => {
        setIsWaitlistOpen(false)
        setIsSubmitted(false)
        setEmail("")
        setName("")
      }, 3000)
    } catch (err) {
      setIsLoading(false)
      setError(err instanceof Error ? err.message : "Failed to register")
      // toast({
      //   title: "Error",
      //   description: err instanceof Error ? err.message : "Failed to register",
      //   variant: "destructive",
      // })
    }
  }

  useEffect(() => {
    if (typeof window !== 'undefined' && inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-start bg-gray-50 dark:bg-gray-900">
      <AnimatedBackground />
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 flex items-center justify-between px-6 py-4 z-10 bg-gray-50/80 dark:bg-gray-900/80 backdrop-blur-sm">
        <div className="flex-1 flex items-center justify-start">
          <Link href="/">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-200"
            >
              Euclid
            </motion.div>
          </Link>
        </div>

        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden md:flex flex-1 items-center justify-center"
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

      {/* Hero Section */}
      <div className="flex flex-col mt-[120px] items-center justify-center min-h-[80vh] w-full relative px-4">
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
            Ask Euclid Anything
          </motion.h1>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            onSubmit={handleSubmit}
            className="w-full max-w-3xl relative"
          >
            <div className="relative w-full group">
              <Input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={exampleQuestions[currentQuestionIndex]}
                className="w-full py-8 pl-6 pr-14 rounded-2xl text-lg shadow-lg border-2 border-gray-200 dark:border-gray-700 focus:ring-4 ring-gray-200 dark:ring-gray-700/50 focus:border-transparent dark:bg-gray-800/50 dark:text-white backdrop-blur-sm transition-all duration-300 group-hover:shadow-xl"
              />
              <button
                type="submit"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              >
                <Search className="w-6 h-6" />
              </button>
            </div>
          </motion.form>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col items-center space-y-8"
          >
            <Button
              onClick={() => setIsWaitlistOpen(true)}
              className="bg-black dark:bg-white dark:text-black text-white px-12 py-7 rounded-2xl text-xl font-medium transition-all duration-300 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] hover:bg-gray-800 dark:hover:bg-gray-200"
            >
              Join Beta Waitlist
              <ArrowRight className="ml-2 h-6 w-6" />
            </Button>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl text-center leading-relaxed"
            >
              Get early access to Euclid AI and be among the first to experience the future of AI assistance.
            </motion.p>
          </motion.div>
        </motion.div>
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

      {/* Waitlist Modal */}
      <AnimatePresence mode="wait">
        {isWaitlistOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={() => setIsWaitlistOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="bg-white dark:bg-gray-800 backdrop-blur-lg rounded-2xl p-8 max-w-md w-full shadow-2xl border border-gray-200/50 dark:border-gray-700/50"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-black dark:text-white">Join Euclid Beta</h2>
                <button
                  onClick={() => setIsWaitlistOpen(false)}
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              {!isSubmitted ? (
                <form onSubmit={handleWaitlistSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Euclid User"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="example@euclid.ai"
                      className="w-full"
                    />
                  </div>
                  {error && <p className="text-red-500 text-sm">{error}</p>}
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className={cn(
                      "w-full bg-black dark:bg-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 text-white py-5 rounded-lg transition-colors",
                      isLoading && "opacity-70 cursor-not-allowed"
                    )}
                  >
                    {isLoading ? "Processing..." : "Join Waitlist"}
                  </Button>
                </form>
              ) : (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-8"
                >
                  <div className="mb-4 text-green-500 flex justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-16 w-16"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium mb-2 text-black dark:text-white">You're on the list!</h3>
                  <p className="text-gray-500">We'll notify you when Euclid is ready for you.</p>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content Sections */}
      <div className="w-full">
        <FAQSection />
        <SocialProof />
      </div>
    </main>
  )
}
