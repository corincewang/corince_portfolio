import ProjectList from '@/components/ProjectList'
import Sidebar from '@/components/Sidebar'

export default function ProjectPage() {
  return (
    <div className="flex min-h-screen">
      {/* Main Content Area - Left 75% */}
      <div className="w-3/4 main-content">
        <div className="pt-24 pb-16 px-8">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <h1 className="text-6xl md:text-8xl font-bold serif-text text-gray-800 mb-8">Project</h1>
              <p className="text-xl text-gray-600 max-w-3xl serif-text">
                Personal and academic projects showcasing my technical skills and creativity. 
                Each project represents a learning opportunity and a step forward in my development journey.
              </p>
            </div>
            
            <ProjectList />
          </div>
        </div>
      </div>

      {/* Right Sidebar - 25% */}
      <Sidebar />
    </div>
  )
}
