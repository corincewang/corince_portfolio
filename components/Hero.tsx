'use client'

import Sidebar from './Sidebar'

const Hero = () => {
  return (
    <div className="flex min-h-screen">
      {/* Main Content Area - Left 75% */}
      <div className="w-3/4 main-content flex items-center justify-center p-8">
        <div className="flex items-center justify-center w-full max-w-6xl">
          {/* Text Content - Centered */}
          <div className="w-full max-w-5xl relative text-center">
            {/* Orange Brackets */}
            <div className="absolute -top-6 -left-6 orange-bracket">┌</div>
            <div className="absolute -top-6 -right-6 orange-bracket">┐</div>
            <div className="absolute -bottom-6 -left-6 orange-bracket">└</div>
            <div className="absolute -bottom-6 -right-6 orange-bracket">┘</div>

            <div className="text-content">
              <p className="text-2xl text-gray-600 mb-8 sans-text-light">
                Hey there! My name is
              </p>

              <h2 className="text-8xl md:text-9xl fancy-font text-gray-800 mb-8" style={{lineHeight: '1.2'}}>
                Corince Wang
              </h2>

              <div className="hero-description">
                <p className="text-3xl text-gray-700 mb-12 leading-relaxed max-w-4xl mx-auto">
                  I am a <span className="orange-accent font-bold">Software Engineer</span>,<br />
                  <span className="orange-accent font-bold">Designer</span>,<br />
                  and <span className="orange-accent font-bold">Digital Illustrator</span>
                </p>

                {/* Programming Languages */}
                <div className="mt-16 mb-12">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6 serif-text">Programming Languages</h3>
                  <div className="flex flex-wrap justify-center gap-3">
                    <span className="px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">JavaScript</span>
                    <span className="px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">TypeScript</span>
                    <span className="px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">Python</span>
                    <span className="px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">Java</span>
                    <span className="px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">C++</span>
                    <span className="px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">SQL</span>
                    <span className="px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">React.js</span>
                  </div>
                </div>

                {/* About Me Section */}
                <div className="mt-16 max-w-4xl mx-auto">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6 serif-text">About Me</h3>
                  <div className="bg-gray-50 rounded-2xl p-8 border-l-4 border-orange-500">
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      As a <span className="font-semibold text-orange-600">senior student</span> at Carnegie Mellon University, 
                      I'm passionate about creating digital experiences that blend functionality with creativity. 
                      My journey as a <span className="font-semibold text-orange-600">full-stack engineer</span> has taught me 
                      the importance of clean code, user-centered design, and continuous learning.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      Beyond coding, I have a deep love for <span className="font-semibold text-orange-600">UI design</span> and 
                      <span className="font-semibold text-orange-600"> digital illustration</span>. I spend my free time creating 
                      fanart and exploring different artistic styles, which helps me bring a unique creative perspective to my 
                      development work.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      I believe that the best digital products come from the intersection of technology and art, 
                      and I'm always excited to work on projects that challenge me to think both logically and creatively.
                    </p>
                  </div>
                </div>

                <div className="mt-12 text-lg text-gray-600 space-y-4">
                 
                </div>
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
