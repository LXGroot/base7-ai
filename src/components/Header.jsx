import { useState } from 'react'
import { Button } from '@/components/ui/button'
import MobileMenu from '@/components/ui/mobile-menu'
import { Menu, X, ChevronDown } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)

  const navItems = [
    { name: '首页', href: '#home' },
    { 
      name: '解决方案', 
      href: '#solutions',
      dropdown: [
        { name: '制造业数字化转型', href: '#manufacturing' },
        { name: '智慧物流解决方案', href: '#logistics' },
        { name: '文化娱乐技术服务', href: '#entertainment' }
      ]
    },
    { 
      name: '产品与服务', 
      href: '#products',
      dropdown: [
        { name: 'AI大模型', href: '#ai' },
        { name: '机器人技术', href: '#robotics' },
        { name: '物联网平台', href: '#iot' },
        { name: '舞台系统集成', href: '#stage-systems' }
      ]
    },
    { name: '技术架构', href: '#technology' },
    { name: '成功案例', href: '#cases' },
    { name: '开发者中心', href: '#developers' },
    { name: '洞察与新闻', href: '#insights' },
    { name: '关于我们', href: '#about' },

  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-[55] bg-white/95 backdrop-blur-md border-b border-gray-200/50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#home" className="flex items-center group cursor-pointer">
              <div className="relative">
                <img 
                  src="/logo bai-k1.png" 
                  alt="柒进制科技 Logo" 
                  className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 filter drop-shadow-md group-hover:drop-shadow-lg" 
                />
              </div>
              <div className="ml-2 sm:ml-3 lg:ml-4 flex flex-col">
                <div className="text-base sm:text-lg lg:text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent group-hover:from-blue-700 group-hover:to-purple-700 transition-all duration-300">
                  柒进制科技
                </div>
                <div className="text-xs font-semibold text-blue-500 tracking-wider uppercase group-hover:text-blue-600 transition-colors duration-200 hidden sm:block">
                  BASE7 TECHNOLOGY
                </div>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-4">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <a
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200 flex items-center"
                  onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {item.name}
                  {item.dropdown && <ChevronDown className="ml-1 h-4 w-4" />}
                </a>
                
                {/* Dropdown Menu */}
                {item.dropdown && activeDropdown === item.name && (
                  <div 
                    className="absolute top-full left-0 mt-1 w-56 bg-white rounded-md shadow-lg border border-gray-200 py-2 z-50"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {item.dropdown.map((dropdownItem) => (
                      <a
                        key={dropdownItem.name}
                        href={dropdownItem.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors duration-200"
                      >
                        {dropdownItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex">
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
              联系我们
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <MobileMenu 
          isOpen={isMenuOpen}
          onClose={() => setIsMenuOpen(false)}
          navItems={navItems}
        />
      </div>
    </header>
  )
}

export default Header

