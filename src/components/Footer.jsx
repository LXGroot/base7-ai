import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Check, AlertCircle, MessageCircle, BookOpen } from 'lucide-react'
import { useState } from 'react'

const Footer = () => {
  const [email, setEmail] = useState('')
  const [subscriptionStatus, setSubscriptionStatus] = useState('idle') // idle, loading, success, error
  const [message, setMessage] = useState('')

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleSubscribe = async (e) => {
    e.preventDefault()
    
    if (!email.trim()) {
      setSubscriptionStatus('error')
      setMessage('请输入邮箱地址')
      return
    }
    
    if (!validateEmail(email)) {
      setSubscriptionStatus('error')
      setMessage('请输入有效的邮箱地址')
      return
    }
    
    setSubscriptionStatus('loading')
    
    try {
      // 模拟API调用
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // 这里应该调用实际的订阅API
      // const response = await fetch('/api/subscribe', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email })
      // })
      
      setSubscriptionStatus('success')
      setMessage('订阅成功！感谢您的关注')
      setEmail('')
      
      // 3秒后重置状态
      setTimeout(() => {
        setSubscriptionStatus('idle')
        setMessage('')
      }, 3000)
      
    } catch (error) {
      setSubscriptionStatus('error')
      setMessage('订阅失败，请稍后重试')
      
      // 3秒后重置状态
      setTimeout(() => {
        setSubscriptionStatus('idle')
        setMessage('')
      }, 3000)
    }
  }
  const footerSections = [
    {
      title: '解决方案',
      links: [
        { name: '制造业数字化转型', href: '#manufacturing' },
        { name: '智慧物流解决方案', href: '#logistics' },
        { name: '文化娱乐技术服务', href: '#entertainment' },
        { name: '舞台系统集成服务', href: '#stage-systems' }
      ]
    },
    {
      title: '产品与服务',
      links: [
        { name: 'AI大模型', href: '#ai' },
        { name: '机器人技术', href: '#robotics' },
        { name: '物联网平台', href: '#iot' },
        { name: '舞台联控技术', href: '#consulting' }
      ]
    },
    {
      title: '开发者',
      links: [
        { name: 'API文档', href: '#api-docs' },
        { name: 'SDK下载', href: '#sdk' },
        { name: '开发者社区', href: '#community' },
        { name: '技术支持', href: '#support' }
      ]
    },
    {
      title: '公司',
      links: [
        { name: '关于我们', href: '#about' },
        { name: '新闻动态', href: '#news' },
        { name: '加入我们', href: '#careers' },
        { name: '联系我们', href: '#contact' }
      ]
    }
  ]

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg sm:text-xl">7</span>
              </div>
              <span className="ml-3 sm:ml-4 text-xl sm:text-2xl font-bold text-white">柒进制科技</span>
            </div>
            <p className="text-gray-300 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
              致力于构建物理世界与数字智能的无缝桥梁，通过前沿的AI、机器人和物联网技术，
              为企业提供全方位的数字化转型解决方案。
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 mr-3 sm:mr-4 flex-shrink-0" />
                <span className="text-gray-300 text-sm sm:text-base">admin@base7-ai.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 mr-3 sm:mr-4 flex-shrink-0" />
                <span className="text-gray-300 text-sm sm:text-base">18008183772</span>
              </div>
              <div className="flex items-start">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 mr-3 sm:mr-4 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm sm:text-base leading-relaxed">成都市青羊区青龙街27号1栋2单元10层609号</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index} className="mt-8 sm:mt-0">
              <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-white">
                {section.title}
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                        href={link.href} 
                        className="text-sm sm:text-base text-gray-300 hover:text-blue-400 transition-colors duration-200"
                      >
                        {link.name}
                     </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <div className="border-t border-gray-700 pt-8 sm:pt-12 mt-12 sm:mt-16">
          <div className="text-center">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white">
              订阅我们的资讯
            </h3>
            <p className="text-sm sm:text-base text-gray-300 mb-6 sm:mb-8 max-w-md mx-auto px-4">
              获取最新的技术动态、产品更新和行业洞察
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row max-w-md mx-auto px-4 gap-3 sm:gap-0">
              <input
                 type="email"
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
                 placeholder="输入您的邮箱地址"
                 className="flex-1 px-4 py-3 bg-gray-800/80 border border-gray-600/50 rounded-lg sm:rounded-l-lg sm:rounded-r-none text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/70 focus:bg-gray-700/80 hover:border-gray-500 transition-all duration-300 backdrop-blur-sm text-sm sm:text-base"
                 required
               />
              <button
                type="submit"
                disabled={subscriptionStatus === 'loading'}
                className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg sm:rounded-l-none sm:rounded-r-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
              >
                {subscriptionStatus === 'loading' ? '订阅中...' : '订阅'}
              </button>
            </form>
            
            {/* Status Message */}
            {subscriptionStatus !== 'idle' && (
              <div className={`mt-4 p-3 rounded-lg text-center ${
                subscriptionStatus === 'success' 
                  ? 'bg-green-600 text-white' 
                  : subscriptionStatus === 'error'
                  ? 'bg-red-600 text-white'
                  : 'bg-blue-600 text-white'
              }`}>
                {subscriptionStatus === 'success' && '订阅成功！感谢您的关注。'}
                {subscriptionStatus === 'error' && '订阅失败，请稍后重试。'}
              </div>
            )}
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 pt-6 sm:pt-8 mt-12 sm:mt-16">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="mb-4 sm:mb-0">
              <p className="text-sm sm:text-base text-gray-400 text-center sm:text-left">
                © 2024 柒进制科技. 保留所有权利.
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center space-x-3 sm:space-x-4">
              <a href="#" className="w-8 h-8 sm:w-9 sm:h-9 bg-gray-700 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors duration-200">
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </a>
              <a href="#" className="w-8 h-8 sm:w-9 sm:h-9 bg-gray-700 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors duration-200">
                <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </a>
              <a href="#" className="w-8 h-8 sm:w-9 sm:h-9 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors duration-200">
                <Github className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </a>
            </div>
          </div>
          
          {/* Legal Links */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-800">
            <a href="#" className="text-sm sm:text-base text-gray-400 hover:text-blue-400 transition-colors duration-200">
              隐私政策
            </a>
            <a href="#" className="text-sm sm:text-base text-gray-400 hover:text-blue-400 transition-colors duration-200">
              服务条款
            </a>
            <a href="#" className="text-sm sm:text-base text-gray-400 hover:text-blue-400 transition-colors duration-200">
              法律声明
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

