import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { RouteCard } from '@/components/RouteCard';
import { Footer } from '@/components/Footer';
import { routes, getRoutesByDifficulty } from '@/data/routes';
import { motion } from 'framer-motion';

type DifficultyFilter = 'all' | 'easy' | 'moderate' | 'difficult';

export default function RoutesPage() {
  const [difficulty, setDifficulty] = useState<DifficultyFilter>('all');
  
  // 根据选择的难度筛选路线
  const filteredRoutes = difficulty === 'all' 
    ? routes 
    : getRoutesByDifficulty(difficulty as 'easy' | 'moderate' | 'difficult');
  
  // 获取难度对应的中文名称
  const getDifficultyName = (diff: DifficultyFilter) => {
    switch(diff) {
      case 'all': return '全部难度';
      case 'easy': return '简单';
      case 'moderate': return '中等';
      case 'difficult': return '困难';
      default: return '全部难度';
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-950">
      {/* 导航栏 */}
      <Navbar />
      
      <main className="flex-1">
        {/* 页面标题区域 */}
        <section className="relative py-20 bg-gradient-to-b from-green-50 to-white dark:from-green-950/30 dark:to-gray-950">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                探索徒步路线
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
                发现杭州及浙江周边最美丽的徒步路线，从轻松的休闲徒步到具有挑战性的山地探险
              </p>
            </motion.div>
          </div>
          
          {/* 装饰元素 */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 dark:opacity-5">
            <i className="fa-solid fa-mountain absolute -top-10 -left-10 text-[200px] text-green-600"></i>
            <i className="fa-solid fa-tree absolute bottom-10 right-10 text-[150px] text-green-600"></i>
          </div>
        </section>
        
        {/* 筛选和路线列表 */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            {/* 筛选选项 */}
            <div className="mb-10">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                按难度筛选
              </h2>
              <div className="flex flex-wrap gap-3">
                {(['all', 'easy', 'moderate', 'difficult'] as DifficultyFilter[]).map((diff) => (
                  <button
                    key={diff}
                    onClick={() => setDifficulty(diff)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      difficulty === diff
                        ? 'bg-green-600 text-white'
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700'
                    }`}
                  >
                    {getDifficultyName(diff)}
                  </button>
                ))}
              </div>
            </div>
            
            {/* 路线列表 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredRoutes.length > 0 ? (
                filteredRoutes.map((route) => (
                  <motion.div 
                    key={route.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * filteredRoutes.indexOf(route) }}
                  >
                    <RouteCard route={route} />
                  </motion.div>
                ))
              ) : (
                <div className="col-span-full py-20 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-400 mb-4">
                    <i className="fa-solid fa-route text-2xl"></i>
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">未找到路线</h3>
                  <p className="text-gray-600 dark:text-gray-300 max-w-md mx-auto">
                    当前筛选条件下没有找到匹配的徒步路线，请尝试其他筛选条件
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      
      {/* 页脚 */}
      <Footer />
    </div>
  );
}