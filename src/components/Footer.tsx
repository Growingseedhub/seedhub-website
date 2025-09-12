import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  return (
    <footer className={cn(
      "bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 py-12",
      className
    )}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <i className="fa-solid fa-seedling text-olive-600 dark:text-olive-400 text-xl"></i>
              <span className="text-xl font-light tracking-wider text-gray-800 dark:text-gray-100">SeedHub</span>
            </div>
            <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
与自然同行，享受充实时光。我们提供杭州及浙江周边的徒步信息。
            </p>
          </div>
          
          <div>
            <h3 className="text-xs font-light text-gray-500 dark:text-gray-500 uppercase tracking-wider mb-4">
              探索
            </h3>
            <ul className="space-y-2">
              <li><Link to="/routes" className="text-xs text-gray-600 dark:text-gray-400 hover:text-olive-600 dark:hover:text-olive-400 transition-colors">徒步路线</Link></li>
              <li><Link to="/stories" className="text-xs text-gray-600 dark:text-gray-400 hover:text-olive-600 dark:hover:text-olive-400 transition-colors">徒步故事</Link></li>
              <li><Link to="/photos" className="text-xs text-gray-600 dark:text-gray-400 hover:text-olive-600 dark:hover:text-olive-400 transition-colors">照片分享</Link></li>
              <li><Link to="/photography" className="text-xs text-gray-600 dark:text-gray-400 hover:text-olive-600 dark:hover:text-olive-400 transition-colors">摄影作品</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xs font-light text-gray-500 dark:text-gray-500 uppercase tracking-wider mb-4">
              关于
            </h3>
            <ul className="space-y-2">
              <li><Link to="/knowledge" className="text-xs text-gray-600 dark:text-gray-400 hover:text-olive-600 dark:hover:text-olive-400 transition-colors">徒步知识</Link></li>
              <li><Link to="/about" className="text-xs text-gray-600 dark:text-gray-400 hover:text-olive-600 dark:hover:text-olive-400 transition-colors">关于我们</Link></li>
              <li><Link to="/contact" className="text-xs text-gray-600 dark:text-gray-400 hover:text-olive-600 dark:hover:text-olive-400 transition-colors">联系我们</Link></li>
              <li><Link to="/terms" className="text-xs text-gray-600 dark:text-gray-400 hover:text-olive-600 dark:hover:text-olive-400 transition-colors">使用条款</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xs font-light text-gray-500 dark:text-gray-500 uppercase tracking-wider mb-4">
              关注我们
            </h3>
            <div className="flex space-x-3">
              <a href="#" className="p-2 rounded-full bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-olive-50 dark:hover:bg-olive-900/20 hover:text-olive-600 dark:hover:text-olive-400 transition-colors duration-300">
                <i className="fa-brands fa-weixin text-sm"></i>
              </a>
              <a href="#" className="p-2 rounded-full bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-olive-50 dark:hover:bg-olive-900/20 hover:text-olive-600 dark:hover:text-olive-400 transition-colors duration-300">
                <i className="fa-brands fa-weibo text-sm"></i>
              </a>
              <a href="#" className="p-2 rounded-full bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-olive-50 dark:hover:bg-olive-900/20 hover:text-olive-600 dark:hover:text-olive-400 transition-colors duration-300">
                <i className="fa-brands fa-instagram text-sm"></i>
              </a>
              <a href="#" className="p-2 rounded-full bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-olive-50 dark:hover:bg-olive-900/20 hover:text-olive-600 dark:hover:text-olive-400 transition-colors duration-300">
                <i className="fa-brands fa-qq text-sm"></i>
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-6 border-t border-gray-100 dark:border-gray-800 text-center text-xs text-gray-500 dark:text-gray-500">
© {new Date().getFullYear()} SeedHub. 与自然同行。
        </div>
      </div>
    </footer>
  );
}