import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Story } from '@/data/stories';
import { cn } from '@/lib/utils';

interface StoryCardProps {
  story: Story;
  className?: string;
}

export function StoryCard({ story, className }: StoryCardProps) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow",
        className
      )}
    >
      <Link to={`/stories/${story.id}`}>
        <div className="md:flex">
          {/* 故事图片 */}
          <div className="md:w-1/3 relative h-48 md:h-auto">
            <img 
              src={story.images[0]} 
              alt={story.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {story.featured && (
              <div className="absolute top-3 left-3 bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
                <i className="fa-solid fa-star"></i> 精选故事
              </div>
            )}
          </div>
          
          {/* 故事内容 */}
          <div className="p-6 md:w-2/3 flex flex-col">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors line-clamp-2">
              {story.title}
            </h3>
            
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
              {story.excerpt}
            </p>
            
            <div className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-gray-100 dark:border-gray-700">
              <div className="flex items-center gap-2">
                <img 
                  src={story.author.avatar} 
                  alt={story.author.name}
                  className="w-8 h-8 rounded-full object-cover border-2 border-white dark:border-gray-700"
                />
                <span className="text-sm font-medium text-gray-900 dark:text-white">{story.author.name}</span>
              </div>
              
              <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                <span className="flex items-center gap-1">
                  <i className="fa-regular fa-calendar"></i> {story.date}
                </span>
                <span className="flex items-center gap-1">
                  <i className="fa-regular fa-clock"></i> {story.readTime}
                </span>
              </div>
              
              <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                <span className="flex items-center gap-1">
                  <i className="fa-regular fa-heart"></i> {story.likes}
                </span>
                <span className="flex items-center gap-1">
                  <i className="fa-regular fa-comment"></i> {story.comments}
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}