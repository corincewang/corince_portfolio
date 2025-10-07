'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ExternalLink, Github } from 'lucide-react'

const WorksGrid = () => {
  const works = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      category: 'Web Development',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com/hanwang/ecommerce',
      live: 'https://ecommerce-demo.com',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates and team collaboration features.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop',
      category: 'Web Development',
      technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
      github: 'https://github.com/hanwang/taskapp',
      live: 'https://taskapp-demo.com',
      featured: true
    },
    {
      id: 3,
      title: 'Mobile Banking UI',
      description: 'Modern mobile banking interface design with focus on user experience and accessibility.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop',
      category: 'UI/UX Design',
      technologies: ['Figma', 'Adobe XD', 'Principle'],
      github: '',
      live: 'https://banking-ui-demo.com',
      featured: false
    },
    {
      id: 4,
      title: 'Data Visualization Dashboard',
      description: 'Interactive dashboard for analyzing and visualizing complex datasets with real-time updates.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      category: 'Data Science',
      technologies: ['Python', 'D3.js', 'Flask', 'Pandas'],
      github: 'https://github.com/hanwang/dashboard',
      live: 'https://dashboard-demo.com',
      featured: false
    },
    {
      id: 5,
      title: 'Digital Art Collection',
      description: 'Personal collection of digital artworks exploring the intersection of technology and creativity.',
      image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=600&fit=crop',
      category: 'Digital Art',
      technologies: ['Procreate', 'Adobe Illustrator', 'Photoshop'],
      github: '',
      live: 'https://art-collection.com',
      featured: false
    },
    {
      id: 6,
      title: 'AI Chatbot',
      description: 'Intelligent chatbot powered by machine learning for customer support and assistance.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
      category: 'AI/ML',
      technologies: ['Python', 'TensorFlow', 'OpenAI API', 'FastAPI'],
      github: 'https://github.com/hanwang/chatbot',
      live: 'https://chatbot-demo.com',
      featured: false
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {works.map((work) => (
        <motion.div
          key={work.id}
          variants={itemVariants}
          className="group bg-white border border-gray-200 hover:border-gray-300 transition-all duration-300 overflow-hidden"
        >
          <div className="relative h-64 overflow-hidden">
            <Image
              src={work.image}
              alt={work.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            {work.featured && (
              <div className="absolute top-4 left-4 bg-black text-white px-3 py-1 text-sm font-medium">
                Featured
              </div>
            )}
          </div>
          
          <div className="p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-500 font-medium">{work.category}</span>
              <div className="flex space-x-2">
                {work.github && (
                  <a
                    href={work.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-black transition-colors"
                  >
                    <Github size={18} />
                  </a>
                )}
                {work.live && (
                  <a
                    href={work.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-black transition-colors"
                  >
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>
            </div>
            
            <h3 className="text-xl font-medium text-black mb-3 group-hover:text-gray-600 transition-colors">
              {work.title}
            </h3>
            
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              {work.description}
            </p>
            
            <div className="flex flex-wrap gap-2">
              {work.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}

export default WorksGrid
