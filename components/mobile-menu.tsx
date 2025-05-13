"use client"

import { useState } from "react"
import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  return (
    <div className="md:hidden">
      <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu">
        <Menu className="h-6 w-6" />
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50"
            onClick={closeMenu}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed top-0 right-0 h-full w-3/4 max-w-sm bg-white dark:bg-gray-900 shadow-xl p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-8">
                <span className="text-xl font-bold">Euclid</span>
                <div className="flex items-center gap-2">
                  <ThemeToggle />
                  <Button variant="ghost" size="icon" onClick={closeMenu} aria-label="Close menu">
                    <X className="h-6 w-6" />
                  </Button>
                </div>
              </div>

              <nav className="flex flex-col space-y-6">
                <Link
                  href="/"
                  className="text-lg font-medium hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                  onClick={closeMenu}
                >
                  Home
                </Link>
                <Link
                  href="/chat"
                  className="text-lg font-medium hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                  onClick={closeMenu}
                >
                  Chat
                </Link>
                <Link
                  href="/about"
                  className="text-lg font-medium hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                  onClick={closeMenu}
                >
                  About
                </Link>
              </nav>

              <div className="mt-auto pt-8">
                <Button
                  onClick={closeMenu}
                  className="w-full bg-black dark:bg-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 text-white py-5 rounded-lg transition-all"
                >
                  Join Beta Waitlist
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
