"use client"

import type React from "react"
import { useEffect, useState } from "react"
import Button from "../common/Button"
import IoTAnimation from "../animations/IoTAnimation"

const Hero: React.FC = () => {
  const phrases = ["Next Generation AI Solutions", "Next Generation IoT Solutions"]
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length)
    }, 3000) // Change every 3 seconds
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 z-0 opacity-20">
        <IoTAnimation />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-block px-3 py-1 bg-violet-100 text-violet-800 rounded-full text-sm font-medium mb-6 animate-pulse transition-opacity duration-500 ease-in-out">
              {phrases[index]}
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Transforming Business Through <span className="text-violet-600">IoT</span> &{" "}
              <span className="text-violet-600">AI</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              We create intelligent AI Solutions as well as IoT ecosystems that leverage AI to deliver actionable
              insights, automation, and unprecedented efficiency for businesses across industries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="/services">
                <Button variant="outline" size="lg">
                  Explore Solutions
                </Button>
              </a>
              <a href="/contact">
                <Button variant="outline" className="bg-violet-700 text-white" size="lg">
                  Book a Demo
                </Button>
              </a>
            </div>
          </div>

          <div className="relative mt-8 lg:mt-0">
            {/* Video container - Made fully responsive */}
            <div className="w-full aspect-video max-w-[700px] rounded-2xl overflow-hidden relative mx-auto lg:mx-0">
              <video autoPlay muted loop playsInline className="w-full h-full object-cover">
                <source src="/hero.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Floating box: Devices Online - Responsive positioning */}
            <div className="absolute top-2 right-2 sm:top-4 sm:right-4 md:-top-6 lg:-top-10 lg:-right-4 bg-white rounded-lg shadow-lg p-3 sm:p-4 animate-float w-[120px] sm:w-[160px] z-10">
              <div className="flex items-center space-x-2">
                <div className="w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-green-400"></div>
                <span className="text-xs sm:text-sm font-medium">Devices Online</span>
              </div>
              <div className="text-xl sm:text-2xl font-bold text-gray-800 mt-1">1,457</div>
            </div>

            {/* Floating box: Data Points - Responsive positioning */}
            <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 md:-bottom-6 lg:-bottom-12 lg:-left-8 bg-white rounded-lg shadow-lg p-3 sm:p-4 animate-float-delayed w-[120px] sm:w-[160px] z-10">
              <div className="flex items-center space-x-2">
                <div className="w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-violet-500"></div>
                <span className="text-xs sm:text-sm font-medium">Data Points</span>
              </div>
              <div className="text-xl sm:text-2xl font-bold text-gray-800 mt-1">89.3M</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <a
          href="#services"
          className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md text-violet-600 animate-bounce"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  )
}

export default Hero