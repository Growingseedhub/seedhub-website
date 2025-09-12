import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
  return (
    <header className={cn(
      "sticky top-0 z-50 w-full backdrop-blur-sm bg-white/90 dark:bg-gray-900/90 border-b border-gray-100 dark:border-gray-800",
      className
    )}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <i className="fa-solid fa-seedling text-olive-600 dark:text-olive-400 text-xl"></i>
              <span className="text-xl font-light tracking-wider text-gray-800 dark:text-gray-100">SeedHub</span>
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              className="text-gray-800 dark:text-gray-200 hover:text-olive-600 dark:hover:text-olive-400 px-3 py-2 text-sm font-light transition-colors border-b-2 border-transparent hover:border-olive-500 dark:hover:border-olive-500"
            >
              首页
            </Link>
            <Link 
              to="/routes" 
              className="text-gray-600 dark:text-gray-400 hover:text-olive-600 dark:hover:text-olive-400 px-3 py-2 text-sm font-light transition-colors border-b-2 border-transparent hover:border-olive-500 dark:hover:border-olive-500"
            >
              徒步路线
            </Link>
            <Link 
              to="/stories" 
              className="text-gray-600 dark:text-gray-400 hover:text-olive-600 dark:hover:text-olive-400 px-3 py-2 text-sm font-light transition-colors border-b-2 border-transparent hover:border-olive-500 dark:hover:border-olive-500"
            >
              徒步故事
            </Link>
            <Link 
              to="/photos" 
              className="text-gray-600 dark:text-gray-400 hover:text-olive-600 dark:hover:text-olive-400 px-3 py-2 text-sm font-light transition-colors border-b-2 border-transparent hover:border-olive-500 dark:hover:border-olive-500"
            >
              照片分享
            </Link>
            <Link 
              to="/photography" 
              className="text-gray-600 dark:text-gray-400 hover:text-olive-600 dark:hover:text-olive-400 px-3 py-2 text-sm font-light transition-colors border-b-2 border-transparent hover:border-olive-500 dark:hover:border-olive-500"
            >
              摄影作品
            </Link>
            <Link 
              to="/knowledge" 
              className="text-gray-600 dark:text-gray-400 hover:text-olive-600 dark:hover:text-olive-400 px-3 py-2 text-sm font-light transition-colors border-b-2 border-transparent hover:border-olive-500 dark:hover:border-olive-500"
            >
              徒步知识
            </Link>
          </nav>
          
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-full text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300">
              <i className="fa-solid fa-search text-sm"></i>
            </button>
            <button className="p-2 rounded-full text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300 md:hidden">
              <i className="fa-solid fa-bars text-sm"></i>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}