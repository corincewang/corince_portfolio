import IllustrationList from '@/components/IllustrationList'
import Sidebar from '@/components/Sidebar'

export default function IllustrationPage() {
  return (
    <div className="flex min-h-screen">
      {/* Main Content Area - Left 75% */}
      <div className="w-3/4 main-content">
        <div className="pt-24 pb-16 px-8">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <h1 className="text-6xl md:text-8xl font-bold serif-text text-gray-800 mb-8">Illustration</h1>
              <p className="text-xl text-gray-600 max-w-3xl serif-text">
                A collection of my digital illustrations, creative designs, and visual art pieces. 
                Each artwork represents my creative expression and passion for visual storytelling.
              </p>
            </div>
            
            <IllustrationList />
          </div>
        </div>
      </div>

      {/* Right Sidebar - 25% */}
      <Sidebar />
    </div>
  )
} 
