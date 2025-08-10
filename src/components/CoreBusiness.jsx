import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { LazyImage } from '@/components/ui/lazy-image'
import { ArrowRight, Brain, Bot, Wifi, Zap } from 'lucide-react'

const CoreBusiness = () => {
  const businesses = [
    {
      id: 'ai',
      icon: Brain,
      title: '自研大模型 (AI)',
      subtitle: '智能决策引擎',
      description: '我们的自研大模型不仅是智能决策的引擎，也为企业提供深度定制化的自然语言处理和计算机视觉解决方案。通过先进的机器学习算法，帮助企业实现智能化转型。',
      features: [
        '自然语言处理',
        '计算机视觉',
        '智能决策支持',
        '自学习系统'
      ],
      image: 
        './ai-model.webp',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'robotics',
      icon: Bot,
      title: '机器人技术 (Robotics)',
      subtitle: '智能自动化解决方案',
      description: '与AI深度融合的机器人技术，专注于研发和部署能够适应复杂环境的工业自动化及智能服务机器人。提供从设计到部署的全方位机器人解决方案。',
      features: [
        '工业自动化机器人',
        '智能服务机器人',
        '复杂环境适应',
        '人机协作系统'
      ],
      image: 
        './robotics-lab.jpg',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      id: 'iot',
      icon: Wifi,
      title: '物联网平台 (IoT)',
      subtitle: '万物互联基石',
      description: '作为万物互联基石的物联网平台，提供从传感器、网关到云端数据分析的全栈式解决方案，实现海量设备的稳定接入与高效管理。',
      features: [
        '传感器网络',
        '智能网关',
        '云端数据分析',
        '设备管理平台'
      ],
      image: 
        './4sy7M89IUVpX.png',
      gradient: 'from-green-500 to-teal-500'
    },
    {
      id: 'stage',
      icon: Zap,
      title: '舞台系统集成',
      subtitle: '震撼视听体验',
      description: '专业级的舞台系统集成服务，为全球顶级演唱会、大型企业发布会和沉浸式展览提供包括动态灯光矩阵、专业巡演级音响系统和超高清大屏幕显示系统的整体解决方案。',
      features: [
        '动态灯光矩阵',
        '专业音响系统',
        '超高清显示',
        '沉浸式体验'
      ],
      image: 
        './stage-integration.jpg',
      gradient: 'from-orange-500 to-red-500'
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16 px-4 sm:px-0"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 tracking-tight">
            核心业务矩阵
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto font-light tracking-wide leading-relaxed">
            三大技术支柱与创新业务，构建完整的数字化生态系统
          </p>
        </motion.div>

        {/* Business Cards */}
        <div className="space-y-12 sm:space-y-16 lg:space-y-20 px-4 sm:px-0">
          {businesses.map((business, index) => (
            <motion.div
              key={business.id}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 sm:gap-10 lg:gap-12`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Content */}
              <div className="flex-1 space-y-4 sm:space-y-6 text-center lg:text-left">
                <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4">
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-r ${business.gradient} rounded-xl flex items-center justify-center`}>
                    <business.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 tracking-tight">{business.title}</h3>
                    <p className="text-sm sm:text-base lg:text-lg text-slate-600 font-medium tracking-wide">{business.subtitle}</p>
                  </div>
                </div>

                <p className="text-sm sm:text-base lg:text-lg text-slate-700 leading-relaxed font-light tracking-wide">
                  {business.description}
                </p>

                {/* Features */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                  {business.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center justify-center lg:justify-start space-x-2">
                      <div className={`w-2 h-2 bg-gradient-to-r ${business.gradient} rounded-full flex-shrink-0`}></div>
                      <span className="text-xs sm:text-sm lg:text-base text-slate-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  className={`w-full sm:w-auto bg-gradient-to-r ${business.gradient} hover:opacity-90 text-white font-semibold tracking-wide text-sm sm:text-base`}
                >
                  了解更多
                  <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                </Button>
              </div>

              {/* Image */}
              <div className="flex-1">
                <div className="relative">
                  <div className={`absolute inset-0 bg-gradient-to-r ${business.gradient} rounded-2xl transform rotate-3 opacity-20`}></div>
                  <LazyImage
                    src={business.image}
                    alt={business.title}
                    className="relative w-full h-80 rounded-2xl shadow-2xl"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Integration Message */}
        <motion.div
          className="mt-20 text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold mb-4 tracking-tight">技术融合，创新无限</h3>
          <p className="text-xl mb-8 max-w-3xl mx-auto font-light tracking-wide leading-relaxed">
            我们的四大业务板块不是孤立存在的，而是相互融合、协同发展。AI为机器人提供智能大脑，
            物联网连接万物，舞台系统展现技术的艺术之美。
          </p>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-white bg-transparent text-white hover:bg-white hover:text-blue-600 focus:text-white font-semibold tracking-wide"
          >
            探索技术架构
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default CoreBusiness

