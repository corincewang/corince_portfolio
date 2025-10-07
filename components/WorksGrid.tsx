'use client'

import { Calendar, MapPin, Building2, Code, Database, Brain, Users } from 'lucide-react'

const WorksGrid = () => {
  const experiences = [
    {
      id: 1,
      title: 'Software Engineer Internship',
      company: 'Menu. Inc.',
      location: 'Tokyo, Japan',
      period: 'Jul 2025 - Aug 2025',
      type: 'Internship',
      icon: <Code className="w-6 h-6" />,
      achievements: [
        'Engineered core modules for iOS/Android food tech mobile application "Menu", including Search and Main pages, using React Native and Redux for state management',
        'Led frontend development of coupon progress bar and automated campaigns, driving a 14% increase in order conversion and boosting user engagement by 8%',
        'Implemented source-tracking for store navigation across 20+ entry points with Firebase Analytics, achieving 98% accuracy',
        'Spearheaded integration of AI-driven coding guidelines into MCP development environment, achieving highest code quality score among interns',
        'Introduced Detox framework for automated E2E testing, tripling test efficiency and reducing manual regression testing hours'
      ],
      technologies: ['React Native', 'Redux', 'Firebase Analytics', 'Detox', 'MCP', 'iOS', 'Android']
    },
    {
      id: 2,
      title: 'Research Assistant',
      company: 'Center of Computational Analysis of Social & Organizational Systems',
      location: 'Carnegie Mellon University',
      period: 'Jan 2025 - Jun 2025',
      type: 'Research',
      icon: <Brain className="w-6 h-6" />,
      achievements: [
        'Developed full-stack simulation interfaces for OSIRIS platform using JQuery, reducing onboarding time by 30%',
        'Engineered backend services in Python to train and serve ML-based Intrusion Detection Systems on NSL-KDD and UNSW-NB15 datasets',
        'Achieved up to 92% detection accuracy and reduced false positives by 20% compared to baseline models',
        'Implemented extensible GUI integrated with backend APIs for seamless switching between ML algorithms and datasets',
        'Enabled real-time visualization of metrics for 7+ IDS models including precision, recall, F1-score, and confusion matrices'
      ],
      technologies: ['JavaScript', 'Node.js', 'Python', 'Machine Learning', 'ML', 'Data Science', 'GUI Development']
    },
    {
      id: 3,
      title: 'FullStack Technology Consultant',
      company: 'Pittsburgh Queer History Organization',
      location: 'Pittsburgh, PA',
      period: 'Jan 2025 - May 2025',
      type: 'Consulting',
      icon: <Users className="w-6 h-6" />,
      achievements: [
        'Engineered and launched new web application using WordPress, GSuite, and tailwind css, decreasing page load times by 30%',
        'Increased daily active users by 18% and mobile traffic by 35% through responsive design implementation',
        'Collaborated directly with client to redesign website in Figma and implemented fully responsive, API-driven interface',
        'Increased user activation and in-person event participation by 20%',
        'Expanded RSVP completion rate by 30% in Greater Pittsburgh Area',
        'Delivered live website: https://pittsburghqueerhistory.com/'
      ],
      technologies: ['React.js', 'Node.js', 'Figma', 'API Development', 'Responsive Design', 'UI/UX']
    },
    {
      id: 4,
      title: 'FullStack Engineer Internship',
      company: 'Toyz Electronics. Inc.',
      location: 'Pittsburgh, PA',
      period: 'May 2024 - Jul 2024',
      type: 'Internship',
      icon: <Code className="w-6 h-6" />,
      achievements: [
        'Implemented React.js and Node.js to create core features including Search, Registration, Admin, and Dashboard pages',
        'Enabled users to quickly locate communities within dynamic web application Dah-Varsity across 50+ universities',
        'Streamlined CI/CD processes using Microsoft Azure App Service and Azure DevOps pipelines, decreasing deployment errors by 15%',
        'Managed Azure SQL Database and Microsoft Playfab to optimize backend data flow for 3,700+ active users',
        'Achieved 15% decrease in average data retrieval times and enabled faster iteration cycles for the team',
        'Integrated ZIP-code-based socioeconomic story-generating chatbot powered by Microsoft Azure AI'
      ],
      technologies: ['React.js', 'Node.js', 'Azure', 'Azure DevOps', 'SQL Database', 'Microsoft Playfab', 'AI Integration']
    }
  ]

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Internship':
        return 'bg-blue-100 text-blue-800'
      case 'Research':
        return 'bg-purple-100 text-purple-800'
      case 'Consulting':
        return 'bg-green-100 text-green-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="relative max-w-5xl mx-auto">
      {/* Enhanced Timeline line */}
      <div className="absolute left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-400 via-orange-500 to-orange-600 rounded-full"></div>
      
      <div className="space-y-12">
        {experiences.map((experience, index) => (
          <div key={experience.id} className="relative flex items-start">
            {/* Enhanced Timeline dot */}
            <div className="absolute left-0 w-6 h-6 bg-orange-500 rounded-full border-4 border-white shadow-lg z-10 flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            
            {/* Year label - positioned to avoid overlap */}
            <div className="absolute -left-12 top-1 text-xs font-bold text-orange-600 w-8 text-right">
              {experience.period.split(' - ')[0].split(' ')[1]}
            </div>
            
            {/* Content with reduced padding */}
            <div className="ml-8 bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 w-full">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-orange-50 rounded-xl text-orange-600 border border-orange-100">
                    {experience.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{experience.title}</h3>
                    <div className="flex items-center space-x-2 text-gray-600 mb-2">
                      <Building2 className="w-4 h-4" />
                      <span className="font-semibold">{experience.company}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-500">
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{experience.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span className="font-medium">{experience.period}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getTypeColor(experience.type)}`}>
                  {experience.type}
                </span>
              </div>

              <div className="mb-6">
                <h4 className="text-base font-semibold text-gray-800 mb-4">Key Achievements</h4>
                <ul className="space-y-3">
                  {experience.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {achievement.includes('https://') ? (
                          <>
                            {achievement.split('https://')[0]}
                            <a
                              href={`https://${achievement.split('https://')[1]}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-orange-600 hover:text-orange-700 underline decoration-1 underline-offset-2 transition-colors"
                            >
                              https://{achievement.split('https://')[1]}
                            </a>
                          </>
                        ) : (
                          achievement
                        )}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-base font-semibold text-gray-800 mb-4">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-50 text-gray-700 text-xs font-medium rounded-full border border-gray-200 hover:bg-orange-50 hover:border-orange-200 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WorksGrid
