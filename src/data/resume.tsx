import { Icons } from '@/components/icons';
import { HomeIcon } from 'lucide-react';

export const DATA = {
  title: 'anonydxck',
  name: 'Ice',
  initials: 'TK',
  url: 'https://anonydxck.xyz',
  location: 'Bangkok, Thailand',
  locationLink: 'https://www.google.com/maps/place/sanfrancisco',
  description: 'Software Engineer turned Entrepreneur. I love building things and helping people.',
  summary: 'I am a driven and multifaceted individual with a passion for technology and entrepreneurship. My core strengths lie in backend development and full-stack engineering, where I have honed my skills through numerous self-initiated projects and hands-on experiences. Beyond technical proficiency, I am deeply interested in quantitative investment strategies, financial technology, and business operations.',
  avatarUrl: '/me.jpg',
  skills: ['Rust', 'Golang'],
  navbar: [
    { href: '/', icon: HomeIcon, label: 'Home' },
    // { href: '/blog', icon: NotebookIcon, label: 'Blog' },
  ],
  contact: {
    email: 'me@anonydxck.xyz',
    tel: '',
    social: {
      GitHub: {
        name: 'GitHub',
        url: 'https://github.com/dxckboi',
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/thanatorn-kanthala/',
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: 'X',
        url: 'https://dub.sh/dillion-twitter',
        icon: Icons.x,

        navbar: false,
      },
      medium: {
        name: 'Medium',
        url: 'https://medium.com/@thanatorn.kanthala',
        icon: Icons.tailwindcss,
        navbar: false,
      },
      email: {
        name: 'Send Email',
        url: 'mailto:tk.thanatorn@gmail.com',
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: 'KRNL Labs',
      href: 'https://krnl.xyz',
      badges: [],
      location: 'Remote',
      title: 'Blockchain Software Engineer',
      logoUrl: '/work/krnl.jpeg',
      start: 'August 2024',
      end: 'Present',
      description: '',
      // description: 'Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.',
    },
    {
      company: 'Algo Alchemist',
      href: 'https://alchemist.trading',
      badges: [],
      location: 'Remote',
      title: 'Techincal Partner',
      logoUrl: '/work/alchemist.png',
      start: 'April 2024',
      end: 'Present',
      description: '',
      // description: 'Architected and wrote the entire MVP of the GeForce Now Cloud Gaming internal admin and A/B testing dashboard using React, Redux, TypeScript, and Python.',
    },
    {
      company: 'Investic Analytic Studio',
      badges: [],
      href: 'https://investicstudio.com',
      location: 'Remote',
      title: 'Full Stack Developer',
      logoUrl: '/work/investic.jpeg',
      start: 'April 2023',
      end: 'July 2024',
      description: '',
      // description: 'In my role, I closely collaborated with design teams to transform wireframes into dynamic and visually appealing user interfaces using React.js and other modern front-end tools, integrating real-time data visualization through services like TradingView. On the backend, I developed scalable systems that supported marketplace platforms, secure payment gateways, and automated Telegram bots, incorporating best practices and complex algorithms for data handling. My work also extended to data engineering, where I created efficient ETL pipelines with TimescaleDB to manage large volumes of financial data, supporting advanced investment strategies. Additionally, I managed robust DevOps practices using tools like Jenkins, Google Cloud Build, and Docker to streamline deployment processes. This technical foundation supported my work with GenAI at a Quantitative Investment Lab, providing in-depth investment analytics for gold markets.',
    },
    {
      company: 'Accenture',
      href: 'https://accenture.com',
      badges: [],
      location: 'Remote',
      title: 'Backend Developer Intern',
      logoUrl: '/work/accenture.webp',
      start: 'November 2022',
      end: 'March 2023',
      description: '',
      // description: 'Co-developed a prototype iOS app with another intern in Swift for the new Splunk Phantom security orchestration product (later publicly demoed and launched at .conf annual conference in Las Vegas). Implemented a realtime service for the iOS app in Django (Python) and C++; serialized data using protobufs transmitted over gRPC resulting in an approximate 500% increase in data throughput.',
    },
  ],
  education: [
    {
      school: 'Chiang Mai University',
      href: 'https://cmu.ac.th',
      degree: 'Bachelor of Software Engineering',
      logoUrl: '/education/cmu.jpeg',
      start: '2019',
      end: '2024',
    },
  ],
  projects: [
    {
      title: 'Cloned Redis Server',
      href: 'https://github.com/dxckboi/cloned-redis.git',
      dates: '',
      active: true,
      description: 'I cloned Redis server using Rust and Tokio to understand how Redis works internally. I also added some features to it to make it more useful for my personal use case.',
      technologies: ['Rust', 'Tokio', 'Redis-cli'],
      links: [
        {
          type: 'Github',
          href: 'https://github.com/dxckboi/cloned-redis.git',
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: '/project/cloned-redis.png',
      video: '',
    },
  ],
  hackathons: [
    // {
    //   title: 'Hack Western 5',
    //   dates: 'November 23rd - 25th, 2018',
    //   location: 'London, Ontario',
    //   description: 'Developed a mobile application which delivered bedtime stories to children using augmented reality.',
    //   image: 'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png',
    //   mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg',
    //   links: [],
    // }
  ],
} as const;
