import { useEffect } from 'react';

const PerformanceMonitor = () => {
  useEffect(() => {
    // 监控页面加载性能
    const measurePerformance = () => {
      if ('performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0];
        const paint = performance.getEntriesByType('paint');
        
        // 计算关键性能指标
        const metrics = {
          // 页面加载时间
          loadTime: navigation.loadEventEnd - navigation.loadEventStart,
          // DOM内容加载时间
          domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
          // 首次内容绘制
          firstContentfulPaint: paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0,
          // 首次绘制
          firstPaint: paint.find(entry => entry.name === 'first-paint')?.startTime || 0,
          // 总页面大小
          transferSize: navigation.transferSize,
          // DNS查询时间
          dnsTime: navigation.domainLookupEnd - navigation.domainLookupStart,
          // TCP连接时间
          tcpTime: navigation.connectEnd - navigation.connectStart
        };

        // 在开发环境下输出性能指标
        if (import.meta.env.DEV) {
          console.group('🚀 页面性能指标');
          console.log('📊 页面加载时间:', `${metrics.loadTime.toFixed(2)}ms`);
          console.log('🎨 首次内容绘制:', `${metrics.firstContentfulPaint.toFixed(2)}ms`);
          console.log('🎯 DOM内容加载:', `${metrics.domContentLoaded.toFixed(2)}ms`);
          console.log('📦 传输大小:', `${(metrics.transferSize / 1024).toFixed(2)}KB`);
          console.log('🌐 DNS查询时间:', `${metrics.dnsTime.toFixed(2)}ms`);
          console.log('🔗 TCP连接时间:', `${metrics.tcpTime.toFixed(2)}ms`);
          console.groupEnd();

          // 性能评分
          let score = 100;
          if (metrics.firstContentfulPaint > 2000) score -= 20;
          if (metrics.loadTime > 3000) score -= 20;
          if (metrics.transferSize > 1024 * 1024) score -= 15; // 1MB
          if (metrics.domContentLoaded > 1500) score -= 15;
          
          const getScoreColor = (score) => {
            if (score >= 90) return '🟢';
            if (score >= 70) return '🟡';
            return '🔴';
          };

          console.log(`${getScoreColor(score)} 性能评分: ${Math.max(0, score)}/100`);
        }

        // 监控资源加载
        const resources = performance.getEntriesByType('resource');
        const slowResources = resources.filter(resource => resource.duration > 1000);
        
        if (slowResources.length > 0 && import.meta.env.DEV) {
          console.group('⚠️ 慢速资源 (>1s)');
          slowResources.forEach(resource => {
            console.log(`📄 ${resource.name.split('/').pop()}: ${resource.duration.toFixed(2)}ms`);
          });
          console.groupEnd();
        }
      }
    };

    // 页面加载完成后测量性能
    if (document.readyState === 'complete') {
      setTimeout(measurePerformance, 100);
    } else {
      window.addEventListener('load', () => {
        setTimeout(measurePerformance, 100);
      });
    }

    // 监控内存使用（如果支持）
    if ('memory' in performance && import.meta.env.DEV) {
      const logMemoryUsage = () => {
        const memory = performance.memory;
        console.group('💾 内存使用情况');
        console.log('已使用:', `${(memory.usedJSHeapSize / 1024 / 1024).toFixed(2)}MB`);
        console.log('总分配:', `${(memory.totalJSHeapSize / 1024 / 1024).toFixed(2)}MB`);
        console.log('限制:', `${(memory.jsHeapSizeLimit / 1024 / 1024).toFixed(2)}MB`);
        console.groupEnd();
      };

      // 每30秒记录一次内存使用
      const memoryInterval = setInterval(logMemoryUsage, 30000);
      
      return () => clearInterval(memoryInterval);
    }
  }, []);

  return null; // 这是一个无UI的监控组件
};

export default PerformanceMonitor;