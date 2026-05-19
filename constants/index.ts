import {
  Smartphone,
  Globe,
  Database,
  Cpu,
  TrendingUp,
  Settings,
  Layers,
  Code,
  Search,
  ShieldCheck,
  Zap,
  Users,
  Clock,
  Globe2,
  Headphones
} from 'lucide-react';
// import Nmf_News_Web_Img from '../public/Nmf_News.png'
// import Rna_New from '../public/rna_news.png'
// import World91 from '../public/World91_Project.png'
// import Sm_Couier_Cargo from '../public/sm_couier_cargo.png'
// import Nmf_App from '../public/Nmf_App.png'
// import Travi_Cabs from '../public/travi.png'
// import Nmf_Logo from '../public/logo.png'
// import Travi_App from '../public/travi_App.png'
// import Solbest from '../public/solbest.png'



export const SERVICES = [
  {
    id: 'mobile',
    link: "https://www.mindinventory.com/blog/wp-content/uploads/2018/12/benefits-of-mobile-app-for-business.webp",
    title: 'Mobile App Development',
    description: 'High-performance native and cross-platform mobile applications for iOS and Android.',
    icon: Smartphone,
    color: 'from-blue-500 to-cyan-400',
    subServices: ['Android Development', 'iOS Development', 'React Native', 'Flutter']
  },
  {
    id: 'web',
    link: "https://www.digitalmogli.com/wp-content/uploads/2020/03/web-design.png",
    title: 'Custom Website Development',
    description: 'Dynamic, scalable, and SEO-optimized web applications built with modern frameworks.',
    icon: Globe,
    color: 'from-purple-500 to-pink-500',
    subServices: ['Dynamic Websites', 'Web Applications', 'E-commerce Platforms']
  },
  {
    id: 'enterprise',
    link: "https://woxapp.com/uploads/images/CRM/1_Preview.png",
    title: 'CRM & ERP Systems',
    description: 'Tailored enterprise resource planning and customer relationship management solutions.',
    icon: Database,
    color: 'from-orange-500 to-red-500',
    subServices: ['CRM Development', 'ERP Systems', 'Inventory Management']
  },
  {
    id: 'automation',
    link: "https://automationalley.com/wp-content/uploads/620c0d2e51cac3db4f588611_AA-CaseStudy-PowertotheCitizen.jpg",
    title: 'Business Automation',
    description: 'Streamline your operations with custom software and intelligent API integrations.',
    icon: Cpu,
    color: 'from-green-500 to-emerald-500',
    subServices: ['Custom Software', 'API Integrations', 'Workflow Automation']
  },
  {
    id: 'marketing',
    title: 'Digital Marketing',
    link: "https://media.licdn.com/dms/image/v2/C4E12AQGs0Vn3cUzzeg/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1538589576818?e=2147483647&v=beta&t=g3Wz9cMpcI1vdtZtIFIW_7T7OcK_m3pn7a_fA5s3dXs",
    description: 'Data-driven strategies to boost your online presence and search engine rankings.',
    icon: TrendingUp,
    color: 'from-yellow-500 to-orange-500',
    subServices: ['SEO Optimization', 'Content Marketing', 'Social Media Strategy']
  },
  {
    id: 'maintenance',
    title: 'Website AMC',
    link: "https://app.dess-deryl.in/public/assets/images/publish/1743066343_67e514e78db3a.png",
    description: 'Comprehensive maintenance and support to keep your digital assets secure and updated.',
    icon: Settings,
    color: 'from-cyan-500 to-blue-500',
    subServices: ['Annual Maintenance', 'Security Audits', 'Performance Tuning']
  }
];

