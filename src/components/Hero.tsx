import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface HeroProps {
  className?: string;
}

export function Hero({ className }: HeroProps) {
  return (
    <section className={cn("relative h-[70vh] w-full overflow-hidden", className)}>
      {/* 背景图片 */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Japanese%20style%20mountain%20landscape%20with%20soft%20light%20and%20mist&sign=1f5dbbdb3bf0e5dcdf3f9856c5e1cb11" 
          alt="日式山野徒步风景" 
          className="h-full w-full object-cover brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
      </div>
      
      {/* Hero内容 */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-16 md:pb-24 px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-6 leading-tight tracking-tight">
探索浙江山野<br />
<span className="text-olive-300 font-normal">与自然同行的旅程</span>
          </h1>
          <p className="text-base md:text-lg text-gray-200 mb-8 max-w-xl leading-relaxed opacity-90">
SeedHub汇集了杭州及浙江周边精选的徒步路线、真实的登山体验和美丽的照片。
通过与自然的接触，让身心得到全面的放松与焕新。
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/routes" 
              className="px-8 py-3 bg-olive-600 hover:bg-olive-700 text-white font-light rounded-full transition-all duration-300 hover:shadow-md text-center"
            >
探索路线
            </Link>
            <Link 
              to="/stories" 
              className="px-8 py-3 bg-white/10 backdrop-blur-sm hover:bg-white/15 text-white font-light rounded-full transition-all duration-300 border border-white/20 text-center"
            >
阅读故事
            </Link>
          </div>
        </motion.div>
      </div>
      
      {/* 向下滚动指示器 */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white opacity-70"
      >
        <button className="p-2 rounded-full bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300">
          <i className="fa-solid fa-angle-down text-lg"></i>
        </button>
      </motion.div>
    </section>
  );
}