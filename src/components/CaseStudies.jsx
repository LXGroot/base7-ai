import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { LazyImage } from '@/components/ui/lazy-image'
import { ArrowRight, ExternalLink, Award, Users, TrendingUp } from 'lucide-react'

const CaseStudies = () => {
  const cases = [
    {
      id: 1,
      title: '全球顶级演唱会舞台系统集成',
      client: '国际知名艺人巡演',
      category: '舞台系统集成',
      description: '为全球顶级艺人提供完整的舞台技术解决方案，包括动态灯光矩阵、专业音响系统和超高清显示系统，创造震撼的视听体验。',
      image: './concert-stage.jpg',
      results: [
        { label: '观众满意度', value: '99.8%' },
        { label: '技术稳定性', value: '100%' },
        { label: '覆盖城市', value: '50+' }
      ],
      tags: ['灯光系统', '音响工程', '显示技术', '现场执行'],
      gradient: 'from-orange-500 to-red-500'
    },
    {
      id: 2,
      title: '沉浸式数字艺术展览',
      client: '某知名艺术博物馆',
      category: '舞台系统集成',
      description: '运用先进的投影技术、交互感应和音响系统，打造沉浸式的数字艺术体验空间，让观众身临其境地感受艺术的魅力。',
      image: './digital-art.jpg',
      results: [
        { label: '参观人数', value: '50万+' },
        { label: '互动体验', value: '95%' },
        { label: '媒体报道', value: '200+' }
      ],
      tags: ['投影技术', '交互设计', '沉浸体验', '数字艺术'],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      id: 3,
      title: '智慧城市物联网平台建设',
      client: '某一线城市政府',
      category: '物联网平台',
      description: '构建覆盖全城的物联网感知网络，实现交通、环境、安全等多维度数据的实时监控和智能分析，提升城市管理效率。',
      image: './smart-city.jpg',
      results: [
        { label: '设备接入', value: '100万+' },
        { label: '数据处理', value: '1TB/日' },
        { label: '响应时间', value: '<100ms' }
      ],
      tags: ['传感器网络', '数据分析', '智慧交通', '环境监测'],
      gradient: 'from-green-500 to-teal-500'
    },
    {
      id: 4,
      title: '智能制造工厂数字化转型',
      client: '大型制造企业',
      category: 'AI + 机器人',
      description: '通过AI驱动的机器人系统，实现生产线的全面自动化升级，提高生产效率，降低人工成本，确保产品质量的一致性。',
      image: './smart-factory.jpg',
      results: [
        { label: '效率提升', value: '85%' },
        { label: '成本降低', value: '60%' },
        { label: '质量改善', value: '95%' }
      ],
      tags: ['工业机器人', 'AI算法', '生产优化', '质量控制'],
      gradient: 'from-purple-500 to-pink-500'
    }
  ]

  return (
    <section id="cases" className="py-20 bg-white scroll-mt-16">
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
            案例展示
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto font-light tracking-wide leading-relaxed">
            从文旅、顶级演出到智能制造，我们的技术解决方案在各个领域都取得了卓越成果
          </p>
        </motion.div>

        {/* Cases Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16 px-4 sm:px-0">
          {cases.map((caseItem, index) => (
            <motion.div
              key={caseItem.id}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 h-full flex flex-col"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <LazyImage
                  src={caseItem.image}
                  alt={caseItem.title}
                  className="w-full h-full transition-transform duration-300 hover:scale-105"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${caseItem.gradient} opacity-20`}></div>
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 bg-gradient-to-r ${caseItem.gradient} text-white text-sm font-semibold rounded-full tracking-wide`}>
                    {caseItem.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6 flex-grow flex flex-col">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 tracking-tight">
                  {caseItem.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 mb-2 font-medium tracking-wide">{caseItem.client}</p>
                <p className="text-sm sm:text-base text-slate-700 mb-4 leading-relaxed font-light tracking-wide flex-grow">
                  {caseItem.description}
                </p>

                {/* Results */}
                <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-4">
                  {caseItem.results.map((result, resultIndex) => (
                    <div key={resultIndex} className="text-center">
                      <div className={`text-lg sm:text-2xl font-bold bg-gradient-to-r ${caseItem.gradient} bg-clip-text text-transparent`}>
                        {result.value}
                      </div>
                      <div className="text-xs sm:text-sm text-slate-600 font-medium tracking-wide">{result.label}</div>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 sm:gap-2 mb-4">
                  {caseItem.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded-md font-medium tracking-wide"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <Button 
                  variant="outline" 
                  className="w-full hover:bg-slate-50 font-semibold tracking-wide mt-auto text-sm sm:text-base"
                >
                  查看详情
                  <ExternalLink className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-6 sm:p-8 lg:p-12 text-white mx-4 sm:mx-0"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 tracking-tight">项目成果统计</h3>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 font-light tracking-wide">
              数字见证我们的专业实力和客户信任
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center">
              <Award className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-yellow-400 mx-auto mb-3 sm:mb-4" />
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2">500+</div>
              <div className="text-gray-300 font-medium tracking-wider text-xs sm:text-sm lg:text-base">成功项目</div>
            </div>
            <div className="text-center">
              <Users className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-blue-400 mx-auto mb-3 sm:mb-4" />
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2">200+</div>
              <div className="text-gray-300 font-medium tracking-wider text-xs sm:text-sm lg:text-base">合作客户</div>
            </div>
            <div className="text-center">
              <TrendingUp className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-green-400 mx-auto mb-3 sm:mb-4" />
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2">98%</div>
              <div className="text-gray-300 font-medium tracking-wider text-xs sm:text-sm lg:text-base">客户满意度</div>
            </div>
            <div className="text-center">
              <ExternalLink className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-purple-400 mx-auto mb-3 sm:mb-4" />
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2">50+</div>
              <div className="text-gray-300 font-medium tracking-wider text-xs sm:text-sm lg:text-base">技术专利</div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-12 sm:mt-16 px-4 sm:px-0"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4 tracking-tight">
            准备开始您的项目了吗？
          </h3>
          <p className="text-base sm:text-lg text-slate-600 mb-6 sm:mb-8 font-light tracking-wide">
            让我们一起探讨如何为您的业务创造价值
          </p>
          <Button 
            size="lg" 
            className="w-full sm:w-auto bg-gradient-to-r from-slate-800 to-slate-600 hover:from-slate-900 hover:to-slate-700 text-white px-6 sm:px-8 py-3 font-semibold tracking-wide text-sm sm:text-base"
          >
            联系我们
            <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default CaseStudies

