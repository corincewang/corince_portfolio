'use client'

import { ChevronDown, Github, Linkedin, Mail, Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'

const Sidebar = () => {
  const [sidebarState, setSidebarState] = useState('expanded') // 'collapsed', 'expanded'
  const [isScrolled, setIsScrolled] = useState(false)

  const scrollToWorks = () => {
    const worksSection = document.getElementById('works-section')
    if (worksSection) {
      worksSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleMenuClick = () => {
    if (sidebarState === 'collapsed') {
      setSidebarState('expanded')
    } else {
      setSidebarState('collapsed')
    }
  }

  useEffect(() => {
    let lastScrollY = window.scrollY
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const currentScrollY = window.scrollY
          
          // 向下滚动超过50px时收缩sidebar
          if (currentScrollY > lastScrollY && currentScrollY > 50) {
            setIsScrolled(true)
            setSidebarState('collapsed')
          }
          // 只有滚动到最顶部时才展开sidebar
          else if (currentScrollY === 0) {
            setIsScrolled(false)
            setSidebarState('expanded')
          }
          
          lastScrollY = currentScrollY
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={`sidebar flex flex-col items-center justify-between p-6 relative sidebar-${sidebarState}`}>
      {/* Logo */}
      <div className="text-white text-2xl font-bold serif-text sidebar-logo-enter">
        HW
      </div>

      {/* Menu Button */}
      <button
        onClick={handleMenuClick}
        className="bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 sidebar-menu-enter button-press"
      >
        {sidebarState === 'collapsed' ? <Menu size={20} /> : <X size={20} />}
      </button>

      {/* Collapsible Navigation Links */}
      {sidebarState === 'expanded' && (
        <div className="flex flex-col space-y-4 py-4">
          <a
            href="/"
            className="text-white hover:text-orange-400 transition-colors text-sm font-medium py-2 px-4 rounded-lg hover:bg-white/10"
            onClick={() => setSidebarState('collapsed')}
          >
            Home
          </a>
          <a
            href="/works"
            className="text-white hover:text-orange-400 transition-colors text-sm font-medium py-2 px-4 rounded-lg hover:bg-white/10"
            onClick={() => setSidebarState('collapsed')}
          >
            Work Experience
          </a>
          <a
            href="/project"
            className="text-white hover:text-orange-400 transition-colors text-sm font-medium py-2 px-4 rounded-lg hover:bg-white/10"
            onClick={() => setSidebarState('collapsed')}
          >
            Project
          </a>
          <a
            href="/illustration"
            className="text-white hover:text-orange-400 transition-colors text-sm font-medium py-2 px-4 rounded-lg hover:bg-white/10"
            onClick={() => setSidebarState('collapsed')}
          >
            Illustration
          </a>
        </div>
      )}

      {/* Scroll Indicator - only show in expanded state */}
      {sidebarState === 'expanded' && (
        <div className="flex flex-col items-center space-y-4 sidebar-scroll-enter">
          <div className="scroll-indicator h-32"></div>
          <button 
            onClick={scrollToWorks}
            className="text-white text-xs hover:text-orange-400 transition-colors cursor-pointer"
          >
            SCROLL
          </button>
        </div>
      )}

      {/* Social Media Icons - only show in expanded state */}
      {sidebarState === 'expanded' && (
        <div className="flex flex-col space-y-4 sidebar-social-enter">
          <a
            href="mailto:corincewang@gmail.com"
            className="text-white hover:text-orange-400 transition-colors social-icon hover-scale"
          >
            <Mail size={20} />
          </a>
          <a
            href="https://github.com/corincewang"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-orange-400 transition-colors social-icon hover-scale"
          >
            <Github size={20} />
          </a>
          <a
            href="https://linkedin.com/in/corincewang"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-orange-400 transition-colors social-icon hover-scale"
          >
            <Linkedin size={20} />
          </a>
        </div>
      )}

      {/* Scroll Down Arrow - only show in expanded state */}
      {sidebarState === 'expanded' && (
        <button
          onClick={scrollToWorks}
          className="text-white hover:text-orange-400 transition-colors social-icon hover-scale sidebar-arrow-enter"
        >
          <ChevronDown size={24} />
        </button>
      )}
    </div>
  )
}

export default Sidebar
