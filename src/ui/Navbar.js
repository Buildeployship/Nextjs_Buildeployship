'use client'

import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <div>
        <nav className="container mx-auto flex justify-center items-center top-0 p-5 min-w-full fixed gap-4 flex-col sm:flex-row sm:gap-8 bg-white/90 dark:bg-black/90 backdrop-blur-md z-50">

        {/* Home Link */}
          <Link href="/" className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
          rel="noopener noreferrer"
          >
          Home
          </Link>

          {/* Projects Link */}
          <a href="/projects" className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
          rel="noopener noreferrer"
          >
          Projects
          </a>

          {/* About Link */}
          <Link href="/about" className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
          rel="noopener noreferrer"
          >
          About
          </Link>

          {/* Contact */}
          <Link href="/about" className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
          rel="noopener noreferrer"
          >
          Contact
          </Link>

          </nav>
    </div>
  )
}
