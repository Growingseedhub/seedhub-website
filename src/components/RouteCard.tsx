import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Route } from '@/data/routes';
import { cn } from '@/lib/utils';

interface RouteCardProps {
  route: Route;
}

// 根据难度返回不同的样式和文本
const getDifficultyInfo = (difficulty: 'easy' | 'moderate' | 'difficult') => {
  switch (difficulty) {
    case 'easy':
      return { 
        text: '简单', 
        bgColor: 'bg-green-100', 
        textColor: 'text-green-800',
        icon: 'fa-leaf'
      };
    case 'moderate':
      return { 
        text: '中等', 
        bgColor: 'bg-yellow-100', 
        textColor: 'text-yellow-800',
        icon: 'fa-mountain'
      };
    case 'difficult':
      return { 
        text: '困难', 
        bgColor: 'bg-red-100', 
        textColor: 'text-red-800',
        icon: 'fa-triangle-exclamation'
      };
  }
};

export function RouteCard({ route }: RouteCardProps) {
  const difficultyInfo = getDifficultyInfo(route.difficulty);
  
    return (
      <motion.div 
        whileHover={{ y: -5 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="group relative rounded-lg overflow-hidden bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300"
      >
        <Link to={`/routes/${route.id}`}>
          {/* 路线图片 */}
          <div className="relative h-48 w-full overflow-hidden">
            <img 
              src={route.imageUrl} 
              alt={route.name}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {route.featured && (
              <div className="absolute top-3 left-3 bg-olive-600 text-white text-xs font-light px-2 py-1 rounded flex items-center gap-1">
                <i className="fa-solid fa-star text-[10px]"></i> 精选
              </div>
            )}
          </div>
          
          {/* 路线信息 */}
          <div className="p-4">
            <h3 className="text-base font-light text-gray-800 dark:text-gray-200 group-hover:text-olive-600 dark:group-hover:text-olive-400 transition-colors mb-3">
              {route.name}
            </h3>
            
            <p className="text-xs text-gray-600 dark:text-gray-400 mb-4 line-clamp-2 leading-relaxed">
              {route.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {route.tags.map((tag, index) => (
                <span 
                  key={index} 
                  className="text-xs bg-gray-50 dark:bg-gray-700/50 text-gray-700 dark:text-gray-300 px-2 py-0.5 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="flex justify-between items-center pt-2 border-t border-gray-50 dark:border-gray-700">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                  <i className="fa-solid fa-map-marker-alt text-olive-500 dark:text-olive-400 text-xs"></i>
                  <span>{route.location}</span>
                </div>
                <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                  <i className="fa-solid fa-road text-olive-500 dark:text-olive-400 text-xs"></i>
                  <span>{route.length}km</span>
                </div>
              </div>
              
              <div className={`flex items-center gap-1 text-xs font-light px-2 py-0.5 rounded ${difficultyInfo.bgColor} ${difficultyInfo.textColor}`}>
                <i className={`fa-solid ${difficultyInfo.icon} text-xs`}></i>
                {difficultyInfo.text}
              </div>
            </div>
          </div>
        </Link>
      </motion.div>
    )
}