import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { RouteCard } from '@/components/RouteCard';
import { Footer } from '@/components/Footer';
import { getFeaturedRoutes } from '@/data/routes';
import { StoryCard } from '@/components/StoryCard';
import { getFeaturedStories } from '@/data/stories';
import { motion } from 'framer-motion';

export default function Home() {
  const featuredRoutes = getFeaturedRoutes();
  const featuredStories = getFeaturedStories();
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-950">
      {/* 导航栏 */}
      <Navbar />
      
      <main className="flex-1">
        {/* Hero区域 */}
        <Hero />
        
         {/* 精选路线区域 */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <div className="mb-12 max-w-3xl">
              <h2 className="text-2xl font-light text-gray-800 dark:text-gray-200 mb-3 tracking-tight">精选徒步路线</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
精选杭州及浙江周边的徒步路线，尽享丰富自然与四季美景。
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredRoutes.map((route, index) => (
                <motion.div 
                  key={route.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index, ease: [0.22, 1, 0.36, 1] }}
                >
                  <RouteCard route={route} />
                </motion.div>
              ))}
            </div>
            
            <div className="mt-10 text-center">
              <a 
                href="/routes" 
                className="inline-flex items-center text-olive-600 dark:text-olive-400 font-light hover:underline text-sm transition-colors"
              >
查看全部路线
                <i className="fa-solid fa-angle-right ml-1 text-xs"></i>
              </a>
            </div>
          </div>
        </section>
        
        {/* 精选故事区域 */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50">
          <div className="container mx-auto">
            <div className="mb-12 max-w-3xl">
              <h2 className="text-2xl font-light text-gray-800 dark:text-gray-200 mb-3 tracking-tight">徒步者故事</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
徒步者的真实体验和感人故事。分享通过与自然接触获得的回忆和感悟。
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {featuredStories.map((story, index) => (
                <motion.div 
                  key={story.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 * index, ease: [0.22, 1, 0.36, 1] }}
                >
                  <StoryCard story={story} />
                </motion.div>
              ))}
            </div>
            
            <div className="mt-10 text-center">
              <a 
                href="/stories" 
                className="inline-flex items-center text-olive-600 dark:text-olive-400 font-light hover:underline text-sm transition-colors"
              >
阅读全部故事
                <i className="fa-solid fa-angle-right ml-1 text-xs"></i>
              </a>
            </div>
          </div>
        </section>
      </main>
      
      {/* 页脚 */}
      <Footer />
    </div>
  );
}