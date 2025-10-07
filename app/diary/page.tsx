import DiaryList from '@/components/DiaryList'

export default function DiaryPage() {
  return (
    <div className="min-h-screen main-content">
      <div className="pt-24 pb-16 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h1 className="text-6xl md:text-8xl font-bold serif-text text-2d1b69 mb-8">Diary</h1>
            <p className="text-xl text-gray-600 max-w-3xl serif-text">
              Personal thoughts, experiences, and insights from my journey as a developer and designer. 
              Sharing the ups and downs of learning and growing in tech.
            </p>
          </div>
          
          <DiaryList />
        </div>
      </div>
    </div>
  )
}
