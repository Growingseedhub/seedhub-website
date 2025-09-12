export interface Story {
  id: string;
  title: string;
  author: {
    name: string;
    avatar: string;
  };
  date: string;
  readTime: string;
  excerpt: string;
  content: string;
  routeId?: string;
  images: string[];
  featured: boolean;
  likes: number;
  comments: number;
}

export const stories: Story[] = [
  {
    id: '1',
    title: '一个人徒步西湖群山的24小时',
    author: {
      name: '山野行者',
      avatar: 'https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=hiker%20avatar%20male&sign=d7ed1ce046f0bb0c1a13b1ccc42704fe'
    },
    date: '2025-08-15',
    readTime: '8分钟',
    excerpt: '独自徒步西湖群山，从清晨到黄昏，感受大自然的宁静与力量，遇见意想不到的风景和人们。',
    content: `# 一个人徒步西湖群山的24小时

清晨5点，我带着简单的装备和满心期待，开始了环西湖群山的徒步之旅。起点设在龙井村，此时的村庄还沉浸在晨雾中，只有少数几家茶农已经开始了一天的劳作。

## 清晨的龙井茶园

沿着蜿蜒的山路向上攀登，清新的空气带着茶香扑面而来。日出时分，阳光透过薄雾洒在茶园上，形成了一幅绝美的画面。我在一处观景台停下脚步，静静地欣赏着这难得的宁静时刻。

## 遇见同行者

在前往九溪十八涧的路上，我遇到了几位同样早起徒步的爱好者。我们结伴而行，分享着各自的徒步经历和故事。其中一位老先生已经坚持徒步西湖群山20年对这里的一草一木都了如指掌。

## 山顶的午餐时光

中午时分，我们到达了狮峰山山顶。在山顶的观景亭里，我们分享了各自带来的食物，一边享用简单的午餐，一边欣赏着西湖全景。远处的城市在阳光下闪闪发光，与近处的青山绿水形成了鲜明对比。

## 黄昏的钱塘江

徒步的最后一段路程沿着钱塘江畔进行。夕阳西下，金色的阳光洒在江面上，波光粼粼。我坐在江边的岩石上，回想着这一天的经历，内心充满了平静和满足。

独自徒步虽然有时会感到孤独，但也让我有更多机会与自然对话，倾听内心的声音。这次24小时的徒步经历将永远留在我的记忆中。`,
    routeId: '1',
    images: [
      'https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=West%20Lake%20mountain%20sunrise&sign=2ae59011865023912aabaccf3043b1f6',
      'https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Longjing%20tea%20garden%20morning&sign=998426f6c79828d1aecca8a28223778c'
    ],
    featured: true,
    likes: 128,
    comments: 24
  },
  {
    id: '2',
    title: '雨季徒步大明山：挑战与惊喜并存',
    author: {
      name: '雨中山人',
      avatar: 'https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=hiker%20avatar%20female&sign=6a6929906f21f599e7879b7abadf4d00'
    },
    date: '2025-07-28',
    readTime: '10分钟',
    excerpt: '冒着大雨徒步大明山，本以为会是一次糟糕的经历，却意外发现了雨中群山的独特魅力。',
    content: `# 雨季徒步大明山：挑战与惊喜并存

很多人会避开雨季徒步，但我却偏偏喜欢在雨中探索山林。这次选择大明山作为目的地，正是想体验一下雨中登山的乐趣与挑战。

## 准备工作

出发前，我仔细研究了天气预报，并准备了专业的防水装备：防水登山鞋、冲锋衣裤、防水背包和雨披。事实证明，这些装备在后来的徒步中发挥了关键作用。

## 雨中的大明山

清晨，当我到达大明山景区时，天空正下着淅淅沥沥的小雨。沿着山路向上攀登，雨水打湿了树叶，也洗净了空气。山间弥漫着浓浓的雾气，远处的山峰若隐若现，宛如仙境。

最令人印象深刻的是悬空栈道。平时这里视野开阔，可以看到壮丽的山景，但在雨天，周围被浓雾笼罩，只能看到近处的岩石和树木，仿佛进入了另一个世界。

## 意外的惊喜

在一处避雨的山洞口，我遇到了一位当地的采药老人。他向我展示了几种珍贵的草药，并讲述了它们的功效和故事。老人的智慧和对山林的热爱深深感染了我。

雨停之后，天空放晴，山间出现了美丽的彩虹。远处的山谷中云雾缭绕，景色壮丽无比。这一刻，我觉得所有的辛苦和挑战都是值得的。

## 雨季徒步小贴士

1. 确保装备防水性能良好，特别是鞋子和背包
2. 注意防滑雨季山路湿滑，容易摔倒
3. 关注天气预报，避开暴雨和雷电天气
4. 携带足够的保暖衣物，山顶温度较低
5. 保持手机电量充足，必要时可联系救援

雨季徒步虽然有一定挑战，但也能看到平时看不到的美景。如果你也想体验雨中登山的乐趣，不妨做好充分准备，来一次难忘的雨季徒步之旅。`,
    routeId: '3',
    images: [
      'https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Daming%20Mountain%20in%20rainy%20season&sign=9ae349a0fb805e1a035156cc325c8dd8',
      'https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=rainbow%20over%20mountain%20valley&sign=5c4f9d9da49f0bb880f41d4c4f9aefdf'
    ],
    featured: true,
    likes: 96,
    comments: 18
  },
  {
    id: '3',
    title: '带着孩子徒步九溪十八涧：自然教育的完美课堂',
    author: {
      name: '自然之子',
      avatar: 'https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=family%20hiking%20avatar&sign=727cbf9f9630e26f6fa9d455776612a1'
    },
    date: '2025-09-02',
    readTime: '6分钟',
    excerpt: '带着7岁的儿子徒步九溪十八涧，不仅享受了美丽的自然风景，还让孩子在实践中学习了丰富的自然知识。',
    content: `# 带着孩子徒步九溪十八涧：自然教育的完美课堂

作为一名自然教育工作者，我一直认为最好的课堂不在室内，而在大自然中。这个周末，我带着7岁的儿子小宇一起徒步九溪十八涧，希望通过这次徒步让他亲近自然，学习关于植物和生态的知识。

## 准备工作

为了让这次徒步既有趣又有教育意义，我提前准备了一些简单的自然观察工具：放大镜、笔记本、彩色铅笔和一本杭州常见植物图鉴。我还设计了一个"自然寻宝游戏"，列出了一些孩子可以在徒步过程中寻找的自然物品。

## 徒步中的发现

九溪十八涧果然是进行自然教育的理想场所。一路上溪水潺潺，绿树成荫，各种植物和小动物随处可见。

小宇很快就被路边的各种植物吸引了注意力。我们一起观察了不同形状的叶子，闻了闻桂花的香气，听了听不同鸟类的叫声。在溪边，我们还看到了几只小青蛙和蜻蜓的幼虫。

最让小宇兴奋的是发现了一棵倒下的大树，树干上长满了各种蘑菇和苔藓。我们用放大镜仔细观察了这些微生物的世界，小宇不停地问各种有趣的问题。

## 自然教育的收获

通过这次徒步，小宇不仅认识了10多种常见植物，还学会了如何使用放大镜观察微小生物，如何辨别不同鸟类的叫声。更重要的是，他对大自然产生了浓厚的兴趣，一路上不停地问问题，主动探索周围的环境。

回家的路上，小宇告诉我这是他"最棒的一天"。作为父亲，没有什么比看到孩子对自然产生热爱更让我开心的了。

如果你也想让孩子远离电子产品，亲近自然，不妨带他们去九溪十八涧徒步，让大自然成为孩子最好的老师。`,
    routeId: '2',
    images: [
      'https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=father%20and%20son%20hiking%20in%20forest&sign=84b50c92c9e695f8f6fb58b9e030902a',
      'https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=child%20observing%20plants%20with%20magnifying%20glass&sign=ceba51c16ad50b5f553ede971193381e'
    ],
    featured: false,
    likes: 78,
    comments: 12
  }
];

// 获取精选故事
export const getFeaturedStories = () => {
  return stories.filter(story => story.featured);
};

// 获取与特定路线相关的故事
export const getStoriesByRouteId = (routeId: string) => {
  return stories.filter(story => story.routeId === routeId);
};

// 获取单个故事详情
export const getStoryById = (id: string) => {
  return stories.find(story => story.id === id);
};