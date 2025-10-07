'use client'

import { Calendar, Clock, ExternalLink, Github } from 'lucide-react'

const ProjectList = () => {
  const projects = [
    {
      id: 1,
      title: 'Santorini Multiple Player Online Game',
      description: 'A multiplayer online board game implementation of Santorini with real-time gameplay, featuring strategic building mechanics and competitive multiplayer functionality.',
      image: '/assets/santorini.png',
      category: 'Web Application Development',
      duration: '2 months',
      date: '2024-10-15',
      tags: ['Java', 'Multiplayer', 'Spring Boot', 'Socket Programming', 'React.js', 'GUI'],
      github: 'https://github.com/corincewang/santorini-game',
      live: '',
      featured: true
    },
    {
      id: 2,
      title: 'Astral Attackers',
      description: 'A Unity-based arcade shooting game featuring three challenging levels including a boss fight. Experience fast-paced action with retro-inspired graphics and engaging gameplay mechanics.',
      image: '/assets/AstralAttackers.png',
      category: 'Game Development',
      duration: '1 month',
      date: '2025-09-01',
      tags: ['Unity', 'C#', 'Game Development', 'Arcade', '2D Game'],
      github: 'https://github.com/corincewang/AstralAttackers',
      live: '',
      featured: true
    },
    
  ]


  return (
    <div className="space-y-12 grid-container">
      {projects.map((project) => (
        <article
          key={project.id}
          className="group bg-white border border-gray-200 hover:border-gray-300 transition-all duration-300 overflow-hidden grid-item hover-lift rounded-2xl"
        >
          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/5 h-48 md:h-auto relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 rounded-l-2xl"
              />
              {project.featured && (
                <div className="absolute top-4 left-4 bg-black text-white px-3 py-1 text-sm font-medium">
                  Featured
                </div>
              )}
            </div>
            
            <div className="md:w-3/5 p-8">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-gray-500 font-medium">{project.category}</span>
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Clock size={16} />
                    <span>{project.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar size={16} />
                    <span>{new Date(project.date).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
              
              <h2 className="text-2xl font-medium text-black mb-4 group-hover:text-gray-600 transition-colors">
                {project.title}
              </h2>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center space-x-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-600 hover:text-black transition-colors"
                  >
                    <Github size={18} />
                    <span>Code</span>
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
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
        </article>
      ))}
    </div>
  )
}

export default ProjectList 
