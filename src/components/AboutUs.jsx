import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Target, Eye, Heart, Award, Users, TrendingUp } from 'lucide-react'

const AboutUs = () => {
  const milestones = [
    {
      year: '2019',
      title: '柒进制技术工作室创立',
      description: '柒进制技术工作室正式成立，专注于前沿AI与机器人技术研发，同时承接专业舞台灯光音响系统集成业务'
    },
    {
      year: '2020',
      title: 'AI模型产品技术突破',
      description: '自主研发的行业专业大模型1.0版本进入内部测试阶段，实现多项核心技术突破，成功应用于客户项目实践'
    },
    {
      year: '2021',
      title: '智能机器人研发启动',
      description: '机器人技术研究正式提上发展日程，成功部署首个工业机器人项目，进入智能制造领域测试验证阶段'
    },
    {
      year: '2022',
      title: '物联网平台架构完成',
      description: '自主搭建并推出全栈式物联网解决方案平台，技术服务成功覆盖制造、娱乐、农业等多个重点行业'
    },
    {
      year: '2023',
      title: '大模型技术跃升与舞台系统集成',
      description: '大模型技术实现重大突破，舞台系统集成业务正式提上发展日程，成功为多场大型文化演出提供专业技术支持'
    },
    {
      year: '2024',
      title: '技术全面突破与国际市场拓展',
      description: '工作室在多项核心技术领域实现全面突破，首次成功服务国际市场，业务拓展至海外，成为行业领跑的综合性科技企业'
    },
    {
      year: '2025',
      title: '四川柒进制科技有限责任公司成立',
      description: '在四川成都正式成立四川柒进制科技有限责任公司，标志着企业发展进入新的里程碑阶段，为全国数字化转型提供更专业的技术服务'
    }
  ]

  const values = [
    {
      icon: Target,
      title: '创新驱动',
      description: '持续投入研发，追求技术突破，引领行业发展方向',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Eye,
      title: '客户至上',
      description: '深度理解客户需求，提供定制化解决方案，创造最大价值',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Heart,
      title: '品质卓越',
      description: '严格的质量标准，精益求精的工作态度，确保产品可靠性',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: Users,
      title: '团队协作',
      description: '多元化团队，开放包容的文化，激发每个人的创造潜能',
      color: 'from-orange-500 to-red-500'
    }
  ]

  const futureGoals = [
    {
      title: '成为行业技术领导者',
      description: '在AI、机器人和物联网领域建立技术优势，引领行业发展方向',
      icon: '🚀',
      year: '2026'
    },
    {
      title: '获得国家高新技术企业认定',
      description: '通过持续的技术创新和研发投入，获得国家级技术认可',
      icon: '🏆',
      year: '2026'
    },
    {
      title: '建立完善的质量管理体系',
      description: '建立符合国际标准的质量管理体系，确保产品和服务质量',
      icon: '📋',
      year: '2027'
    },
    {
      title: '积累核心技术专利',
      description: '在核心技术领域申请并获得多项发明专利，保护知识产权',
      icon: '💡',
      year: '2027'
    },
    {
      title: '建立信息安全防护体系',
      description: '构建完善的信息安全体系，保障客户数据和系统安全',
      icon: '🔒',
      year: '2028'
    },
    {
      title: '加入行业联盟组织',
      description: '积极参与行业组织，推动产业发展，建立合作生态',
      icon: '🤝',
      year: '2028'
    }
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 scroll-mt-16">
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
            关于我们
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light tracking-wide leading-relaxed">
            柒进制科技成立于2019年，是一家以前沿技术驱动的综合性科技公司，
            致力于构建物理世界与数字智能的无缝桥梁
          </p>
        </motion.div>

        {/* Mission, Vision, Values */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          <motion.div
            className="group relative text-center p-8 bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl border border-blue-100/50 hover:border-blue-200 transition-all duration-500 hover:scale-[1.02] overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 to-cyan-50/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight group-hover:text-blue-700 transition-colors duration-300">使命</h3>
              <p className="text-slate-700 leading-relaxed font-light tracking-wide group-hover:text-slate-800 transition-colors duration-300">
                通过前沿技术创新，推动传统产业数字化转型，
                为人类创造更智能、更美好的生活体验
              </p>
            </div>
          </motion.div>

          <motion.div
            className="group relative text-center p-8 bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl border border-purple-100/50 hover:border-purple-200 transition-all duration-500 hover:scale-[1.02] overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50/80 to-pink-50/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight group-hover:text-purple-700 transition-colors duration-300">愿景</h3>
              <p className="text-slate-700 leading-relaxed font-light tracking-wide group-hover:text-slate-800 transition-colors duration-300">
                成为全球领先的智能技术解决方案提供商，
                引领物理世界与数字智能融合的新时代
              </p>
            </div>
          </motion.div>

          <motion.div
            className="group relative text-center p-8 bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl border border-green-100/50 hover:border-green-200 transition-all duration-500 hover:scale-[1.02] overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-50/80 to-teal-50/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight group-hover:text-green-700 transition-colors duration-300">价值观</h3>
              <p className="text-slate-700 leading-relaxed font-light tracking-wide group-hover:text-slate-800 transition-colors duration-300">
                创新、诚信、卓越、合作 - 
                这是我们团队共同坚持的核心价值观
              </p>
            </div>
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-slate-900 mb-12 text-center tracking-tight">
            核心价值观
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-xl hover:shadow-2xl hover:scale-[1.05] transition-all duration-500 border border-white/30 h-full flex flex-col"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-3 tracking-wide">
                  {value.title}
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed font-light tracking-wide flex-grow">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Development Timeline */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-slate-900 mb-12 text-center tracking-tight">
            发展历程
          </h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="bg-white p-6 rounded-xl shadow-lg">
                      <div className="text-2xl font-bold text-blue-600 mb-2">
                        {milestone.year}
                      </div>
                      <h4 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">
                        {milestone.title}
                      </h4>
                      <p className="text-slate-600 font-light tracking-wide">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Timeline Node */}
                  <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white shadow-lg z-10"></div>
                  
                  <div className="flex-1"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Achievements & Certifications Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-slate-900 mb-12 text-center tracking-tight">
            发展目标与愿景
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {futureGoals.map((goal, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border-l-4 border-green-500"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start space-x-4">
                  <div className="text-4xl mb-4">
                    {goal.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-lg font-bold text-slate-900 tracking-tight">
                        {goal.title}
                      </h4>
                      <span className="text-sm font-medium text-green-600 bg-green-50 px-2 py-1 rounded">
                        {goal.year}
                      </span>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed font-light tracking-wide">
                      {goal.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Company Stats */}
        <motion.div
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 tracking-tight">公司实力</h3>
            <p className="text-xl text-blue-100 font-light tracking-wide">
              用数字展现我们的成长与实力
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <Award className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-blue-100 font-medium tracking-wider">技术专利</div>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">200+</div>
              <div className="text-blue-100 font-medium tracking-wider">团队成员</div>
            </div>
            <div className="text-center">
              <TrendingUp className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-100 font-medium tracking-wider">成功项目</div>
            </div>
            <div className="text-center">
              <Target className="w-12 h-12 text-orange-400 mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-blue-100 font-medium tracking-wider">客户满意度</div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">
            加入我们，共创未来
          </h3>
          <p className="text-lg text-slate-600 mb-8 font-light tracking-wide">
            我们正在寻找志同道合的伙伴，一起推动技术创新
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-slate-800 to-slate-600 hover:from-slate-900 hover:to-slate-700 text-white px-8 py-3 font-semibold tracking-wide"
          >
            查看职位
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutUs

