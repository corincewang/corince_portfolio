import WorksGrid from '@/components/WorksGrid'
import Sidebar from '@/components/Sidebar'

export default function WorksPage() {
  return (
    <div className="flex min-h-screen">
      {/* Main Content Area - Left 75% */}
      <div className="w-3/4 main-content">
        <div className="pt-24 pb-16 px-8">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <h1 className="text-6xl md:text-8xl font-bold serif-text text-gray-800 mb-8">Work Experience</h1>
              <p className="text-xl text-gray-600 max-w-3xl serif-text">
                A collection of my professional experiences, internships, and career milestones. 
                Each role represents a step in my journey as a software engineer and designer.
              </p>
            </div>
            
            <WorksGrid />
          </div>
        </div>
      </div>

      {/* Right Sidebar - 25% */}
      <Sidebar />
    </div>
  )
} 
