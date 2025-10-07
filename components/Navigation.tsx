'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'My works', href: '/works' },
    { name: 'Tutorials', href: '/tutorials' },
    { name: 'Diary', href: '/diary' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="flex justify-between items-center py-6 px-8">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold serif-text text-2d1b69">
          Han Wang
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-2d1b69 hover:text-orange-400 transition-colors duration-200 font-medium serif-text"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-2d1b69"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm py-4 px-8 border-t border-gray-200">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-2d1b69 hover:text-orange-400 transition-colors duration-200 font-medium serif-text"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navigation
