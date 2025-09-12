export interface Route {
  id: string;
  name: string;
  description: string;
  difficulty: 'easy' | 'moderate' | 'difficult';
  length: number; // 公里
  duration: string; // 预计时间
  tags: string[];
  location: string;
  imageUrl: string;
  rating: number; // 评分(1-5)
  featured: boolean; // 是否精选路线
}

export const routes: Route[] = [
  {
    id: '1',
    name: '杭州西湖群山徒步路线',
    description: '经典的西湖群山徒步路线，全程可欣赏西湖美景，途经多个著名景点，适合初级徒步者。',
    difficulty: 'easy',
    length: 15,
    duration: '5-6小时',
    tags: ['经典', '全景', '文化'],
    location: '杭州市西湖区',
    imageUrl: 'https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=West%20Lake%20mountain%20hiking%20trail%20Hangzhou&sign=d285cc4fc2375ad433c034828f4b8737',
    rating: 4.8,
    featured: true
  },
  {
    id: '2',
    name: '龙井村至九溪十八涧徒步',
    description: '穿越龙井茶园和九溪十八涧的徒步路线，风景秀丽，空气清新，终点可到达钱塘江畔。',
    difficulty: 'easy',
    length: 8,
    duration: '3-4小时',
    tags: ['茶园', '溪流', '休闲'],
    location: '杭州市西湖区',
    imageUrl: 'https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Longjing%20tea%20village%20hiking%20path%20Hangzhou&sign=740bb91f885338489da30483b965382b',
    rating: 4.7,
    featured: true
  },
  {
    id: '3',
    name: '大明山悬空栈道徒步',
    description: '挑战大明山悬空栈道，欣赏壮丽山景，感受惊险刺激的徒步体验。',
    difficulty: 'moderate',
    length: 12,
    duration: '6-7小时',
    tags: ['惊险', '栈道', '高山'],
    location: '杭州市临安区',
    imageUrl: 'https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Daming%20Mountain%20suspension%20plank%20road%20Zhejiang&sign=492d9176c34f41539a416e8e60e867c5',
    rating: 4.9,
    featured: true
  },
  {
    id: '4',
    name: '浙西大峡谷穿越',
    description: '穿越浙西大峡谷，欣赏峡谷风光，溪流飞瀑，体验原始自然之美。',
    difficulty: 'difficult',
    length: 20,
    duration: '8-10小时',
    tags: ['峡谷', '溪流', '挑战'],
    location: '杭州市临安区',
    imageUrl: 'https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=West%20Zhejiang%20Grand%20Canyon%20scenery&sign=d03a257915e8cddf2a4a4409c442d0f0',
    rating: 4.6,
    featured: false
  },
  {
    id: '5',
    name: '莫干山经典徒步路线',
    description: '徒步莫干山，欣赏竹林风光，探访名人别墅，感受山间清凉。',
    difficulty: 'moderate',
    length: 15,
    duration: '6-7小时',
    tags: ['竹林', '历史', '避暑'],
    location: '湖州市德清县',
    imageUrl: 'https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Mogan%20Mountain%20bamboo%20forest%20Zhejiang&sign=23ed31326d71a1c8be0297933290db9c',
    rating: 4.5,
    featured: false
  },
  {
    id: '6',
    name: '雁荡山全景徒步',
    description: '游览雁荡山核心景区，欣赏奇峰怪石，体验"海上名山"的独特魅力。',
    difficulty: 'moderate',
    length: 18,
    duration: '7-8小时',
    tags: ['奇峰', '怪石', '全景'],
    location: '温州市乐清市',
    imageUrl: 'https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Yandang%20Mountain%20unique%20peak%20scenery&sign=74d8535c70e214d84ddf365b1f09fbfe',
    rating: 4.7,
    featured: false
  }
];

// 获取精选路线
export const getFeaturedRoutes = () => {
  return routes.filter(route => route.featured);
};

// 获取按难度分类的路线
export const getRoutesByDifficulty = (difficulty: 'easy' | 'moderate' | 'difficult') => {
  return routes.filter(route => route.difficulty === difficulty);
};

// 获取单个路线详情
export const getRouteById = (id: string) => {
  return routes.find(route => route.id === id);
};