import { Code2, Palette, Globe, Layers, Cpu, Zap, Megaphone, Terminal, Search, Layout, Rocket, Book } from 'lucide-react';

export const techStack = {
  web: [
    { name: 'Next.js', icon: Globe, color: 'text-white' },
    { name: 'React', icon: Code2, color: 'text-blue-400' },
    { name: 'Tailwind CSS', icon: Layers, color: 'text-cyan-400' },
    { name: 'Framer Motion', icon: Zap, color: 'text-purple-400' },
    { name: 'TypeScript', icon: Terminal, color: 'text-blue-500' },
    { name: 'Node.js', icon: Cpu, color: 'text-green-500' },
  ],
  design: [
    { name: 'Figma', icon: Palette, color: 'text-pink-500' },
    { name: 'Adobe CC', icon: Layers, color: 'text-red-500' },
    { name: 'SVG Architecture', icon: Globe, color: 'text-orange-500' },
    { name: 'Branding', icon: Megaphone, color: 'text-yellow-400' },
  ]
};

export const webProjects = [
  {
    title: 'Nexus SaaS Dashboard',
    description: 'A high-performance analytics platform for modern enterprise resource planning.',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/46a1818e-f233-4ecb-a5b7-e4dcdfeeff1b/web-project---saas-dashboard-d6f01430-1774809191937.webp',
    link: '#',
    tags: ['React', 'Next.js', 'Tailwind']
  },
  {
    title: 'Solstice E-Commerce',
    description: 'Premium sneaker marketplace with real-time inventory and smooth animations.',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/46a1818e-f233-4ecb-a5b7-e4dcdfeeff1b/web-project---sneaker-store-82870f13-1774809193278.webp',
    link: '#',
    tags: ['E-Commerce', 'Stripe', 'Framer']
  },
  {
    title: 'Aether AI Interface',
    description: 'Experimental AI chat interface with glassmorphic elements and neural networks.',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/46a1818e-f233-4ecb-a5b7-e4dcdfeeff1b/web-project---ai-platform-830eb546-1774809191607.webp',
    link: '#',
    tags: ['AI', 'Three.js', 'Next.js']
  },
  {
    title: 'Vortex Agency Portfolio',
    description: 'A bold, immersive agency experience featuring advanced motion design.',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/46a1818e-f233-4ecb-a5b7-e4dcdfeeff1b/web-project---creative-agency-9e4e7c76-1774809195968.webp',
    link: '#',
    tags: ['Creative', 'Animation', 'UX']
  }
];

export const designGallery = [
  {
    id: 1,
    title: 'Brand Identity System',
    category: 'Branding',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/46a1818e-f233-4ecb-a5b7-e4dcdfeeff1b/graphic-design---brand-identity-03068047-1774809194450.webp',
    span: 'col-span-1 row-span-2'
  },
  {
    id: 2,
    title: 'Neon Pulse Poster',
    category: 'Print',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/46a1818e-f233-4ecb-a5b7-e4dcdfeeff1b/graphic-design---cyberpunk-poster-7ce77c85-1774809191793.webp',
    span: 'col-span-1 row-span-1'
  },
  {
    id: 3,
    title: 'Typography Exploration',
    category: 'Art',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/46a1818e-f233-4ecb-a5b7-e4dcdfeeff1b/graphic-design---typography-art-cc96632c-1774809193467.webp',
    span: 'col-span-1 row-span-1'
  },
  {
    id: 4,
    title: 'Industrial 3D Render',
    category: '3D',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/46a1818e-f233-4ecb-a5b7-e4dcdfeeff1b/graphic-design---3d-render-6980c8a4-1774809195654.webp',
    span: 'col-span-2 row-span-1'
  },
  {
    id: 5,
    title: 'FitTrack UI Kit',
    category: 'UI/UX',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/46a1818e-f233-4ecb-a5b7-e4dcdfeeff1b/graphic-design---mobile-ui-8718d6e1-1774809199841.webp',
    span: 'col-span-1 row-span-1'
  },
  {
    id: 6,
    title: 'Carbon Business Identity',
    category: 'Branding',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/46a1818e-f233-4ecb-a5b7-e4dcdfeeff1b/graphic-design---business-card-b13e2302-1774809206609.webp',
    span: 'col-span-1 row-span-1'
  }
];

