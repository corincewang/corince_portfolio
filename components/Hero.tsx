'use client'

import { motion } from 'framer-motion'
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react'

const Hero = () => {
  return (
    <div className="flex min-h-screen">
      {/* Main Content Area - Left 70% */}
      <div className="w-3/4 main-content flex items-center justify-center p-8">
        <div className="flex items-center w-full max-w-6xl">
          {/* Portrait Area - Left */}
          <div className="w-1/3 pr-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="portrait-container"
            >
              <div className="w-full h-96 bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg flex items-center justify-center">
                <div className="text-white text-6xl font-bold serif-text">HW</div>
              </div>
            </motion.div>
          </div>

          {/* Text Content - Center */}
          <div className="w-2/3 pl-8 relative">
            {/* Orange Brackets */}
            <div className="absolute -top-4 -left-4 orange-bracket">┌</div>
            <div className="absolute -top-4 -right-4 orange-bracket">┐</div>
            <div className="absolute -bottom-4 -left-4 orange-bracket">└</div>
            <div className="absolute -bottom-4 -right-4 orange-bracket">┘</div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-center"
            >
              <p className="text-lg text-gray-600 mb-4">Hey there! My name is</p>
              
              <h1 className="text-6xl md:text-8xl font-bold serif-text text-2d1b69 mb-4">
                HAN WANG
              </h1>
              
              <p className="text-lg text-gray-600 mb-4">or you can call me</p>
              
              <h2 className="text-6xl md:text-8xl font-bold serif-text text-2d1b69 mb-8">
                HAN
              </h2>
              
              <p className="text-xl text-2d1b69 mb-2">
                I am a Computer Science Student,<br />
                Software Engineer,<br />
                UI Designer<br />
                ... <span className="orange-accent font-bold">and just a human</span>
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Right Sidebar - 25% */}
      <div className="w-1/4 sidebar flex flex-col items-center justify-between p-6">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-white text-2xl font-bold serif-text"
        >
          HW
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="flex flex-col items-center space-y-4"
        >
          <div className="scroll-indicator h-32"></div>
          <div className="text-white text-xs">SCROLL</div>
        </motion.div>

        {/* Social Media Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="flex flex-col space-y-4"
        >
          <a
            href="mailto:han.wang@email.com"
            className="text-white hover:text-orange-400 transition-colors"
          >
            <Mail size={20} />
          </a>
          <a
            href="https://github.com/hanwang"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-orange-400 transition-colors"
          >
            <Github size={20} />
          </a>
          <a
            href="https://linkedin.com/in/hanwang"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-orange-400 transition-colors"
          >
            <Linkedin size={20} />
          </a>
        </motion.div>

        {/* Scroll Down Arrow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="text-white"
        >
          <ChevronDown size={24} />
        </motion.div>
      </div>
    </div>
  )
}

export default Hero