export const TECH_STACK = [
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg' },
  { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
  { name: 'Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg' },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'Kubernetes', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'Redis', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
  { name: 'GraphQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg' },
  { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
];

export const WORKFLOW = [
  { title: 'Discovery', description: 'Understanding your vision and business goals.' },
  { title: 'Strategy', description: 'Mapping out the technical architecture and roadmap.' },
  { title: 'UI/UX Design', description: 'Crafting intuitive and engaging digital experiences.' },
  { title: 'Development', description: 'Building scalable solutions with clean, modern code.' },
  { title: 'Testing', description: 'Rigorous quality assurance for a flawless launch.' },
  { title: 'Deployment', description: 'Launching your product to the global market.' },
  { title: 'Growth', description: 'Continuous support and iterative improvements.' }
];


export const PORTFOLIO = [
  {
    id: 1,
    name: 'WORLD91 news',
    category: 'Websites',
    link: "https://w91.mquvtech.com",
    industry: 'News',
    tech: ['React', 'Node.js', 'PostgreSQL'],
    image: "/assets/World91_Project.png",
    type: 'desktop'
  },
  {
    id: 2,
    name: 'NMF App',
    link: "https://play.google.com/store/apps/details?id=com.kmcliv.nmfnews",
    category: 'Mobile Apps',
    industry: 'News',
    tech: ['Flutter', 'Firebase'],
    image: "/assets/Nmf_App.png",
    type: 'mobile'
  },
  {
    id: 3,
    name: 'NMF News',
    link: "https://www.newsnmf.com",
    category: 'Websites',
    industry: 'News',
    tech: ['PHP', 'Laravel', 'MySQL'],
    image: "/assets/Nmf_News.png",
    type: 'desktop'
  },
  {
    id: 4,
    name: 'RNA News',
    category: 'Websites',
    link: "https://rnamedia.in",
    industry: 'News',
    tech: ['Next.js', 'Shopify'],
    image: "/assets/rna_news.png",
    type: 'desktop'
  },
  {
    id: 5,
    name: 'Travi App',
    link: "https://play.google.com/store/apps/details?id=com.travicabs.travicabs",
    category: 'Mobile Apps',
    industry: 'Travel',
    tech: ['Flutter', 'Firebase'],
    image: "/assets/travi_App.png",
    type: 'mobile'
  },
  {
    id: 6,
    name: 'Travi Cabs',
    category: 'Websites',
    link: "https://www.travicabs.com",
    industry: 'Travel',
    tech: ['React Native', 'AWS'],
    image: "/assets/travi.png",
    type: 'desktop'
  },
  {
    id: 7,
    name: 'Sol Best',
    category: 'Websites',
    industry: 'Hotels',
    link: "https://www.solbest.ae/",
    tech: ['Python', 'Django', 'React'],
    image: "/assets/solbest.png",
    type: 'desktop'
  },
  {
    id: 8,
    name: 'SM Courier Cargo',
    category: 'CRM / ERP Systems',
    industry: 'Courier',
    link: "https://smcouriercargo.com/",
    tech: ['Python', 'Django', 'React'],
    image: "/assets/sm_couier_cargo.png",
    type: 'desktop'
  }
];

export const CLIENTS = [
  { name: 'News NMF', logo: "/assets/logo.png" },
  { name: 'Google', logo: 'https://logo.clearbit.com/google.com' },
  { name: 'Microsoft', logo: 'https://logo.clearbit.com/microsoft.com' }
];

export const STATS = [
  { label: 'Projects Delivered', value: 120, suffix: '+' },
  { label: 'Happy Clients', value: 50, suffix: '+' },
  { label: 'Expert Developers', value: 10, suffix: '+' },
  { label: 'Years Experience', value: 5, suffix: '+' },
  { label: 'Support', value: 24, suffix: '/7' }
];

export const WHY_CHOOSE_US = [
  { title: 'Innovative Technology', icon: Zap, description: 'Using the latest tech stacks to build future-ready solutions.' },
  { title: 'Custom Built Solutions', icon: Code, description: 'Tailored software designed specifically for your business needs.' },
  { title: 'Fast Development', icon: Clock, description: 'Agile methodologies ensuring quick time-to-market.' },
  { title: 'Secure & Scalable', icon: ShieldCheck, description: 'Built to handle growth while maintaining top-tier security.' },
  { title: 'Global Support', icon: Globe2, description: 'Serving clients across the globe with dedicated support.' },
  { title: 'Dedicated Support', icon: Headphones, description: '24/7 assistance to ensure your digital solutions run smoothly at all times.' }
];

export const projects = [
  {
    id: 1,
    title: 'SuperMall',
    slug: 'supermall',
    category: 'E-Commerce',
    shortDescription: 'Rural commerce platform',
    technologies: ['Next.js', 'Node.js', 'MongoDB'],
    image: '/assets/supermall.png',
  },
];
