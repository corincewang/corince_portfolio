'use client'

import Sidebar from './Sidebar'

const Hero = () => {
  return (
    <div className="flex min-h-screen">
      {/* Main Content Area - Left 70% */}
      <div className="w-3/4 main-content flex items-center justify-center p-8">
        <div className="flex items-center justify-center w-full max-w-6xl">
          {/* Text Content - Centered */}
          <div className="w-full max-w-4xl relative text-center">
                {/* Orange Brackets */}
                <div className="absolute -top-4 -left-4 orange-bracket">┌</div>
                <div className="absolute -top-4 -right-4 orange-bracket">┐</div>
                <div className="absolute -bottom-4 -left-4 orange-bracket">└</div>
                <div className="absolute -bottom-4 -right-4 orange-bracket">┘</div>

            <div className="text-content hero-text-enter">
              <p className="text-xl text-white/90 mb-6 sans-text-light">Hey there! My name is</p>
              
              <h1 className="text-7xl md:text-9xl serif-text-large text-white mb-6 leading-tight">
                HAN WANG
              </h1>
              
              <p className="text-xl text-white/90 mb-6 sans-text-light">or you can call me</p>
              
              <h2 className="text-7xl md:text-9xl serif-text-large text-white mb-12 leading-tight">
                HAN
              </h2>
              
              <p className="text-2xl text-white mb-8 leading-relaxed max-w-3xl mx-auto">
                I am a <span className="orange-accent font-bold">Carnegie Mellon University</span> Student,<br />
                <span className="orange-accent font-bold">Software Engineer</span> at Menu Inc.,<br />
                <span className="orange-accent font-bold">Full-Stack Developer</span><br />
                ... <span className="orange-accent font-bold">and just a human</span>
              </p>
              
              <div className="mt-8 text-base text-white/90 space-y-3">
                <p>🎓 <span className="font-semibold">Information Systems</span> • GPA: 3.89/4.00</p>
                <p>💼 <span className="font-semibold">Software Engineer Intern</span> • Menu Inc.</p>
                <p>🚀 <span className="font-semibold">Full-Stack Engineer</span> • Toyz Electronics</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Sidebar - 25% */}
      <Sidebar />
    </div>
  )
}

export default Hero
