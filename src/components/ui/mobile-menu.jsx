import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { X, ChevronDown, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const MobileMenu = ({ 
  isOpen, 
  onClose, 
  navItems = [],
  className = ''
}) => {
  const [expandedItems, setExpandedItems] = useState(new Set())

  // 防止背景滚动
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const toggleExpanded = (itemName) => {
    const newExpanded = new Set(expandedItems)
    if (newExpanded.has(itemName)) {
      newExpanded.delete(itemName)
    } else {
      newExpanded.add(itemName)
    }
    setExpandedItems(newExpanded)
  }

  const handleItemClick = (href) => {
    onClose()
    // 平滑滚动到目标元素
    if (href.startsWith('#')) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* 背景遮罩 */}
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[58]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          
          {/* 菜单内容 */}
          <motion.div
            className={cn(
              "fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-[60] overflow-y-auto",
              className
            )}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          >
            {/* 头部 */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">菜单</h2>
              <Button
                variant="ghost"
                size="sm"
                onClick={onClose}
                className="p-2"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            {/* 导航项 */}
            <div className="py-4">
              {navItems.map((item) => (
                <div key={item.name} className="border-b border-gray-100 last:border-b-0">
                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => handleItemClick(item.href)}
                      className="flex-1 text-left px-4 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-200"
                    >
                      {item.name}
                    </button>
                    
                    {item.dropdown && (
                      <button
                        onClick={() => toggleExpanded(item.name)}
                        className="p-3 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                      >
                        {expandedItems.has(item.name) ? (
                          <ChevronDown className="h-4 w-4" />
                        ) : (
                          <ChevronRight className="h-4 w-4" />
                        )}
                      </button>
                    )}
                  </div>
                  
                  {/* 下拉菜单 */}
                  <AnimatePresence>
                    {item.dropdown && expandedItems.has(item.name) && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden bg-gray-50"
                      >
                        {item.dropdown.map((dropdownItem) => (
                          <button
                            key={dropdownItem.name}
                            onClick={() => handleItemClick(dropdownItem.href)}
                            className="block w-full text-left px-8 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-white transition-colors duration-200"
                          >
                            {dropdownItem.name}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* 底部CTA */}
            <div className="p-4 border-t border-gray-200 mt-auto">
              <Button 
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                onClick={onClose}
              >
                联系我们
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default MobileMenu