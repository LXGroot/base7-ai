import { Button } from '@/components/ui/button'
import { ArrowRight, Play } from 'lucide-react'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gray-900 opacity-20"></div>
        
        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 left-20 w-2 h-2 bg-blue-400 rounded-full"
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 1, 0.3]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-40 right-32 w-3 h-3 bg-purple-400 rounded-full"
          animate={{
            y: [0, -30, 0],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div
          className="absolute bottom-32 left-32 w-4 h-4 bg-cyan-400 rounded-full"
          animate={{
            y: [0, -25, 0],
            opacity: [0.4, 1, 0.4]
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            构建物理世界与
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent block sm:inline">
              数字智能
            </span>
            的无缝桥梁
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
            柒进制科技致力于通过前沿的AI、机器人和物联网技术，为企业提供全方位的数字化转型解决方案，
            同时为文化娱乐产业打造震撼人心的沉浸式体验。
          </p>

          {/* Core Business Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12 max-w-5xl mx-auto px-4 sm:px-0">
            <motion.div
              className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-white/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-3 sm:mb-4 mx-auto">
                <span className="text-white font-bold text-sm sm:text-base">AI</span>
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-white mb-2 text-center">自研大模型</h3>
              <p className="text-gray-300 text-xs sm:text-sm text-center leading-relaxed">打造专属定制的智能语言理解与视觉感知系统，并将处理后的信号反馈到设备</p>
            </motion.div>

            <motion.div
              className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-white/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-3 sm:mb-4 mx-auto">
                <span className="text-white font-bold text-sm sm:text-base">R</span>
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-white mb-2 text-center">机器人技术</h3>
              <p className="text-gray-300 text-xs sm:text-sm text-center leading-relaxed">打造智能协作机器人及工业自动化系统，为企业提供高效灵活的智能制造解决方案</p>
            </motion.div>

            <motion.div
              className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-white/20 sm:col-span-2 lg:col-span-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center mb-3 sm:mb-4 mx-auto">
                <span className="text-white font-bold text-sm sm:text-base">IoT</span>
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-white mb-2 text-center">AI物联网</h3>
              <p className="text-gray-300 text-xs sm:text-sm text-center leading-relaxed">从传感器到云端数据分析的全栈式解决方案，实现设备与系统的无缝连接与智能管理</p>
            </motion.div>
          </div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button 
              size="lg" 
              className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 sm:px-8 py-3 text-base sm:text-lg"
            >
              探索解决方案
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="w-full sm:w-auto border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white focus:text-white px-6 sm:px-8 py-3 text-base sm:text-lg font-semibold tracking-wide"
            >
              <Play className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              观看演示
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mt-12 sm:mt-16 max-w-4xl mx-auto px-4 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-1 sm:mb-2">500+</div>
              <div className="text-gray-300 text-xs sm:text-sm">成功项目</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-1 sm:mb-2">98%</div>
              <div className="text-gray-300 text-xs sm:text-sm">客户满意度</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-1 sm:mb-2">50+</div>
              <div className="text-gray-300 text-xs sm:text-sm">技术专利</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-1 sm:mb-2">24/7</div>
              <div className="text-gray-300 text-xs sm:text-sm">技术支持</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero

