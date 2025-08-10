import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Code, Download, Book, MessageCircle, Github, Terminal, Zap } from 'lucide-react'

const DeveloperCenter = () => {
  const apiCategories = [
    {
      name: 'AI大模型API',
      description: '自然语言处理、计算机视觉、语音识别反馈等',
      icon: Code,
      endpoints: 12,
      color: 'from-blue-500 to-cyan-500',
      features: ['文本生成', '图像识别', '语音合成', '情感分析']
    },
    {
      name: '机器人控制API',
      description: '机器人运动控制、路径规划、传感器数据接口',
      icon: Terminal,
      endpoints: 8,
      color: 'from-purple-500 to-pink-500',
      features: ['运动控制', '路径规划', '传感器接入', '状态监控']
    },
    {
      name: '物联网平台API',
      description: '设备管理、数据采集、实时监控、告警通知',
      icon: Zap,
      endpoints: 15,
      color: 'from-green-500 to-teal-500',
      features: ['设备管理', '数据采集', '实时监控', '告警推送']
    }
  ]

  const sdkList = [
    {
      name: 'Python SDK',
      version: 'v2.1.0',
      downloads: '50K+',
      description: '完整的Python开发工具包，支持所有API功能',
      language: 'Python',
      size: '2.3MB'
    },
    {
      name: 'JavaScript SDK',
      version: 'v1.8.2',
      downloads: '35K+',
      description: '轻量级JavaScript SDK，适用于Web和Node.js',
      language: 'JavaScript',
      size: '1.1MB'
    },
    {
      name: 'Java SDK',
      version: 'v1.5.1',
      downloads: '28K+',
      description: '企业级Java SDK，支持Spring Boot集成',
      language: 'Java',
      size: '3.2MB'
    },
    {
      name: 'C++ SDK',
      version: 'v1.2.0',
      downloads: '15K+',
      description: '高性能C++ SDK，适用于嵌入式和实时系统',
      language: 'C++',
      size: '4.1MB'
    }
  ]

  const codeExamples = [
    {
      title: 'AI文本生成',
      language: 'Python',
      code: `import base7_ai as ai
from base7_ai.models import TextGenerator

# 初始化客户端
client = ai.Client(
    api_key="your_api_key",
    base_url="https://api.base7-ai.com"
)

# 创建文本生成器
generator = TextGenerator(client)

# 生成文本
response = generator.generate(
    prompt="写一篇关于人工智能的文章",
    max_tokens=500,
    temperature=0.7,
    model="base7-gpt-4"
)

print(f"生成的文本: {response.text}")
print(f"使用的tokens: {response.usage.total_tokens}")`
    },
    {
      title: '机器人控制',
      language: 'Python',
      code: `import base7_robot as robot
from base7_robot.controllers import ArmController
from base7_robot.sensors import TemperatureSensor

# 初始化机器人连接
robot_client = robot.Client(
    host="192.168.1.100",
    port=8080,
    api_key="your_api_key"
)

# 创建机械臂控制器
arm = ArmController(robot_client)

# 移动到指定位置
result = arm.move_to(
    position={"x": 100, "y": 200, "z": 50},
    speed=0.5,
    wait_for_completion=True
)

# 获取传感器数据
temp_sensor = TemperatureSensor(robot_client)
temperature = temp_sensor.read()
print(f"当前温度: {temperature}°C")

# 检查运动状态
if result.success:
    print("机器人已到达目标位置")
else:
    print(f"运动失败: {result.error}")`
    },
    {
      title: '物联网数据采集',
      language: 'JavaScript',
      code: `const { Base7IoT, DeviceManager } = require('@base7/iot-sdk');

// 初始化IoT客户端
const iot = new Base7IoT({
  apiKey: 'your_api_key',
  endpoint: 'https://api.base7-ai.com',
  version: 'v1'
});

// 创建设备管理器
const deviceManager = new DeviceManager(iot);

// 获取设备数据
async function getDeviceData() {
  try {
    const device = await deviceManager.getDevice('device_id_123');
    const data = await device.getData({
      timeRange: '1h',
      metrics: ['temperature', 'humidity', 'pressure']
    });
    
    console.log('设备信息:', {
      id: device.id,
      name: device.name,
      status: device.status,
      lastUpdate: device.lastUpdate
    });
    
    console.log('传感器数据:', data);
    
    // 实时数据订阅
    device.subscribe('realtime', (realtimeData) => {
      console.log('实时数据更新:', realtimeData);
    });
    
  } catch (error) {
    console.error('获取设备数据失败:', error.message);
  }
}

getDeviceData();`
    }
  ]

  const resources = [
    {
      title: 'API文档',
      description: '完整的API参考文档，包含所有接口说明和示例',
      icon: Book,
      link: '#api-docs',
      color: 'text-blue-600'
    },
    {
      title: '快速开始',
      description: '5分钟快速上手指南，从注册到第一个API调用',
      icon: Zap,
      link: '#quick-start',
      color: 'text-green-600'
    },
    {
      title: '开发者社区',
      description: '与其他开发者交流，获取技术支持和最佳实践',
      icon: MessageCircle,
      link: '#community',
      color: 'text-purple-600'
    },
    {
      title: 'GitHub仓库',
      description: '开源示例代码、工具和社区贡献的项目',
      icon: Github,
      link: '#github',
      color: 'text-gray-800'
    }
  ]

  return (
    <section id="developers" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            开发者中心
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light tracking-wide leading-relaxed">
            企业客户专用的API和SDK，让您轻松集成我们的AI、机器人和物联网技术
          </p>
        </motion.div>

        {/* API Categories */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-slate-900 mb-12 text-center tracking-tight">
            API服务
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {apiCategories.map((category, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mb-4`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-2 tracking-tight">
                  {category.name}
                </h4>
                <p className="text-slate-600 mb-4 font-light tracking-wide">
                  {category.description}
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-slate-500 font-medium tracking-wide">
                    {category.endpoints} 个接口
                  </span>
                  <span className={`px-2 py-1 bg-gradient-to-r ${category.color} text-white text-xs rounded-full font-semibold tracking-wide`}>
                    稳定版
                  </span>
                </div>
                <div className="space-y-2 mb-4">
                  {category.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <div className={`w-2 h-2 bg-gradient-to-r ${category.color} rounded-full mr-2`}></div>
                      <span className="text-sm text-slate-700 font-medium tracking-wide">{feature}</span>
                    </div>
                  ))}
                 </div>
                <Button className="w-full bg-slate-800 text-white hover:bg-slate-900 font-semibold tracking-wide mt-auto">
                  查看文档
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* SDK Downloads */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-slate-900 mb-12 text-center tracking-tight">
            SDK下载
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sdkList.map((sdk, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-bold text-slate-900 tracking-tight">
                    {sdk.name}
                  </h4>
                  <span className="text-sm text-slate-500 font-medium tracking-wide">{sdk.version}</span>
                </div>
                <p className="text-slate-600 text-sm mb-4 font-light tracking-wide flex-grow">
                  {sdk.description}
                </p>
                <div className="flex justify-between text-sm text-slate-500 mb-4 font-medium tracking-wide">
                  <span>下载量: {sdk.downloads}</span>
                  <span>大小: {sdk.size}</span>
                </div>
                <Button className="w-full bg-slate-800 text-white hover:bg-slate-900 font-semibold tracking-wide mt-auto" size="sm">
                  <Download className="mr-2 h-4 w-4" />
                  下载
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Code Examples */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-slate-900 mb-12 text-center tracking-tight">
            代码示例
          </h3>
          <div className="space-y-8">
            {codeExamples.map((example, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-gray-800 px-6 py-4 flex items-center justify-between">
                  <h4 className="text-white font-bold tracking-tight">{example.title}</h4>
                  <span className="text-gray-300 text-sm font-medium tracking-wide">{example.language}</span>
                </div>
                <div className="p-6">
                  <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
                    <code className="text-sm text-gray-800 whitespace-pre">
                      {example.code}
                    </code>
                  </pre>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Resources */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-slate-900 mb-12 text-center tracking-tight">
            开发者资源
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <resource.icon className={`w-8 h-8 ${resource.color} mb-4`} />
                <h4 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">
                  {resource.title}
                </h4>
                <p className="text-slate-600 text-sm font-light tracking-wide">
                  {resource.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold mb-4 tracking-tight">开始您的开发之旅</h3>
          <p className="text-xl text-blue-100 mb-8 font-light tracking-wide">
            注册开发者账号，获取API密钥，立即开始集成我们的服务
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="outline"
              className="bg-white text-blue-600 hover:bg-gray-100 hover:text-blue-700 font-semibold tracking-wide"
            >
              注册开发者账号
            </Button>
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100 hover:text-blue-700 font-semibold tracking-wide"
            >
              查看API文档
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default DeveloperCenter

