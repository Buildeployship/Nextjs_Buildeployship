'use client'

import React, { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <nav className="fixed top-0 left-0 w-full bg-white/90 dark:bg-black/90 backdrop-blur-md z-50 p-5">
        <div className="container mx-auto flex justify-center items-center">
          {/* Desktop links */}
          <div className="hidden sm:flex gap-8">
            <Link 
              href="/" 
              className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            >
              Home
            </Link>
            <Link 
              href="/projects" 
              className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            >
              Projects
            </Link>
            <Link 
              href="/about" 
              className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="sm:hidden flex flex-col justify-center items-center space-y-1.5 ml-auto"
            aria-label="Toggle menu"
          >
            <span className="w-6 h-0.5 bg-black dark:bg-white transition-transform duration-300 ease-in-out" 
                  style={{ transform: isOpen ? 'rotate(45deg) translateY(8px)' : 'rotate(0) translateY(0)' }} 
            />
            <span className="w-6 h-0.5 bg-black dark:bg-white transition-opacity duration-300 ease-in-out" 
                  style={{ opacity: isOpen ? 0 : 1 }} 
            />
            <span className="w-6 h-0.5 bg-black dark:bg-white transition-transform duration-300 ease-in-out" 
                  style={{ transform: isOpen ? 'rotate(-45deg) translateY(-8px)' : 'rotate(0) translateY(0)' }} 
            />
          </button>
        </div>
      </nav>

      {/* Immersive mobile menu */}
      <div 
        className={`fixed inset-0 bg-white/95 dark:bg-black/95 backdrop-blur-md z-40 flex flex-col justify-center items-center transition-opacity duration-500 ease-in-out sm:hidden ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <Link 
          href="/" 
          onClick={() => setIsOpen(false)}
          className="text-3xl font-medium mb-8 hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
        >
          Home
        </Link>
        <Link 
          href="/projects" 
          onClick={() => setIsOpen(false)}
          className="text-3xl font-medium mb-8 hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
        >
          Projects
        </Link>
        <Link 
          href="/about" 
          onClick={() => setIsOpen(false)}
          className="text-3xl font-medium mb-8 hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
        >
          About
        </Link>
        <Link 
          href="/contact" 
          onClick={() => setIsOpen(false)}
          className="text-3xl font-medium mb-8 hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
        >
          Contact
        </Link>
      </div>
    </div>
  )
}
