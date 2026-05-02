'use client'

import { Calendar, Clock, ExternalLink, Github } from 'lucide-react'

const ProjectList = () => {
  const projects = [
    {
      id: 1,
      title: 'Pawse — Pet Experience & Social iOS App',
      description:
        'Lead iOS development for Pawse, a Swift pet experience and social app built with a team of three: adaptive social feeds with ranking, weekly contests and dynamic push notifications on AWS Lambda; Firebase NoSQL and custom REST APIs for users, pets, and contests.',
      image: '/assets/IMG_9073.PNG',
      images: ['/assets/IMG_9073.PNG', '/assets/IMG_9074.PNG', '/assets/IMG_9075.PNG'],
      category: 'iOS · Mobile',
      duration: 'Aug 2025 – present',
      date: '2025-08-01',
      tags: ['Swift', 'iOS', 'Firebase', 'AWS Lambda', 'AWS S3', 'REST APIs', 'Fastlane', 'TestFlight'],
      github: '',
      live: '',
      featured: true,
    },
    {
      id: 2,
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
      id: 3,
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
      {projects.map((project) => {
        const displayImages =
          'images' in project && project.images && project.images.length > 0
            ? project.images
            : [project.image]
        const galleryCount = displayImages.length
        const isTripleGallery = galleryCount > 2
        return (
        <article
          key={project.id}
          className="group bg-white border border-gray-200 hover:border-gray-300 transition-all duration-300 overflow-hidden grid-item hover-lift rounded-2xl"
        >
          <div className="flex flex-col md:flex-row md:items-stretch">
            <div
              className={`w-full md:w-2/5 relative overflow-hidden flex bg-gray-200 rounded-t-2xl md:rounded-t-none md:rounded-l-2xl md:rounded-tr-none ${
                displayImages.length > 1
                  ? isTripleGallery
                    ? 'min-h-[300px] md:min-h-[392px] items-center justify-center gap-2 md:gap-3 px-3 py-6 md:px-4 md:py-8'
                    : 'min-h-[260px] md:min-h-[320px] items-center justify-center gap-3 md:gap-5 px-4 py-6 md:px-6 md:py-10'
                  : 'relative min-h-[12rem] md:min-h-[260px] p-0 self-stretch'
              }`}
            >
              {displayImages.map((src, i) => (
                <img
                  key={`${project.id}-${i}`}
                  src={src}
                  alt={i === 0 ? project.title : `${project.title} — screen ${i + 1}`}
                  className={
                    displayImages.length > 1
                      ? isTripleGallery
                        ? 'max-h-[192px] sm:max-h-[220px] md:max-h-[265px] lg:max-h-[288px] w-auto max-w-[32%] object-contain rounded-lg shadow-sm border border-gray-200/80'
                        : 'max-h-[210px] sm:max-h-[240px] md:max-h-[280px] lg:max-h-[300px] w-auto max-w-[49%] object-contain rounded-lg shadow-sm border border-gray-200/80'
                      : 'absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-300'
                  }
                />
              ))}
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
        )
      })}
    </div>
  )
}

export default ProjectList 
