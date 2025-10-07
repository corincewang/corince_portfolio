import TutorialsList from '@/components/TutorialsList'

export default function TutorialsPage() {
  return (
    <div className="min-h-screen main-content">
      <div className="pt-24 pb-16 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h1 className="text-6xl md:text-8xl font-bold serif-text text-2d1b69 mb-8">Tutorials</h1>
            <p className="text-xl text-gray-600 max-w-3xl serif-text">
              Technical tutorials, coding guides, and project walkthroughs. 
              Sharing knowledge and helping others learn through practical examples.
            </p>
          </div>
          
          <TutorialsList />
        </div>
      </div>
    </div>
  )
}
