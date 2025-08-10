import { cn } from '@/lib/utils'

const ResponsiveContainer = ({ 
  children, 
  className = '',
  maxWidth = '7xl',
  padding = 'default'
}) => {
  const maxWidthClasses = {
    'sm': 'max-w-sm',
    'md': 'max-w-md',
    'lg': 'max-w-lg',
    'xl': 'max-w-xl',
    '2xl': 'max-w-2xl',
    '3xl': 'max-w-3xl',
    '4xl': 'max-w-4xl',
    '5xl': 'max-w-5xl',
    '6xl': 'max-w-6xl',
    '7xl': 'max-w-7xl',
    'full': 'max-w-full'
  }

  const paddingClasses = {
    'none': '',
    'sm': 'px-2 sm:px-4',
    'default': 'px-4 sm:px-6 lg:px-8',
    'lg': 'px-6 sm:px-8 lg:px-12',
    'xl': 'px-8 sm:px-12 lg:px-16'
  }

  return (
    <div className={cn(
      'mx-auto w-full',
      maxWidthClasses[maxWidth],
      paddingClasses[padding],
      className
    )}>
      {children}
    </div>
  )
}

// 响应式网格组件
const ResponsiveGrid = ({ 
  children, 
  cols = { base: 1, sm: 2, lg: 3 },
  gap = 'default',
  className = ''
}) => {
  const gapClasses = {
    'sm': 'gap-2 sm:gap-3',
    'default': 'gap-4 sm:gap-6 lg:gap-8',
    'lg': 'gap-6 sm:gap-8 lg:gap-12',
    'xl': 'gap-8 sm:gap-12 lg:gap-16'
  }

  const gridCols = `grid-cols-${cols.base} ${cols.sm ? `sm:grid-cols-${cols.sm}` : ''} ${cols.md ? `md:grid-cols-${cols.md}` : ''} ${cols.lg ? `lg:grid-cols-${cols.lg}` : ''} ${cols.xl ? `xl:grid-cols-${cols.xl}` : ''}`

  return (
    <div className={cn(
      'grid',
      gridCols,
      gapClasses[gap],
      className
    )}>
      {children}
    </div>
  )
}

// 响应式文本组件
const ResponsiveText = ({ 
  children, 
  size = 'base',
  weight = 'normal',
  className = '',
  as: Component = 'p'
}) => {
  const sizeClasses = {
    'xs': 'text-xs sm:text-sm',
    'sm': 'text-sm sm:text-base',
    'base': 'text-base sm:text-lg',
    'lg': 'text-lg sm:text-xl lg:text-2xl',
    'xl': 'text-xl sm:text-2xl lg:text-3xl',
    '2xl': 'text-2xl sm:text-3xl lg:text-4xl',
    '3xl': 'text-3xl sm:text-4xl lg:text-5xl',
    '4xl': 'text-4xl sm:text-5xl lg:text-6xl'
  }

  const weightClasses = {
    'light': 'font-light',
    'normal': 'font-normal',
    'medium': 'font-medium',
    'semibold': 'font-semibold',
    'bold': 'font-bold'
  }

  return (
    <Component className={cn(
      sizeClasses[size],
      weightClasses[weight],
      className
    )}>
      {children}
    </Component>
  )
}

// 响应式间距组件
const ResponsiveSpacing = ({ 
  children, 
  y = 'default',
  className = ''
}) => {
  const spacingClasses = {
    'sm': 'space-y-2 sm:space-y-3',
    'default': 'space-y-4 sm:space-y-6 lg:space-y-8',
    'lg': 'space-y-6 sm:space-y-8 lg:space-y-12',
    'xl': 'space-y-8 sm:space-y-12 lg:space-y-16',
    '2xl': 'space-y-12 sm:space-y-16 lg:space-y-20'
  }

  return (
    <div className={cn(
      spacingClasses[y],
      className
    )}>
      {children}
    </div>
  )
}

export { ResponsiveContainer, ResponsiveGrid, ResponsiveText, ResponsiveSpacing }
export default ResponsiveContainer