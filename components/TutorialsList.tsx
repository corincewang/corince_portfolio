'use client'

import { motion } from 'framer-motion'
import { Calendar, Clock, ExternalLink, Github } from 'lucide-react'

const TutorialsList = () => {
  const tutorials = [
    {
      id: 1,
      title: 'Building a Full-Stack React Application',
      description: 'Complete guide to building a modern web application with React, Node.js, and MongoDB. Learn about state management, API design, and deployment.',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop',
      category: 'Web Development',
      duration: '45 min read',
      date: '2024-01-15',
      difficulty: 'Intermediate',
      tags: ['React', 'Node.js', 'MongoDB', 'JavaScript'],
      github: 'https://github.com/hanwang/react-tutorial',
      live: 'https://react-tutorial-demo.com',
      featured: true
    },
    {
      id: 2,
      title: 'UI/UX Design Principles for Developers',
      description: 'Essential design principles every developer should know. Learn how to create beautiful and functional user interfaces.',
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=400&fit=crop',
      category: 'Design',
      duration: '30 min read',
      date: '2024-01-10',
      difficulty: 'Beginner',
      tags: ['UI/UX', 'Design', 'Figma', 'Accessibility'],
      github: '',
      live: 'https://design-principles-guide.com',
      featured: true
    },
    {
      id: 3,
      title: 'Machine Learning with Python',
      description: 'Introduction to machine learning concepts and implementation using Python, scikit-learn, and TensorFlow.',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=400&fit=crop',
      category: 'Data Science',
      duration: '60 min read',
      date: '2024-01-05',
      difficulty: 'Advanced',
      tags: ['Python', 'Machine Learning', 'TensorFlow', 'Data Science'],
      github: 'https://github.com/hanwang/ml-tutorial',
      live: 'https://ml-tutorial-demo.com',
      featured: false
    },
    {
      id: 4,
      title: 'Mobile App Development with React Native',
      description: 'Build cross-platform mobile applications using React Native. Learn about navigation, state management, and native features.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=400&fit=crop',
      category: 'Mobile Development',
      duration: '50 min read',
      date: '2023-12-28',
      difficulty: 'Intermediate',
      tags: ['React Native', 'JavaScript', 'Mobile', 'iOS', 'Android'],
      github: 'https://github.com/hanwang/rn-tutorial',
      live: 'https://rn-tutorial-demo.com',
      featured: false
    },
    {
      id: 5,
      title: 'Digital Art Techniques and Tools',
      description: 'Explore digital art creation using various tools and techniques. From concept to final artwork.',
      image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=400&fit=crop',
      category: 'Digital Art',
      duration: '35 min read',
      date: '2023-12-20',
      difficulty: 'Beginner',
      tags: ['Digital Art', 'Procreate', 'Photoshop', 'Illustration'],
      github: '',
      live: 'https://digital-art-guide.com',
      featured: false
    },
    {
      id: 6,
      title: 'API Design and Documentation',
      description: 'Best practices for designing RESTful APIs and creating comprehensive documentation for developers.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop',
      category: 'Backend Development',
      duration: '40 min read',
      date: '2023-12-15',
      difficulty: 'Intermediate',
      tags: ['API', 'REST', 'Documentation', 'Node.js', 'OpenAPI'],
      github: 'https://github.com/hanwang/api-tutorial',
      live: 'https://api-tutorial-demo.com',
      featured: false
    }
  ]

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner':
        return 'bg-green-100 text-green-800'
      case 'Intermediate':
        return 'bg-yellow-100 text-yellow-800'
      case 'Advanced':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

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
      className="space-y-8"
    >
      {tutorials.map((tutorial) => (
        <motion.article
          key={tutorial.id}
          variants={itemVariants}
          className="group bg-white border border-gray-200 hover:border-gray-300 transition-all duration-300 overflow-hidden"
        >
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 h-48 md:h-auto relative overflow-hidden">
              <img
                src={tutorial.image}
                alt={tutorial.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {tutorial.featured && (
                <div className="absolute top-4 left-4 bg-black text-white px-3 py-1 text-sm font-medium">
                  Featured
                </div>
              )}
            </div>
            
            <div className="md:w-2/3 p-8">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-gray-500 font-medium">{tutorial.category}</span>
                  <span className={`px-2 py-1 text-xs font-medium rounded ${getDifficultyColor(tutorial.difficulty)}`}>
                    {tutorial.difficulty}
                  </span>
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Clock size={16} />
                    <span>{tutorial.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar size={16} />
                    <span>{new Date(tutorial.date).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
              
              <h2 className="text-2xl font-medium text-black mb-4 group-hover:text-gray-600 transition-colors">
                {tutorial.title}
              </h2>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                {tutorial.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {tutorial.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center space-x-4">
                {tutorial.github && (
                  <a
                    href={tutorial.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-600 hover:text-black transition-colors"
                  >
                    <Github size={18} />
                    <span>Code</span>
                  </a>
                )}
                {tutorial.live && (
                  <a
                    href={tutorial.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-600 hover:text-black transition-colors"
                  >
                    <ExternalLink size={18} />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </motion.article>
      ))}
    </motion.div>
  )
}

export default TutorialsList
