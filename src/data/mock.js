export const mockData = {
  hero: {
    name: "Ahmad Faraz",
    title: "Full-Stack Developer",
    typingTexts: ["full-stack web apps", "crypto & DeFi tools", "Web3 dApps", "real-time platforms"],
    description: "I'm an 18-year-old developer from Bangalore who ships real products — crypto wallets, payment rails, and real-time platforms — with a deep pull toward blockchain and Web3.",
    experiences: ["Web Apps", "Crypto Tools", "Web3 dApps", "APIs"],
    image: "/Profile.png"
  },
  about: {
    title: "About Me",
    experienceTypes: ["Digital Web Apps", "AI Bots", "Crypto DApps", "Blockchain Solutions"],
    content: "I build things for the web, and I've been writing code since I was a kid. Today that means full-stack work across React, Next.js, Node, and Python — and a growing focus on crypto, blockchain, and Web3.\n\nI care about products that actually ship and feel good to use: a non-custodial wallet, a payment gateway on Cardano, a video platform, an uptime monitor. Real things, in production.\n\nRight now I'm going deep on Python and smart contracts, and I'm always up for a hard problem.",
    stats: [
      { label: "Projects shipped", value: "15+" },
      { label: "Years writing code", value: "7+" },
      { label: "Core technologies", value: "10+" },
      { label: "Public repos", value: "20+" }
    ]
  },
  projects: [
    {
      id: 1,
      title: "Crypto Vault",
      description: "A secure web-based decentralized crypto wallet that enables users to manage their digital assets with enterprise-level security and an intuitive interface.",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1200&q=80&auto=format&fit=crop",
      technologies: [
        { name: "Next.js 15", icon: "⚡" },
        { name: "TypeScript", icon: "📘" },
        { name: "TailwindCSS", icon: "🎨" },
        { name: "Node.js", icon: "🟢" },
        { name: "MongoDB", icon: "🍃" }
      ],
      features: [
        "Multi-wallet support",
        "Real-time portfolio tracking",
        "Secure transaction signing",
        "DeFi protocol integration"
      ],
      demoLink: "https://crypto-vault-project.vercel.app/",
      codeLink: "https://github.com/pirzada-ahmadfaraz/Crypto-Vault",
      status: "Completed"
    },
    {
      id: 2,
      title: "Meet Vault",
      description: "A comprehensive video conferencing solution with advanced features like screen sharing, real-time chat, and seamless integration capabilities.",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&q=80&auto=format&fit=crop",
      technologies: [
        { name: "Next.js 15", icon: "⚡" },
        { name: "WebRTC", icon: "📹" },
        { name: "Socket.io", icon: "🔌" },
        { name: "Express.js", icon: "🚀" },
        { name: "MongoDB", icon: "🍃" }
      ],
      features: [
        "HD video conferencing",
        "Screen sharing & recording",
        "Real-time messaging",
        "Multi-platform support"
      ],
      demoLink: "https://meet-vault.vercel.app",
      codeLink: "https://github.com/pirzada-ahmadfaraz/MeetVault",
      status: "Completed"
    },
    {
      id: 3,
      title: "PayFlow",
      description: "A non-custodial Cardano payment gateway that enables merchants to accept cryptocurrency payments with shareable payment links, real-time tracking, and automatic stablecoin conversions.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&q=80&auto=format&fit=crop",
      technologies: [
        { name: "Next.js 14", icon: "⚡" },
        { name: "TypeScript", icon: "📘" },
        { name: "Supabase", icon: "🗄️" },
        { name: "MeshJS", icon: "🔗" },
        { name: "Cardano", icon: "💎" }
      ],
      features: [
        "Non-custodial architecture",
        "Real-time payment detection",
        "Automatic ADA-to-stablecoin conversion",
        "REST API with webhooks"
      ],
      codeLink: "https://github.com/pirzada-ahmadfaraz/PayFlow",
      status: "Completed"
    },
    {
      id: 4,
      title: "Pingly",
      description: "An uptime monitoring service that tracks website availability and performance, helping developers ensure their services stay online with real-time alerts and status dashboards.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80&auto=format&fit=crop",
      technologies: [
        { name: "JavaScript", icon: "📜" },
        { name: "Node.js", icon: "🟢" },
        { name: "Express.js", icon: "🚀" },
        { name: "React", icon: "⚛️" },
        { name: "Vercel", icon: "▲" }
      ],
      features: [
        "Real-time uptime monitoring",
        "Status dashboards",
        "Performance tracking",
        "Alert notifications"
      ],
      demoLink: "https://pinglyy.vercel.app/",
      codeLink: "https://github.com/pirzada-ahmadfaraz/Pingly",
      status: "Completed"
    }
  ],
  skills: {
    technical: [
      { name: "JavaScript", level: 90, category: "Frontend" },
      { name: "Python", level: 85, category: "Backend" },
      { name: "React/Next.js", level: 88, category: "Frontend" },
      { name: "Node.js", level: 82, category: "Backend" },
      { name: "TypeScript", level: 80, category: "Frontend" },
      { name: "MongoDB", level: 75, category: "Database" },
      { name: "TailwindCSS", level: 92, category: "Styling" },
      { name: "Git/GitHub", level: 85, category: "Tools" }
    ],
    tools: [
      "VS Code",
      "Git & GitHub",
      "Figma",
      "Postman",
      "Docker",
      "Vercel",
      "Firebase",
      "MongoDB Atlas"
    ]
  },
  future: {
    title: "Future Goals & Learning Path",
    currentlyLearning: [
      {
        name: "Advanced Python",
        description: "Deep diving into advanced Python concepts, frameworks like Django/FastAPI, and data science libraries.",
        progress: 60,
        timeframe: "Next 6 months"
      },
      {
        name: "Solidity & Smart Contracts",
        description: "Building decentralized applications with Solidity, Hardhat, and EVM-compatible chains.",
        progress: 25,
        timeframe: "Next 12 months"
      }
    ],
    futureInterests: [
      {
        name: "Web3 & Blockchain",
        description: "Smart contracts, DApps, and decentralized systems development.",
        icon: "⛓️"
      },
      {
        name: "Machine Learning",
        description: "AI/ML algorithms, neural networks, and data analysis.",
        icon: "🤖"
      },
      {
        name: "Cloud Computing",
        description: "AWS, Azure, containerization, and scalable architectures.",
        icon: "☁️"
      },
      {
        name: "Mobile Development",
        description: "React Native, Flutter, and cross-platform app development.",
        icon: "📱"
      }
    ]
  },
  contact: {
    title: "Let's Work Together",
    description: "I'm always interested in new opportunities and exciting projects. Feel free to reach out!",
    email: "ahmadfarazpz@gmail.com",
    location: "Bangalore, India",
    availability: "Available for freelance projects"
  }
};