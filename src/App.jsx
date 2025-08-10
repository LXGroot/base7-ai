import { useState, useEffect } from 'react'
import { LazyImage } from './components/ui/lazy-image'
import PerformanceMonitor from './components/PerformanceMonitor'
import Header from './components/Header'
import Hero from './components/Hero'
import CoreBusiness from './components/CoreBusiness'
import TechArchitecture from './components/TechArchitecture'
import CaseStudies from './components/CaseStudies'
import DeveloperCenter from './components/DeveloperCenter'
import AboutUs from './components/AboutUs'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 mb-4 mx-auto">
            <LazyImage 
              src="/500-500.png" 
              alt="柒进制科技 Logo" 
              className="w-full h-full animate-pulse" 
            />
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">柒进制科技</h1>
          <p className="text-gray-300">构建物理世界与数字智能的无缝桥梁</p>
          <div className="mt-8">
            <div className="w-32 h-1 bg-gray-700 rounded-full mx-auto overflow-hidden">
              <div className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <PerformanceMonitor />
      <Header />
      <main>
        <Hero />
        <CoreBusiness />
        <TechArchitecture />
        <CaseStudies />
        <DeveloperCenter />
        <AboutUs />
      </main>
      <Footer />
    </div>
  )
}

export default App
