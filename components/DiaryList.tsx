'use client'

import { motion } from 'framer-motion'
import { Calendar, Clock, Tag } from 'lucide-react'

const DiaryList = () => {
  const diaryEntries = [
    {
      id: 1,
      title: 'My First Internship Experience',
      content: 'Just finished my first software engineering internship at a startup. The experience was incredible - I learned so much about real-world development, team collaboration, and the importance of clean code. The most valuable lesson was understanding that being a good developer isn\'t just about writing code, but about solving problems and communicating effectively with your team.',
      excerpt: 'Reflecting on my first internship experience and the valuable lessons learned about real-world development...',
      date: '2024-01-20',
      readTime: '5 min read',
      tags: ['Internship', 'Learning', 'Career'],
      featured: true
    },
    {
      id: 2,
      title: 'The Art of Balancing Design and Development',
      content: 'As someone who loves both UI/UX design and coding, I\'ve been exploring how to bridge the gap between design and development. It\'s fascinating how understanding both sides can make you a more effective developer. When you can see the design intent behind every pixel, you write better code.',
      excerpt: 'Exploring the intersection of design and development, and how understanding both makes you a better developer...',
      date: '2024-01-15',
      readTime: '4 min read',
      tags: ['Design', 'Development', 'UI/UX'],
      featured: true
    },
    {
      id: 3,
      title: 'Why I Chose Computer Science',
      content: 'Looking back at my decision to pursue Computer Science, I realize it wasn\'t just about the job prospects (though those are great). It was about the endless possibilities to create, solve problems, and make a difference. Every day brings new challenges and opportunities to learn something new.',
      excerpt: 'Reflecting on my journey into Computer Science and what drives my passion for technology...',
      date: '2024-01-10',
      readTime: '3 min read',
      tags: ['Career', 'Motivation', 'CS'],
      featured: false
    },
    {
      id: 4,
      title: 'Learning to Code: The First Steps',
      content: 'I remember the first time I wrote "Hello World" - it felt like magic. That simple line of code opened up a whole new world of possibilities. The journey from that first program to building full-stack applications has been challenging but incredibly rewarding.',
      excerpt: 'Sharing my early coding journey and the excitement of writing my first programs...',
      date: '2024-01-05',
      readTime: '4 min read',
      tags: ['Learning', 'Programming', 'Journey'],
      featured: false
    },
    {
      id: 5,
      title: 'The Importance of Side Projects',
      content: 'Side projects have been crucial to my growth as a developer. They\'re where I experiment with new technologies, try out crazy ideas, and learn without the pressure of deadlines. My latest project - a personal portfolio website - taught me more about modern web development than any tutorial.',
      excerpt: 'Why side projects are essential for developer growth and learning new technologies...',
      date: '2023-12-28',
      readTime: '6 min read',
      tags: ['Projects', 'Learning', 'Growth'],
      featured: false
    },
    {
      id: 6,
      title: 'Digital Art as a Creative Outlet',
      content: 'When I\'m not coding, I love creating digital art. It\'s a completely different kind of problem-solving - working with colors, composition, and visual storytelling. I\'ve found that my artistic background actually helps me think more creatively about UI design and user experience.',
      excerpt: 'How digital art complements my technical skills and enhances my approach to design...',
      date: '2023-12-20',
      readTime: '5 min read',
      tags: ['Art', 'Creativity', 'Design'],
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
      className="space-y-8"
    >
      {diaryEntries.map((entry) => (
        <motion.article
          key={entry.id}
          variants={itemVariants}
          className="group bg-white border border-gray-200 hover:border-gray-300 transition-all duration-300 p-8"
        >
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1 text-sm text-gray-500">
                <Calendar size={16} />
                <span>{new Date(entry.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
              <div className="flex items-center space-x-1 text-sm text-gray-500">
                <Clock size={16} />
                <span>{entry.readTime}</span>
              </div>
            </div>
            {entry.featured && (
              <span className="px-3 py-1 bg-black text-white text-sm font-medium">
                Featured
              </span>
            )}
          </div>
          
          <h2 className="text-2xl font-medium text-black mb-4 group-hover:text-gray-600 transition-colors">
            {entry.title}
          </h2>
          
          <p className="text-gray-600 leading-relaxed mb-6">
            {entry.excerpt}
          </p>
          
          <div className="flex flex-wrap gap-2">
            {entry.tags.map((tag) => (
              <span
                key={tag}
                className="flex items-center space-x-1 px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded"
              >
                <Tag size={12} />
                <span>{tag}</span>
              </span>
            ))}
          </div>
        </motion.article>
      ))}
    </motion.div>
  )
}

export default DiaryList