export const services = [
  {
    title: 'Web Development',
    description: 'Web Development: Creating scalable, SEO-optimized applications using Next.js and Tailwind CSS for a seamless user experience. Ensuring robust performance and maintainability across platforms.',
    icon: Code2
  },
  {
    title: 'Graphic Design',
    description: 'Graphic Design: Crafting bold visual identities and industrial-inspired design systems. Focused on building a unique brand presence that bridges the gap between art and utility.',
    icon: Palette
  },
  {
    title: 'UI/UX Architecture',
    description: 'UI/UX Architecture: User-centric interfaces designed with precision and a focus on conversion and accessibility. Crafting seamless user journeys that combine engineering logic with intuitive visual design principles.',
    icon: Globe
  },
  {
    title: 'Brand Strategy',
    description: 'Brand Strategy: Comprehensive branding solutions to help your business stand out in a crowded digital landscape. Defining your unique value proposition and translating it into a compelling visual and verbal identity.',
    icon: Megaphone
  }
];

export const brands = [
  { 
    name: 'Pathfinder International Ethiopia', 
    logo: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/46a1818e-f233-4ecb-a5b7-e4dcdfeeff1b/brand-logo-1-fce4a59f-1774810277379.webp',
    description: 'Collaborated on digital communications and branding strategies for international developmental impact.'
  },
  { 
    name: 'Amare Tiruneh Business Group (ATBG)', 
    logo: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/46a1818e-f233-4ecb-a5b7-e4dcdfeeff1b/brand-logo-2-b5d2bbfe-1774810282445.webp',
    description: 'Developed a comprehensive multi-subsidiary web portal using Next.js, focused on industrial aesthetics and seamless user navigation.'
  },
];

export const processSteps = [
  {
    id: '01',
    title: 'Discovery',
    subtitle: 'We define goals, target audience, and technical requirements.',
    description: 'Deep diving into the business logic and user needs to create a solid foundation for the project roadmap.',
    icon: Search
  },
  {
    id: '02',
    title: 'Design',
    subtitle: 'Creating high-fidelity mockups with a focus on Dark Mode First and Glassmorphism.',
    description: 'Applying industrial design principles to digital interfaces, ensuring every pixel serves a functional purpose.',
    icon: Layout
  },
  {
    id: '03',
    title: 'Development',
    subtitle: 'Clean, scalable coding using Tailwind CSS and Framer Motion for smooth interactions.',
    description: 'Engineering high-performance applications with React and Next.js, prioritizing accessibility and maintainable codebases.',
    icon: Code2
  },
  {
    id: '04',
    title: 'Deployment',
    subtitle: 'Launching on high-speed servers with local SEO optimization for the Ethiopian market.',
    description: 'Fine-tuning performance metrics and ensuring your site is discoverable and fast for users in Addis Ababa and beyond.',
    icon: Rocket
  }
];

export const testimonials = [
  {
    quote: "The attention to detail in both code and design is rare. Menelik Michael Meshesha delivered a platform that truly represents our industrial standard.",
    author: "Amare Tiruneh",
    role: "CEO, AT Business Group",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100&h=100"
  },
  {
    quote: "Exceptional UI/UX vision. Our user engagement metrics increased by 40% within the first month of launching the new dashboard.",
    author: "Sarah Jenkins",
    role: "Product Director, Nexus SaaS",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100&h=100"
  }
];

export const readingList = [
  { title: 'Atomic Habits', author: 'James Clear', icon: Book },
  { title: 'Clean Architecture', author: 'Robert C. Martin', icon: Book },
  { title: 'The Design of Everyday Things', author: 'Don Norman', icon: Book },
];