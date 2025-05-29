"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { ArrowRight, ChevronLeft, ChevronRight, X } from "lucide-react"
import AnimatedSection from "../common/AnimatedSection"

interface Project {
  id: number
  title: string
  category: string
  image: string
  description: string
  details?: string
  technologies?: string[]
  outcomes?: string[]
}

interface ProjectsProps {
  isHomePage?: boolean
}

const Projects: React.FC<ProjectsProps> = ({ isHomePage = false }) => {
  const [activeCategory, setActiveCategory] = useState("all")
  const [currentSlide, setCurrentSlide] = useState(0)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const modalRef = useRef<HTMLDivElement>(null)

  const projects: Project[] = [
    {
      id: 1,
      title: "Smart Factory Automation",
      category: "industrial",
      image:
        "https://images.pexels.com/photos/4491882/pexels-photo-4491882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Implementing IoT sensors and AI analytics to optimize manufacturing processes and reduce downtime.",
      details:
        "This project involved the implementation of a comprehensive IoT solution for a manufacturing plant, resulting in a 35% reduction in unplanned downtime and a 22% increase in overall equipment effectiveness.",
      technologies: ["Industrial IoT Sensors", "Edge Computing", "Machine Learning", "Predictive Maintenance"],
      outcomes: [
        "35% reduction in downtime",
        "22% increase in OEE",
        "18% energy consumption reduction",
        "ROI achieved in 14 months",
      ],
    },
    {
      id: 2,
      title: "Connected Healthcare Monitoring",
      category: "healthcare",
      image:
        "https://images.pexels.com/photos/7108367/pexels-photo-7108367.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Remote patient monitoring system using wearable IoT devices and predictive health analytics.",
      details:
        "We developed a remote patient monitoring platform that connects wearable devices with healthcare providers, enabling real-time health tracking and early intervention for at-risk patients.",
      technologies: ["Wearable Sensors", "HIPAA-Compliant Cloud", "Real-time Analytics", "Mobile Applications"],
      outcomes: [
        "28% reduction in hospital readmissions",
        "45% improvement in medication adherence",
        "Expanded care to rural communities",
        "Improved patient satisfaction scores",
      ],
    },
    {
      id: 3,
      title: "Smart Building Management",
      category: "commercial",
      image:
        "https://images.pexels.com/photos/1738986/pexels-photo-1738986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Integrated building automation system for energy optimization and enhanced occupant comfort.",
      details:
        "Our smart building solution integrates HVAC, lighting, security, and occupancy systems into a unified platform, optimizing energy usage while improving comfort and safety for occupants.",
      technologies: ["BACnet Integration", "Occupancy Sensors", "Energy Management", "Digital Twin"],
      outcomes: [
        "31% energy savings",
        "Improved tenant satisfaction",
        "LEED certification achieved",
        "Reduced maintenance costs",
      ],
    },
    {
      id: 4,
      title: "Precision Agriculture",
      category: "agriculture",
      image:
        "https://images.pexels.com/photos/2252584/pexels-photo-2252584.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description:
        "IoT-enabled farm management system with soil sensors, automated irrigation, and crop health monitoring.",
      details:
        "This precision agriculture solution combines soil sensors, weather data, and automated irrigation systems to optimize water usage and crop yields for sustainable farming.",
      technologies: ["Soil Moisture Sensors", "Weather Integration", "Automated Irrigation", "Drone Imagery"],
      outcomes: [
        "40% water usage reduction",
        "22% yield increase",
        "Reduced fertilizer application",
        "Improved crop quality",
      ],
    },
    {
      id: 5,
      title: "Intelligent Home Ecosystem",
      category: "residential",
      image:
        "https://images.pexels.com/photos/3933025/pexels-photo-3933025.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Comprehensive smart home solution with voice control, energy management, and security integration.",
      details:
        "We created a fully integrated smart home ecosystem that combines security, energy management, entertainment, and convenience features into a seamless user experience.",
      technologies: ["Voice Control", "Energy Monitoring", "Security Integration", "Mobile App Control"],
      outcomes: [
        "25% energy savings",
        "Enhanced home security",
        "Improved accessibility",
        "Simplified home management",
      ],
    },
    {
      id: 6,
      title: "Urban Traffic Optimization",
      category: "smart-city",
      image:
        "https://images.pexels.com/photos/1486222/pexels-photo-1486222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "AI-driven traffic management system using connected sensors to reduce congestion and improve flow.",
      details:
        "Our smart city traffic solution uses a network of sensors and AI algorithms to optimize traffic light timing, reduce congestion, and improve emergency vehicle response times.",
      technologies: ["Traffic Sensors", "AI Algorithms", "Edge Computing", "Emergency Vehicle Prioritization"],
      outcomes: [
        "27% reduction in commute times",
        "Decreased emissions",
        "Improved emergency response",
        "Enhanced pedestrian safety",
      ],
    },
  ]

  const categories = [
    { value: "all", label: "All Projects" },
    { value: "industrial", label: "Industrial" },
    { value: "healthcare", label: "Healthcare" },
    { value: "commercial", label: "Commercial" },
    { value: "residential", label: "Residential" },
    { value: "smart-city", label: "Smart City" },
    { value: "agriculture", label: "Agriculture" },
  ]

  const filteredProjects =
    activeCategory === "all" ? projects : projects.filter((project) => project.category === activeCategory)

  useEffect(() => {
    if (isHomePage) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % filteredProjects.length)
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [filteredProjects.length, isHomePage])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsModalOpen(false)
      }
    }

    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        setIsModalOpen(false)
      }
    }

    if (isModalOpen) {
      document.addEventListener("keydown", handleEscape)
      document.addEventListener("mousedown", handleClickOutside)
      // Prevent scrolling when modal is open
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.removeEventListener("mousedown", handleClickOutside)
      // Restore scrolling when modal is closed
      document.body.style.overflow = ""
    }
  }, [isModalOpen])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % filteredProjects.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length)
  }

  const openProjectModal = (project: Project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-block bg-violet-100 text-violet-600 rounded-full px-3 py-1 text-xs sm:text-sm font-medium mb-3 sm:mb-4">
              Our Projects
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Recent <span className="text-violet-600">Success Stories</span>
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600 text-base sm:text-lg">
              Explore our portfolio of innovative IoT projects that have delivered tangible results across various
              industries.
            </p>
          </div>
        </AnimatedSection>

        {!isHomePage && (
          <AnimatedSection>
            <div className="flex flex-wrap justify-center gap-2 mb-8 sm:mb-12 overflow-x-auto pb-2">
              {categories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => setActiveCategory(category.value)}
                  className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-colors ${
                    activeCategory === category.value
                      ? "bg-violet-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </AnimatedSection>
        )}

        {isHomePage ? (
          <AnimatedSection>
            <div className="relative">
              <div className="overflow-hidden rounded-xl sm:rounded-2xl">
                <div
                  className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] transition-transform duration-500 ease-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  <div className="absolute flex" style={{ width: `${filteredProjects.length * 100}%` }}>
                    {filteredProjects.map((project, index) => (
                      <div key={project.id} className="relative" style={{ width: `${100 / filteredProjects.length}%` }}>
                        <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
                          <img
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
                            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 text-white">
                              <span className="inline-block bg-violet-600 text-white text-xs sm:text-sm font-medium px-2 sm:px-3 py-0.5 sm:py-1 rounded-full mb-2 sm:mb-4">
                                {categories.find((cat) => cat.value === project.category)?.label || project.category}
                              </span>
                              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-4">
                                {project.title}
                              </h3>
                              <p className="text-sm sm:text-base md:text-lg text-gray-200 mb-4 sm:mb-6 line-clamp-2 sm:line-clamp-3">
                                {project.description}
                              </p>
                              <button
                                onClick={() => openProjectModal(project)}
                                className="inline-flex items-center bg-white text-violet-600 hover:bg-violet-50 px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-colors text-sm sm:text-base"
                              >
                                View Case Study <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <button
                onClick={prevSlide}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-violet-600 p-2 sm:p-3 rounded-full shadow-lg backdrop-blur-sm transition-all"
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-violet-600 p-2 sm:p-3 rounded-full shadow-lg backdrop-blur-sm transition-all"
                aria-label="Next slide"
              >
                <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6" />
              </button>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2">
                {filteredProjects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${
                      currentSlide === index ? "bg-white scale-125" : "bg-white/50"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </AnimatedSection>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {filteredProjects.map((project) => (
              <AnimatedSection key={project.id}>
                <div className="bg-white rounded-lg sm:rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group h-full flex flex-col">
                  <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <span className="text-xs font-medium bg-violet-600 px-2 py-0.5 rounded capitalize">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-4 sm:p-6 flex flex-col flex-grow">
                    <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800">{project.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm sm:text-base flex-grow">{project.description}</p>
                    <button
                      onClick={() => openProjectModal(project)}
                      className="inline-flex items-center text-violet-600 hover:text-violet-700 font-medium text-sm sm:text-base"
                    >
                      View Case Study <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                    </button>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        )}
      </div>

      {/* Custom Modal using Tailwind CSS */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div
            ref={modalRef}
            className="bg-white rounded-xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-300"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            {selectedProject && (
              <>
                <div className="relative">
                  <div className="relative h-48 sm:h-64 md:h-72 w-full overflow-hidden">
                    <img
                      src={selectedProject.image || "/placeholder.svg"}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-4 sm:p-6">
                      <span className="inline-block bg-violet-600 text-white text-xs rounded-full px-2 py-1 mb-2">
                        {categories.find((cat) => cat.value === selectedProject.category)?.label ||
                          selectedProject.category}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="absolute top-3 right-3 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
                    aria-label="Close modal"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <div className="p-4 sm:p-6 md:p-8">
                  <h2 id="modal-title" className="text-2xl sm:text-3xl font-bold text-gray-900">
                    {selectedProject.title}
                  </h2>
                  <p className="text-base sm:text-lg text-gray-700 mt-2 mb-6">{selectedProject.description}</p>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold mb-3 text-gray-900">Project Overview</h3>
                      <p className="text-gray-700">{selectedProject.details}</p>
                    </div>

                    {selectedProject.technologies && (
                      <div>
                        <h3 className="text-lg sm:text-xl font-semibold mb-3 text-gray-900">Technologies Used</h3>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.technologies.map((tech, index) => (
                            <span key={index} className="bg-violet-100 text-violet-700 px-3 py-1 rounded-full text-sm">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {selectedProject.outcomes && (
                      <div>
                        <h3 className="text-lg sm:text-xl font-semibold mb-3 text-gray-900">Key Outcomes</h3>
                        <ul className="list-disc pl-5 space-y-1 text-gray-700">
                          {selectedProject.outcomes.map((outcome, index) => (
                            <li key={index}>{outcome}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="pt-4 flex justify-end">
                      <button
                        onClick={() => setIsModalOpen(false)}
                        className="bg-violet-600 hover:bg-violet-700 text-white px-4 py-2 rounded-lg transition-colors"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  )
}

export default Projects
