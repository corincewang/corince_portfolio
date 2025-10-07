'use client'

import { useState, useEffect } from 'react'

const IllustrationList = () => {
  const digitalArt = [
    '/assets/art23.png',
    '/assets/art24.png',
    '/assets/art1.png',
    '/assets/art2.png',
    '/assets/art3.png',
    '/assets/art4.png',
    '/assets/art5.png',
    '/assets/art6.png',
    '/assets/art8.png',
    '/assets/art9.png',
    '/assets/art10.png',
    '/assets/art11.png',
    '/assets/art12.png',
    '/assets/art13.png',
    '/assets/art14.png',
    '/assets/art15.png',
    '/assets/art16.png',
    '/assets/art17.png',
    '/assets/art18.png',
    '/assets/art19.png',
    '/assets/art20.png',
    '/assets/art25.png',
    '/assets/art26.png',
    '/assets/art27.png',
    '/assets/art7.png',
  ]

  const meInTheWorld = [
    '/assets/art21.png',
    '/assets/art22.png',
    '/assets/art28.png',
    '/assets/art29.png'
  ]

  const allImages = [...digitalArt, ...meInTheWorld]

  const [imageDimensions, setImageDimensions] = useState<{[key: string]: {width: number, height: number}}>({})

  useEffect(() => {
    const loadImageDimensions = async () => {
      const dimensions: {[key: string]: {width: number, height: number}} = {}
      
      for (const image of allImages) {
        try {
          const img = new Image()
          await new Promise((resolve, reject) => {
            img.onload = () => {
              dimensions[image] = { width: img.naturalWidth, height: img.naturalHeight }
              resolve(true)
            }
            img.onerror = reject
            img.src = image
          })
        } catch (error) {
          console.error(`Failed to load image ${image}:`, error)
          dimensions[image] = { width: 1, height: 1 } // fallback
        }
      }
      
      setImageDimensions(dimensions)
    }

    loadImageDimensions()
  }, [allImages])

  const getImageClass = (image: string) => {
    const dims = imageDimensions[image]
    if (!dims) return 'col-span-1 row-span-1' // default while loading
    
    const aspectRatio = dims.width / dims.height
    
    // 优化布局：为正方形图片提供正方形容器
    if (aspectRatio > 1.8) {
      // 超宽图片
      return 'col-span-2 row-span-1' // 面积 = 2
    } else if (aspectRatio > 1.2) {
      // 宽图片
      return 'col-span-1 row-span-1' // 面积 = 1
    } else if (aspectRatio > 0.8) {
      // 接近正方形 - 不使用aspect-square，让grid自然处理
      return 'col-span-1 row-span-1' // 面积 = 1
    } else if (aspectRatio > 0.5) {
      // 略高的图片
      return 'col-span-1 row-span-2' // 面积 = 2
    } else {
      // 高图片
      return 'col-span-1 row-span-2' // 面积 = 2
    }
  }

  const getImageObjectFit = (image: string) => {
    const dims = imageDimensions[image]
    if (!dims) return 'object-cover' // default while loading
    
    const aspectRatio = dims.width / dims.height
    
    // 如果是接近正方形的图片，使用object-cover填满容器
    if (aspectRatio > 0.8 && aspectRatio < 1.2) {
      return 'object-cover'
    } else {
      return 'object-cover'
    }
  }


  return (
    <div className="space-y-12">
      {/* Digital Art Section */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Digital Artwork</h2>
        <div className="grid grid-cols-3 md:grid-cols-4 gap-2 grid-container auto-rows-[180px] grid-flow-row-dense">
          {digitalArt.map((image, index) => (
            <div
              key={`digital-${index}`}
              className={`bg-white rounded-lg overflow-hidden shadow-lg grid-item hover-lift ${getImageClass(image)}`}
            >
              <div className="w-full h-full relative overflow-hidden bg-gray-50">
                <img
                  src={image}
                  alt={`Digital Art ${index + 1}`}
                  className={`w-full h-full ${getImageObjectFit(image)}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Me in the World Section */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Me in the World</h2>
        <div className="grid grid-cols-3 md:grid-cols-4 gap-2 grid-container auto-rows-[180px] grid-flow-row-dense">
          {meInTheWorld.map((image, index) => (
            <div
              key={`me-${index}`}
              className={`bg-white rounded-lg overflow-hidden shadow-lg grid-item hover-lift ${getImageClass(image)}`}
            >
              <div className="w-full h-full relative overflow-hidden bg-gray-50">
                <img
                  src={image}
                  alt={`Me in the World ${index + 1}`}
                  className={`w-full h-full ${getImageObjectFit(image)}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default IllustrationList
