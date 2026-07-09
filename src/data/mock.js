export const mockData = {
  hero: {
    name: "Ahmad Faraz",
    title: "Security Researcher & Full-Stack Developer",
    typingTexts: ["full-stack products", "security research", "Web3 & crypto tools", "AI security tooling"],
    description: "I'm Pirzada Ahmad Faraz, a first-year CS student from Bangalore who builds real products — a native macOS app, payment rails, crypto wallets — and breaks them as a security researcher, hunting vulnerabilities and building the tooling to find them at scale.",
    experiences: ["Full-Stack", "Security Research", "Bug Bounty", "Web3 & Crypto", "Native macOS", "AI Tooling"],
    image: "/Profile.jpg"
  },
  about: {
    title: "About Me",
    experienceTypes: ["Full-Stack Apps", "Security Research", "Crypto DApps", "AI Tooling"],
    content: "I'm Pirzada Ahmad Faraz — most people call me Ahmad. I'm a first-year CS student from Bangalore, and I've been writing code since I was a kid. I live in two worlds: building full-stack and Web3 products, and breaking them as a security researcher.\n\nOn the build side I ship real things — a native macOS capture app, a Cardano payment gateway, a non-custodial wallet, an uptime monitor. On the security side I hunt for vulnerabilities across bug-bounty programs and responsible-disclosure targets, and I build AI-driven tooling to find them at scale.\n\nRight now I'm going deeper on offensive security, smart contracts and machine learning — and I'm always up for a hard problem.",
    stats: [
      { label: "Products shipped", value: "6+" },
      { label: "Security targets assessed", value: "70+" },
      { label: "Hackathons entered", value: "3" },
      { label: "Years writing code", value: "7+" }
    ]
  },
  projects: [
    {
      id: 1,
      title: "SwiftShot",
      description: "A native macOS menu-bar screenshot & screen-recording suite — a free, open-source take on CleanShot X. Around 12K lines of Swift with genuinely hard engineering under the hood: scrolling capture, on-device OCR, and one-click cloud sharing.",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=1200&q=80&auto=format&fit=crop",
      technologies: [
        { name: "Swift", icon: "🦅" },
        { name: "AppKit + SwiftUI", icon: "🍎" },
        { name: "ScreenCaptureKit", icon: "🎥" },
        { name: "Vision OCR", icon: "🔍" },
        { name: "Cloudflare R2", icon: "☁️" }
      ],
      features: [
        "Scrolling capture with auto frame-stitching",
        "On-device OCR & searchable history",
        "Screen / GIF recording with live annotation",
        "Auto-redaction of emails, keys & cards",
        "Self-hosted cloud sharing"
      ],
      demoLink: "https://swiftshot.online",
      codeLink: "https://github.com/pirzada-ahmadfaraz/swiftshot-mac",
      status: "Shipped"
    },
    {
      id: 2,
      title: "PayFlow",
      description: "A non-custodial Cardano payment gateway — think 'Stripe for Cardano'. Merchants create shareable payment links, each invoice gets a unique HD-derived address, and payments are detected on-chain with automatic ADA-to-stablecoin conversion. Built for the Cardano Hackathon.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&q=80&auto=format&fit=crop",
      technologies: [
        { name: "Next.js 14", icon: "⚡" },
        { name: "TypeScript", icon: "📘" },
        { name: "Supabase", icon: "🗄️" },
        { name: "MeshJS", icon: "🔗" },
        { name: "Cardano", icon: "💎" }
      ],
      features: [
        "Unique HD address per invoice (CIP-1852)",
        "On-chain payment detection via Blockfrost",
        "Automatic ADA-to-stablecoin swap (MinSwap)",
        "REST API, webhooks & hosted checkout"
      ],
      codeLink: "https://github.com/pirzada-ahmadfaraz/PayFlow",
      status: "Live · Testnet"
    },
    {
      id: 3,
      title: "Crypto Vault",
      description: "A non-custodial, client-side multi-chain web wallet for BTC, LTC and ETH. Generates and recovers BIP39 seed phrases, encrypts keys locally with AES/PBKDF2, and tracks balances and prices — keys never leave the device.",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1200&q=80&auto=format&fit=crop",
      technologies: [
        { name: "Next.js", icon: "⚡" },
        { name: "TypeScript", icon: "📘" },
        { name: "TailwindCSS", icon: "🎨" },
        { name: "ethers.js", icon: "🟣" },
        { name: "bitcoinjs-lib", icon: "🟠" }
      ],
      features: [
        "BIP39 wallet creation & recovery",
        "Client-side AES / PBKDF2 encryption",
        "Multi-chain BTC / LTC / ETH support",
        "Live prices & USD portfolio value"
      ],
      demoLink: "https://crypto-vault-project.vercel.app/",
      codeLink: "https://github.com/pirzada-ahmadfaraz/Crypto-Vault",
      status: "Completed"
    },
    {
      id: 4,
      title: "Meet Vault",
      description: "A full-stack video conferencing platform with HD WebRTC calls, screen sharing and real-time chat with reactions, replies and read-receipts — backed by a hardened Node API with rate limiting, validation and JWT auth.",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&q=80&auto=format&fit=crop",
      technologies: [
        { name: "Next.js 15", icon: "⚡" },
        { name: "WebRTC", icon: "📹" },
        { name: "Socket.io", icon: "🔌" },
        { name: "Express.js", icon: "🚀" },
        { name: "MongoDB", icon: "🍃" }
      ],
      features: [
        "HD WebRTC video conferencing",
        "Screen sharing & real-time chat",
        "Reactions, replies & read-receipts",
        "Hardened API (rate limit, Helmet, JWT)"
      ],
      codeLink: "https://github.com/pirzada-ahmadfaraz/MeetVault",
      status: "Completed"
    },
    {
      id: 5,
      title: "Pingly",
      description: "An open-source uptime & API monitoring platform. Pings endpoints on a schedule, tracks response time and uptime %, and publishes shareable public status pages — with a live dashboard and incident history.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80&auto=format&fit=crop",
      technologies: [
        { name: "React 19", icon: "⚛️" },
        { name: "Node.js", icon: "🟢" },
        { name: "Express.js", icon: "🚀" },
        { name: "Recharts", icon: "📊" },
        { name: "Vercel", icon: "▲" }
      ],
      features: [
        "Real-time uptime monitoring",
        "Shareable public status pages",
        "Response-time & incident history",
        "Multi-user auth with Google login"
      ],
      demoLink: "https://pinglyy.vercel.app/",
      codeLink: "https://github.com/pirzada-ahmadfaraz/Pingly",
      status: "Live"
    }
  ],
  security: {
    label: "Security Research",
    intro: "I hunt for real-world vulnerabilities across bug-bounty programs and responsible-disclosure targets — access-control flaws, data exposure, injection and auth bypasses — and build the tooling that finds them at scale. Everything here was discovered ethically and disclosed to the vendor.",
    stats: [
      { value: "70+", label: "Targets & programs assessed" },
      { value: "20+", label: "Vulnerability classes" },
      { value: "90K+", label: "Records secured via disclosure" },
      { value: "3", label: "Platforms · H1 · Bugcrowd · Com Olho" }
    ],
    caseStudies: [
      {
        target: "Allcargo Group",
        sector: "Logistics · Enterprise",
        severity: "Critical",
        title: "Broken authentication → 90K+ customer records",
        description: "A customer-facing API accepted invalid authorization tokens, exposing 91,000+ customer records and shipping documents. Responsibly disclosed — confirmed fixed by the vendor.",
        status: "Disclosed · Patched",
        named: true
      },
      {
        target: "EdTech ERP platform",
        sector: "Education",
        severity: "Critical",
        title: "Unauthenticated student PII, incl. national IDs",
        description: "A shared school-management API exposed student records — names, contact details and government IDs of minors — with no authentication, plus unauthenticated write/delete on academic data. Reported to the operator.",
        status: "Disclosed",
        named: false
      },
      {
        target: "Hospital HMS platform",
        sector: "Healthcare",
        severity: "Critical",
        title: "Unauthenticated patient health records",
        description: "Internal hospital-management APIs were reachable from the public internet, leaking patient PHI, clinical encounters and staff PII without any credentials. Reported for remediation.",
        status: "Disclosed",
        named: false
      },
      {
        target: "E-commerce marketplace",
        sector: "E-commerce · via HackerOne",
        severity: "High",
        title: "IDOR & SSRF chain leaking user PII",
        description: "An insecure direct object reference on an affiliate API exposed product and user data, chained with a server-side request forgery reaching internal services. Submitted through the program's platform.",
        status: "Submitted",
        named: false
      }
    ],
    vulnClasses: [
      "Broken Access Control / IDOR",
      "Sensitive Data Exposure",
      "SQL / NoSQL Injection",
      "SSRF",
      "CORS Misconfiguration",
      "Authentication Bypass",
      "JWT / OAuth Flaws",
      "Session Hijacking",
      "Hardcoded Secrets",
      "GraphQL Abuse",
      "Business Logic",
      "WAF Bypass"
    ],
    tools: [
      {
        name: "keel-security",
        tagline: "Multi-model offensive-security CLI",
        description: "An AI 'orchestra' that decomposes an authorized engagement and routes it to a swarm of frontier models — recon, enumeration, exploit-verification and P1–P4 triage — behind a hard scope gate and immutable audit log. ~15K lines of TypeScript.",
        status: "In development"
      },
      {
        name: "Fuzzing Agent",
        tagline: "AI-driven vulnerability fuzzing framework",
        description: "A modular Python toolkit with dedicated testers for CORS, GraphQL, JWT, OAuth, SAML, SSRF, SSTI, NoSQL, mass-assignment and race conditions — plus a vulnerability-chain detector and report generator.",
        status: "Internal tool"
      }
    ]
  },
  hackathons: {
    label: "Hackathons & Research",
    items: [
      {
        name: "ExoHunter",
        event: "Bharatiya Antariksh Hackathon 2026 · ISRO",
        track: "Problem #7 — AI Exoplanet Detection",
        year: "2026",
        description: "An end-to-end ML pipeline that detects periodic transit dips in noisy stellar light curves and classifies them — planet, eclipsing binary, blend or variable — with calibrated confidence and NASA-style false-positive vetting.",
        highlights: [
          "Random-Forest + dual-view CNN ensemble",
          "0.87 planet PR-AUC vs 0.39 classical baseline",
          "Streamlit app pulling live NASA MAST data"
        ],
        tech: ["Python", "PyTorch", "scikit-learn", "Astropy", "Streamlit"],
        result: "ISRO BAH 2026 submission",
        codeLink: "https://github.com/pirzada-ahmadfaraz"
      },
      {
        name: "ClearLane",
        event: "INDIA.RUNS Ideathon",
        track: "Track 3 — Everyday AI Innovator",
        year: "2026",
        description: "An anticipatory AI co-driver for Indian highway tolls that predicts a FASTag shortfall before you reach the plaza and auto-tops-up over UPI — using on-device routine mining and a proactive voice agent.",
        highlights: [
          "Next.js MVP with FASTag provider integration",
          "3D Nagel–Schreckenberg toll-flow simulator",
          "Scored 83/100 in judging review"
        ],
        tech: ["Next.js", "TypeScript", "AI Agents", "UPI"],
        result: "Ideathon submission",
        codeLink: null
      },
      {
        name: "UdyamPulse",
        event: "IDBI Innovate 2026",
        track: "Track 3 — Fintech",
        year: "2026",
        description: "An explainable MSME 'financial health card' — a single Account Aggregator consent turns bank and GST data into a 300–900 Pulse Score with SHAP explanations and early-warning risk signals for lenders.",
        highlights: [
          "Account Aggregator + GST data ingestion",
          "SHAP-explained credit scoring",
          "Early-warning risk signals"
        ],
        tech: ["AI / ML", "SHAP", "Fintech", "Account Aggregator"],
        result: "Ideathon submission",
        codeLink: null
      }
    ]
  },
  skills: {
    technical: [
      { name: "JavaScript / TypeScript", level: 90, category: "Frontend" },
      { name: "Python", level: 88, category: "Backend" },
      { name: "React / Next.js", level: 88, category: "Frontend" },
      { name: "Node.js / Express", level: 82, category: "Backend" },
      { name: "Web Security & Pentesting", level: 82, category: "Security" },
      { name: "Solidity & Web3", level: 62, category: "Blockchain" },
      { name: "Swift / macOS", level: 68, category: "Native" },
      { name: "SQL / NoSQL Databases", level: 76, category: "Data" }
    ],
    tools: [
      "Burp Suite",
      "nuclei",
      "Linux",
      "Docker",
      "Git & GitHub",
      "Playwright",
      "PyTorch",
      "Supabase",
      "Vercel",
      "Postman",
      "Figma",
      "Blockfrost"
    ]
  },
  future: {
    title: "Future Goals & Learning Path",
    currentlyLearning: [
      {
        name: "Offensive Security",
        description: "Going deeper on web & API exploitation, red-team methodology, and building AI-assisted security tooling that verifies its own findings.",
        progress: 65,
        timeframe: "Ongoing"
      },
      {
        name: "Solidity & Smart Contracts",
        description: "Building and auditing decentralized apps with Solidity, Hardhat and EVM-compatible chains — where my dev and security work meet.",
        progress: 35,
        timeframe: "Next 12 months"
      }
    ],
    futureInterests: [
      {
        name: "Smart-Contract Auditing",
        description: "Web3 security, on-chain exploits and DeFi protocol auditing.",
        icon: "⛓️"
      },
      {
        name: "Machine Learning",
        description: "Applied ML, model pipelines and data analysis.",
        icon: "🤖"
      },
      {
        name: "Cloud & Infra Security",
        description: "AWS/Azure, containers and securing scalable systems.",
        icon: "☁️"
      },
      {
        name: "Native App Development",
        description: "Swift, low-level macOS/iOS and systems programming.",
        icon: "📱"
      }
    ]
  },
  contact: {
    title: "Let's Work Together",
    description: "I'm a first-year student open to internships in software engineering and security. If you're hiring, collaborating, or just want to talk shop — reach out.",
    email: "ahmadfarazpz@gmail.com",
    location: "Bangalore, India",
    availability: "Open to internships"
  }
};
