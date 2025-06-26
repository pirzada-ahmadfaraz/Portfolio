"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Moon,
  Sun,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Calendar,
  Code,
  Palette,
  Smartphone,
  Database,
  Send,
  ChevronDown,
  Star,
  ArrowRight,
  Check,
  Heart,
  Zap,
  Sparkles,
  Terminal,
} from "lucide-react"

export default function PremiumPortfolio() {
  const [darkMode, setDarkMode] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const [typewriterText, setTypewriterText] = useState("")
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0)
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [visibleElements, setVisibleElements] = useState(new Set())

  const titles = ["Python Specialist", "Frontend Developer", "UI/UX Designer", "Creative Coder"]

  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  // Scroll detection for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Typewriter effect
  useEffect(() => {
    const currentTitle = titles[currentTitleIndex]
    let currentIndex = 0
    const interval = setInterval(() => {
      if (currentIndex <= currentTitle.length) {
        setTypewriterText(currentTitle.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(interval)
        setTimeout(() => {
          setCurrentTitleIndex((prev) => (prev + 1) % titles.length)
        }, 2000)
      }
    }, 100)

    return () => clearInterval(interval)
  }, [currentTitleIndex])

  // Intersection Observer for animations
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements((prev) => new Set([...prev, entry.target.id]))
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = document.querySelectorAll("[data-animate]")
    elements.forEach((el) => observerRef.current?.observe(el))

    return () => observerRef.current?.disconnect()
  }, [])

  const skills = [
    { name: "Python", level: 98, icon: Terminal, color: "from-blue-500 to-cyan-500" },
    { name: "TypeScript", level: 90, icon: Code, color: "from-blue-600 to-blue-400" },
    { name: "Tailwind CSS", level: 92, icon: Palette, color: "from-teal-500 to-green-500" },
    { name: "UI/UX Design", level: 85, icon: Smartphone, color: "from-purple-500 to-pink-500" },
    { name: "Mongo DB", level: 80, icon: Database, color: "from-green-500 to-emerald-500" },
    { name: "SQL", level: 88, icon: Database, color: "from-orange-500 to-red-500" },
  ]

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with advanced features including real-time inventory, payment processing, and admin dashboard.",
      image: "/placeholder.svg?height=300&width=400",
      tech: ["React", "Node.js", "MongoDB", "Stripe", "Socket.io"],
      github: "https://github.com",
      demo: "https://demo.com",
      featured: true,
    },
    {
      title: "AI-Powered Analytics Dashboard",
      description:
        "Modern analytics platform with machine learning insights, real-time data visualization, and predictive analytics.",
      image: "/placeholder.svg?height=300&width=400",
      tech: ["Next.js", "Python", "TensorFlow", "D3.js", "PostgreSQL"],
      github: "https://github.com",
      demo: "https://demo.com",
      featured: true,
    },
    {
      title: "Creative Agency Website",
      description:
        "Award-winning website for a creative agency featuring stunning animations, 3D elements, and immersive user experience.",
      image: "/placeholder.svg?height=300&width=400",
      tech: ["React", "Three.js", "GSAP", "Tailwind", "Framer Motion"],
      github: "https://github.com",
      demo: "https://demo.com",
      featured: false,
    },
    {
      title: "Mobile Banking App",
      description:
        "Secure and intuitive mobile banking application with biometric authentication and real-time transaction processing.",
      image: "/placeholder.svg?height=300&width=400",
      tech: ["React Native", "Node.js", "MongoDB", "JWT", "Stripe"],
      github: "https://github.com",
      demo: "https://demo.com",
      featured: false,
    },
  ]

  const experiences = [
    {
      type: "work",
      title: "Senior Frontend Developer",
      company: "TechCorp Inc.",
      logo: "/placeholder.svg?height=60&width=60",
      duration: "2022 - Present",
      location: "San Francisco, CA",
      achievements: [
        "Led development of customer-facing applications serving 500K+ users",
        "Improved application performance by 60% through optimization techniques",
        "Mentored team of 5 junior developers and established coding standards",
        "Implemented design system used across 12+ products",
      ],
    },
    {
      type: "work",
      title: "Frontend Developer",
      company: "InnovateLab",
      logo: "/placeholder.svg?height=60&width=60",
      duration: "2020 - 2022",
      location: "Remote",
      achievements: [
        "Built responsive web applications using React and TypeScript",
        "Collaborated with design team to create pixel-perfect implementations",
        "Integrated complex APIs and third-party services",
        "Reduced bundle size by 40% through code splitting and optimization",
      ],
    },
    {
      type: "education",
      title: "Master of Computer Science",
      company: "Stanford University",
      logo: "/placeholder.svg?height=60&width=60",
      duration: "2018 - 2020",
      location: "Stanford, CA",
      achievements: [
        "Specialized in Human-Computer Interaction and Web Technologies",
        "Graduated Summa Cum Laude with 3.9 GPA",
        "Published research on modern web development practices",
        "Teaching Assistant for Advanced Web Development course",
      ],
    },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Product Manager at TechCorp",
      image: "/placeholder.svg?height=80&width=80",
      quote:
        "Ahmad's attention to detail and technical expertise is unmatched. The applications he builds are not just functional, but truly delightful to use.",
    },
    {
      name: "Michael Chen",
      role: "CEO at StartupXYZ",
      image: "/placeholder.svg?height=80&width=80",
      quote:
        "Working with Ahmad transformed our digital presence. His ability to translate complex ideas into beautiful, intuitive interfaces is remarkable.",
    },
    {
      name: "Emily Rodriguez",
      role: "Design Director at CreativeStudio",
      image: "/placeholder.svg?height=80&width=80",
      quote:
        "Ahmad bridges the gap between design and development perfectly. He understands both the creative vision and technical implementation.",
    },
  ]

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsFormSubmitted(true)
    setTimeout(() => setIsFormSubmitted(false), 3000)
  }

  return (
    <div className={`min-h-screen transition-all duration-500 ${darkMode ? "dark" : ""}`}>
      <div className="bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 text-gray-900 dark:text-white overflow-x-hidden">
        {/* Navigation */}
        <nav
          className={`fixed top-0 w-full z-50 transition-all duration-300 ${
            isScrolled
              ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg border-b border-gray-200/20 dark:border-gray-700/20"
              : "bg-transparent"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Ahmad Faraz
              </div>
              <div className="hidden md:flex items-center space-x-8">
                {["About", "Projects", "Experience", "Contact"].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="relative text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 group"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
                  </button>
                ))}
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setDarkMode(!darkMode)}
                  className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-gray-200/50 dark:border-gray-700/50 hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all duration-300"
                >
                  {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                </Button>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10 dark:from-blue-600/20 dark:via-purple-600/20 dark:to-pink-600/20"></div>
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left space-y-8">
                <div className="space-y-4">
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                    Hi, I'm{" "}
                    <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">
                      Ahmad
                    </span>
                  </h1>
                  <div className="h-16 flex items-center justify-center lg:justify-start">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-600 dark:text-gray-300">
                      {typewriterText}
                      <span className="animate-pulse">|</span>
                    </h2>
                  </div>
                  <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">
                    Turning designs into code • Creating digital experiences that inspire and engage • Passionate about
                    clean code and beautiful interfaces
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                  <Button
                    onClick={() => scrollToSection("projects")}
                    className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    See My Work
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                  <Button
                    variant="outline"
                    className="group bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-2 border-gray-200/50 dark:border-gray-700/50 hover:bg-white/80 dark:hover:bg-gray-800/80 px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                    Download Resume
                  </Button>
                </div>
              </div>

              <div className="flex justify-center lg:justify-end">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                  <div className="relative w-80 h-80 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-2 transform group-hover:rotate-6 transition-transform duration-500">
                    <img
                      src="/images/profile.jpeg"
                      alt="Ahmad - Frontend Developer"
                      className="w-full h-full rounded-full object-cover bg-white shadow-2xl"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 rounded-full p-4 shadow-xl group-hover:animate-bounce">
                    <Sparkles className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown
              className="h-8 w-8 text-gray-400 cursor-pointer hover:text-blue-600 transition-colors duration-300"
              onClick={() => scrollToSection("about")}
            />
          </div>
        </section>

        {/* About Me Section */}
        <section id="about" className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              data-animate
              id="about-title"
              className={`text-center mb-16 transition-all duration-1000 ${
                visibleElements.has("about-title") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                About Me
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Passionate developer with a keen eye for design and a love for creating exceptional digital experiences
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div
                data-animate
                id="about-content"
                className={`space-y-6 transition-all duration-1000 delay-300 ${
                  visibleElements.has("about-content") ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                }`}
              >
                <h3 className="text-3xl font-semibold mb-6">My Journey</h3>
                <div className="space-y-4 text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                  <p>
                   I'm currently pursuing a degree in Computer Science, but my journey with code started long before college. Over the past 6–7 years, I’ve immersed myself in the world of development — from building frontend interfaces that bring ideas to life, to writing Python scripts that automate tasks and solve real problems.
                  </p>
                  <p>
                    While my current focus is Python automation, my long-term goal is to become an AI/ML engineer. I’m deeply fascinated by the potential of intelligent systems and am actively learning the math, models, and tools that power modern AI.
                  </p>
                  <p>
                    I believe in writing clean, maintainable code and creating experiences that users love. When I'm not
                    coding, you can find me exploring new design trends, contributing to open-source projects
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 mt-8">
                  {["Python Expert", "Crypto Enthusiast", "Performance Optimizer", "Team Leader"].map((tag, index) => (
                    <Badge
                      key={index}
                      className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-200 px-4 py-2 text-sm font-medium rounded-full border-0"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              <div
                data-animate
                id="about-skills"
                className={`transition-all duration-1000 delay-500 ${
                  visibleElements.has("about-skills") ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                }`}
              >
                <h3 className="text-3xl font-semibold mb-8">Skills & Expertise</h3>
                <div className="space-y-6">
                  {skills.map((skill, index) => {
                    const IconComponent = skill.icon
                    return (
                      <div key={index} className="group">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center space-x-3">
                            <div
                              className={`p-2 rounded-lg bg-gradient-to-r ${skill.color} group-hover:scale-110 transition-transform duration-300`}
                            >
                              <IconComponent className="h-5 w-5 text-white" />
                            </div>
                            <span className="font-semibold text-lg">{skill.name}</span>
                          </div>
                          <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">{skill.level}%</span>
                        </div>
                        <div className="relative h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <div
                            className={`absolute top-0 left-0 h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                            style={{
                              width: visibleElements.has("about-skills") ? `${skill.level}%` : "0%",
                            }}
                          ></div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-gray-50/50 dark:bg-gray-800/50 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              data-animate
              id="projects-title"
              className={`text-center mb-16 transition-all duration-1000 ${
                visibleElements.has("projects-title") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Featured Projects
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                A showcase of my recent work and personal projects that demonstrate my skills and creativity
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <Card
                  key={index}
                  data-animate
                  id={`project-${index}`}
                  className={`group overflow-hidden bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                    visibleElements.has(`project-${index}`) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    {project.featured && (
                      <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                        <Star className="h-4 w-4 mr-1" />
                        Featured
                      </div>
                    )}
                  </div>

                  <CardHeader className="pb-4">
                    <CardTitle className="text-2xl group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors duration-300"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex space-x-4">
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="group/btn flex-1 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-gray-200/50 dark:border-gray-700/50 hover:bg-white dark:hover:bg-gray-800 transition-all duration-300"
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4 group-hover/btn:animate-spin" />
                          Code
                        </a>
                      </Button>
                      <Button
                        size="sm"
                        asChild
                        className="group/btn flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transition-all duration-300 transform hover:scale-105"
                      >
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                          Live Demo
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Experience & Education Section */}
        <section id="experience" className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              data-animate
              id="experience-title"
              className={`text-center mb-16 transition-all duration-1000 ${
                visibleElements.has("experience-title") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Experience & Education
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                My professional journey and educational background that shaped my expertise
              </p>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-purple-600 rounded-full"></div>

              <div className="space-y-12">
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    data-animate
                    id={`experience-${index}`}
                    className={`relative transition-all duration-1000 ${
                      visibleElements.has(`experience-${index}`)
                        ? "opacity-100 translate-x-0"
                        : `opacity-0 ${index % 2 === 0 ? "-translate-x-10" : "translate-x-10"}`
                    }`}
                    style={{ transitionDelay: `${index * 300}ms` }}
                  >
                    <div className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                      <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                          <CardHeader className="pb-4">
                            <div
                              className={`flex items-center gap-4 ${index % 2 === 0 ? "flex-row-reverse" : "flex-row"}`}
                            >
                              <img
                                src={exp.logo || "/placeholder.svg"}
                                alt={exp.company}
                                className="w-12 h-12 rounded-lg object-cover bg-white shadow-md"
                              />
                              <div className={index % 2 === 0 ? "text-right" : "text-left"}>
                                <CardTitle className="text-xl">{exp.title}</CardTitle>
                                <CardDescription className="text-lg font-medium text-blue-600 dark:text-blue-400">
                                  {exp.company}
                                </CardDescription>
                              </div>
                            </div>
                            <div
                              className={`flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 ${
                                index % 2 === 0 ? "justify-end" : "justify-start"
                              }`}
                            >
                              <div className="flex items-center">
                                <Calendar className="mr-1 h-4 w-4" />
                                {exp.duration}
                              </div>
                              <div className="flex items-center">
                                <MapPin className="mr-1 h-4 w-4" />
                                {exp.location}
                              </div>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <ul className="space-y-2">
                              {exp.achievements.map((achievement, achIndex) => (
                                <li
                                  key={achIndex}
                                  className={`flex items-start ${index % 2 === 0 ? "flex-row-reverse" : "flex-row"}`}
                                >
                                  <div
                                    className={`w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 flex-shrink-0 ${
                                      index % 2 === 0 ? "ml-3" : "mr-3"
                                    }`}
                                  ></div>
                                  <span
                                    className={`text-gray-600 dark:text-gray-400 ${index % 2 === 0 ? "text-right" : "text-left"}`}
                                  >
                                    {achievement}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </CardContent>
                        </Card>
                      </div>

                      {/* Timeline Node */}
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white dark:bg-gray-800 border-4 border-blue-600 rounded-full shadow-lg">
                        <div className="absolute inset-1 bg-blue-600 rounded-full animate-pulse"></div>
                      </div>

                      <div className="w-1/2"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gray-50/50 dark:bg-gray-800/50 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              data-animate
              id="testimonials-title"
              className={`text-center mb-16 transition-all duration-1000 ${
                visibleElements.has("testimonials-title") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                What People Say
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Testimonials from clients and colleagues I've had the pleasure to work with
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card
                  key={index}
                  data-animate
                  id={`testimonial-${index}`}
                  className={`bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${
                    visibleElements.has(`testimonial-${index}`)
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <blockquote className="text-gray-600 dark:text-gray-400 mb-6 italic leading-relaxed">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="flex items-center">
                      <img
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-blue-200 dark:border-blue-800"
                      />
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              data-animate
              id="contact-title"
              className={`text-center mb-16 transition-all duration-1000 ${
                visibleElements.has("contact-title") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Let's Work Together
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Ready to bring your ideas to life? Let's discuss your next project and create something amazing together
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div
                data-animate
                id="contact-info"
                className={`space-y-8 transition-all duration-1000 delay-300 ${
                  visibleElements.has("contact-info") ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                }`}
              >
                <div>
                  <h3 className="text-3xl font-semibold mb-6">Get In Touch</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8">
                    I'm always excited to take on new challenges and collaborate with passionate people. Whether you
                    have a project in mind or just want to chat about technology, feel free to reach out.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center space-x-4 group">
                    <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">Email</div>
                      <div className="text-gray-600 dark:text-gray-400">Ahmad@example.com</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 group">
                    <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">Location</div>
                      <div className="text-gray-600 dark:text-gray-400">San Francisco, CA</div>
                    </div>
                  </div>
                </div>

                <div className="flex space-x-4 pt-4">
                  {[
                    { icon: Linkedin, href: "https://linkedin.com", color: "from-blue-600 to-blue-700" },
                    { icon: Github, href: "https://github.com", color: "from-gray-700 to-gray-800" },
                    { icon: Mail, href: "mailto:Ahmad@example.com", color: "from-red-500 to-red-600" },
                  ].map((social, index) => {
                    const IconComponent = social.icon
                    return (
                      <Button
                        key={index}
                        variant="outline"
                        size="lg"
                        asChild
                        className={`group bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-gray-200/50 dark:border-gray-700/50 hover:bg-gradient-to-r hover:${social.color} hover:text-white hover:border-transparent transition-all duration-300 transform hover:scale-110`}
                      >
                        <a href={social.href} target="_blank" rel="noopener noreferrer">
                          <IconComponent className="h-6 w-6 group-hover:animate-pulse" />
                        </a>
                      </Button>
                    )
                  })}
                </div>
              </div>

              <Card
                data-animate
                id="contact-form"
                className={`bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl transition-all duration-1000 delay-500 ${
                  visibleElements.has("contact-form") ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                }`}
              >
                <CardHeader>
                  <CardTitle className="text-2xl">Send a Message</CardTitle>
                  <CardDescription className="text-base">
                    Fill out the form below and I'll get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {isFormSubmitted ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Check className="h-8 w-8 text-green-600 dark:text-green-400" />
                      </div>
                      <h3 className="text-xl font-semibold text-green-600 dark:text-green-400 mb-2">Message Sent!</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Thank you for reaching out. I'll get back to you soon.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleFormSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="relative group">
                          <Input
                            id="name"
                            placeholder=" "
                            className="peer bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-gray-200/50 dark:border-gray-700/50 focus:border-blue-500 dark:focus:border-blue-400 transition-all duration-300"
                          />
                          <label
                            htmlFor="name"
                            className="absolute left-3 -top-2.5 bg-white dark:bg-gray-800 px-2 text-sm font-medium text-gray-600 dark:text-gray-400 transition-all duration-300 peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-600 dark:peer-focus:text-blue-400"
                          >
                            Name
                          </label>
                        </div>
                        <div className="relative group">
                          <Input
                            id="email"
                            type="email"
                            placeholder=" "
                            className="peer bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-gray-200/50 dark:border-gray-700/50 focus:border-blue-500 dark:focus:border-blue-400 transition-all duration-300"
                          />
                          <label
                            htmlFor="email"
                            className="absolute left-3 -top-2.5 bg-white dark:bg-gray-800 px-2 text-sm font-medium text-gray-600 dark:text-gray-400 transition-all duration-300 peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-600 dark:peer-focus:text-blue-400"
                          >
                            Email
                          </label>
                        </div>
                      </div>
                      <div className="relative group">
                        <Input
                          id="subject"
                          placeholder=" "
                          className="peer bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-gray-200/50 dark:border-gray-700/50 focus:border-blue-500 dark:focus:border-blue-400 transition-all duration-300"
                        />
                        <label
                          htmlFor="subject"
                          className="absolute left-3 -top-2.5 bg-white dark:bg-gray-800 px-2 text-sm font-medium text-gray-600 dark:text-gray-400 transition-all duration-300 peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-600 dark:peer-focus:text-blue-400"
                        >
                          Subject
                        </label>
                      </div>
                      <div className="relative group">
                        <Textarea
                          id="message"
                          placeholder=" "
                          rows={5}
                          className="peer bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-gray-200/50 dark:border-gray-700/50 focus:border-blue-500 dark:focus:border-blue-400 transition-all duration-300 resize-none"
                        />
                        <label
                          htmlFor="message"
                          className="absolute left-3 -top-2.5 bg-white dark:bg-gray-800 px-2 text-sm font-medium text-gray-600 dark:text-gray-400 transition-all duration-300 peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-600 dark:peer-focus:text-blue-400"
                        >
                          Message
                        </label>
                      </div>
                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
                      >
                        <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                        Send Message
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 text-white py-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                Ahmad.dev
              </div>
              <p className="text-gray-300 mb-8 text-lg">
                Crafting digital experiences • Building the future, one line of code at a time
              </p>
              <div className="flex justify-center space-x-6 mb-8">
                {[
                  { icon: Linkedin, href: "https://linkedin.com" },
                  { icon: Github, href: "https://github.com" },
                  { icon: Mail, href: "mailto:Ahmad@example.com" },
                ].map((social, index) => {
                  const IconComponent = social.icon
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-110 group"
                    >
                      <IconComponent className="h-6 w-6 group-hover:animate-pulse" />
                    </a>
                  )
                })}
              </div>
              <div className="border-t border-gray-700/50 pt-8">
                <p className="text-gray-400 flex items-center justify-center">
                  Made with <Heart className="h-4 w-4 mx-2 text-red-400 animate-pulse" /> by Ahmad • © 2024 All rights
                  reserved
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

