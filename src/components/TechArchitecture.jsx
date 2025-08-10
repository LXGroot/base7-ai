import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Cpu, Database, Cloud, Shield, Zap, Network } from 'lucide-react'

const TechArchitecture = () => {
  const techStack = [
    {
      category: 'AI & 机器学习',
      icon: Cpu,
      technologies: [
        { name: 'TensorFlow', level: 95 },
        { name: 'PyTorch', level: 90 },
        { name: 'OpenCV', level: 88 },
        { name: 'CUDA', level: 85 }
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      category: '机器人控制',
      icon: Zap,
      technologies: [
        { name: 'ROS 2', level: 92 },
        { name: 'Gazebo', level: 88 },
        { name: 'MoveIt', level: 85 },
        { name: 'Real-time Control', level: 90 }
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      category: '物联网平台',
      icon: Network,
      technologies: [
        { name: 'MQTT', level: 95 },
        { name: 'LoRaWAN', level: 88 },
        { name: 'Edge Computing', level: 90 },
        { name: 'Time Series DB', level: 85 }
      ],
      color: 'from-green-500 to-teal-500'
    },
    {
      category: '云计算架构',
      icon: Cloud,
      technologies: [
        { name: 'Kubernetes', level: 90 },
        { name: 'Docker', level: 95 },
        { name: 'Microservices', level: 88 },
        { name: 'Serverless', level: 82 }
      ],
      color: 'from-indigo-500 to-blue-500'
    },
    {
      category: '数据处理',
      icon: Database,
      technologies: [
        { name: 'Apache Kafka', level: 88 },
        { name: 'Elasticsearch', level: 85 },
        { name: 'Redis', level: 90 },
        { name: 'MongoDB', level: 87 }
      ],
      color: 'from-orange-500 to-red-500'
    },
    {
      category: '安全防护',
      icon: Shield,
      technologies: [
        { name: 'Zero Trust', level: 90 },
        { name: 'Encryption', level: 95 },
        { name: 'Identity Management', level: 88 },
        { name: 'Threat Detection', level: 85 }
      ],
      color: 'from-red-500 to-pink-500'
    }
  ]

  const architectureLayers = [
    {
      name: '应用层',
      description: '用户界面、移动应用、Web应用',
      technologies: ['React', 'Flutter', 'Progressive Web Apps'],
      color: 'bg-blue-100 text-blue-800',
      gradient: 'from-blue-100 to-blue-800'
    },
    {
      name: '业务逻辑层',
      description: 'AI算法、机器人控制、数据分析',
      technologies: ['Python', 'C++', 'Go', 'Rust'],
      color: 'bg-purple-100 text-purple-800',
      gradient: 'from-purple-100 to-purple-800'
    },
    {
      name: '服务层',
      description: '微服务架构、API网关、消息队列',
      technologies: ['Kubernetes', 'Docker', 'gRPC', 'GraphQL'],
      color: 'bg-green-100 text-green-800',
      gradient: 'from-green-100 to-green-800'
    },
    {
      name: '数据层',
      description: '数据库、缓存、数据湖、实时流处理',
      technologies: ['PostgreSQL', 'Redis', 'Apache Kafka', 'ClickHouse'],
      color: 'bg-orange-100 text-orange-800',
      gradient: 'from-orange-100 to-orange-800'
    },
    {
      name: '基础设施层',
      description: '云平台、网络、存储、安全',
      technologies: ['AWS', 'Azure', 'Private Cloud', 'Edge Computing'],
      color: 'bg-gray-100 text-gray-800',
      gradient: 'from-gray-100 to-gray-800'
    }
  ]

  return (
    <section id="technology" className="py-20 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            技术架构
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light tracking-wide leading-relaxed">
            基于现代化技术栈构建的可扩展、高可用、安全可靠的技术架构体系
          </p>
        </motion.div>

        {/* Architecture Layers */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-white mb-12 text-center tracking-tight">
            分层架构设计
          </h3>
          
          {/* 3D Stack Visualization */}
          <div className="relative max-w-4xl mx-auto">
            <div className="flex flex-col space-y-6">
              {architectureLayers.map((layer, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, y: 50, rotateX: -15 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  style={{ 
                    transformStyle: 'preserve-3d',
                    transform: `perspective(1000px) rotateX(${index * 2}deg) translateZ(${index * 10}px)`
                  }}
                >
                  {/* Layer Card */}
                  <div className={`
                    relative bg-gradient-to-r from-white to-gray-50 
                    rounded-2xl p-8 shadow-2xl border border-gray-200
                    hover:shadow-3xl transition-all duration-500
                    hover:scale-105 hover:-translate-y-2
                    ${index === 0 ? 'z-50' : index === 1 ? 'z-40' : index === 2 ? 'z-30' : index === 3 ? 'z-20' : 'z-10'}
                  `}>
                    {/* Layer Number */}
                    <div className="absolute -left-4 -top-4 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      {architectureLayers.length - index}
                    </div>
                    
                    {/* Content */}
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center mb-4">
                          <span className={`px-4 py-2 rounded-full text-base font-bold ${layer.color} mr-6 shadow-md`}>
                            {layer.name}
                          </span>
                          <h4 className="text-xl font-bold text-slate-900 tracking-tight">
                            {layer.description}
                          </h4>
                        </div>
                        
                        {/* Technologies Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                          {layer.technologies.map((tech, techIndex) => (
                            <motion.div
                              key={techIndex}
                              className="group relative"
                              whileHover={{ scale: 1.05 }}
                              transition={{ type: "spring", stiffness: 300 }}
                            >
                              <div className="px-4 py-3 bg-gradient-to-r from-slate-100 to-slate-200 text-slate-800 text-sm font-semibold rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-slate-300 hover:border-blue-300 tracking-wide">
                                <div className="flex items-center justify-center">
                                  <span className="text-center">{tech}</span>
                                </div>
                              </div>
                              {/* Hover Effect */}
                              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Side Decoration */}
                      <div className="hidden lg:block ml-8">
                        <div className={`w-2 h-32 bg-gradient-to-b ${layer.gradient} rounded-full opacity-30`}></div>
                      </div>
                    </div>
                    
                    {/* Connection Lines */}
                    {index < architectureLayers.length - 1 && (
                      <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
                        <div className="w-1 h-6 bg-gradient-to-b from-blue-400 to-purple-500 rounded-full opacity-60"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                          <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* 3D Shadow Effect */}
                  <div className={`
                    absolute inset-0 bg-gradient-to-r from-gray-300/20 to-gray-400/20 
                    rounded-2xl transform translate-x-2 translate-y-2 -z-10
                    ${index === 0 ? 'z-40' : index === 1 ? 'z-30' : index === 2 ? 'z-20' : index === 3 ? 'z-10' : 'z-0'}
                  `}></div>
                </motion.div>
              ))}
            </div>
            
            {/* Background Decoration */}
            <div className="absolute inset-0 -z-20">
              <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200/30 rounded-full blur-3xl"></div>
              <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl"></div>
            </div>
          </div>
        </motion.div>

        {/* Technology Stack */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-white mb-8 text-center tracking-tight">
            核心技术栈
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techStack.map((stack, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${stack.color} rounded-lg flex items-center justify-center mr-4`}>
                    <stack.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 tracking-wide">
                    {stack.category}
                  </h4>
                </div>
                <div className="space-y-3">
                  {stack.technologies.map((tech, techIndex) => (
                    <div key={techIndex}>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-semibold text-slate-700 tracking-wide">
                          {tech.name}
                        </span>
                        <span className="text-sm text-slate-500 font-medium">
                          {tech.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <motion.div
                          className={`h-2 bg-gradient-to-r ${stack.color} rounded-full`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${tech.level}%` }}
                          transition={{ duration: 1, delay: techIndex * 0.1 }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Core Advantages */}
        <motion.div
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 tracking-tight">技术优势</h3>
            <p className="text-xl text-blue-100 font-light tracking-wide">
              我们的技术架构具备以下核心优势
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-bold mb-2 tracking-wide">高性能</h4>
              <p className="text-blue-100 text-sm font-light tracking-wide">
                毫秒级响应时间，支持高并发处理
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-bold mb-2 tracking-wide">高安全</h4>
              <p className="text-blue-100 text-sm font-light tracking-wide">
                多层安全防护，零信任架构
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cloud className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-bold mb-2 tracking-wide">可扩展</h4>
              <p className="text-blue-100 text-sm font-light tracking-wide">
                弹性伸缩，支持海量数据处理
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Network className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-bold mb-2 tracking-wide">高可用</h4>
              <p className="text-blue-100 text-sm font-light tracking-wide">
                99.99%可用性，故障自动恢复
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white text-blue-600 hover:bg-gray-100 hover:text-blue-700 font-semibold tracking-wide"
            >
              技术文档
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TechArchitecture

