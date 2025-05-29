import React from 'react';
import {  Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from "./../../../public/logo.png";

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-violet-900 text-white py-12 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <img src={logo} alt="Solution-AI Logo" className="h-10 w-auto" />
            </div>
            <p className="text-violet-200 mb-4">
              Transforming businesses through innovative IoT solutions powered by artificial intelligence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-violet-200 hover:text-white transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="text-violet-200 hover:text-white transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="text-violet-200 hover:text-white transition-colors"><Linkedin className="h-5 w-5" /></a>
              <a href="#" className="text-violet-200 hover:text-white transition-colors"><Instagram className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Quick Links & Services - side by side on mobile */}
          <div className="flex flex-row sm:space-x-24 md:hidden">
            {/* Quick Links */}
            <div className="mb-6 sm:mb-0">
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-violet-200 hover:text-white transition-colors">Home</Link></li>
                <li><Link to="/services" className="text-violet-200 hover:text-white transition-colors">Services</Link></li>
                <li><Link to="/blog" className="text-violet-200 hover:text-white transition-colors">Blog</Link></li>
                <li><Link to="/contact" className="text-violet-200 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Our Services */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Our Services</h3>
              <ul className="space-y-2">
                <li><Link to="/services/jarvis" className="text-violet-200 hover:text-white transition-colors">Jarvis</Link></li>
                <li><Link to="/services/mariah-ai" className="text-violet-200 hover:text-white transition-colors">Mariah AI</Link></li>
                <li><Link to="/services/vciso" className="text-violet-200 hover:text-white transition-colors">IOT Solutions</Link></li>
                <li><Link to="/services/enterprise-ai" className="text-violet-200 hover:text-white transition-colors">Enterprise AI</Link></li>
                <li><Link to="/services/desktop-ai" className="text-violet-200 hover:text-white transition-colors">Desktop AI</Link></li>
                <li><Link to="/services/other-ai-services" className="text-violet-200 hover:text-white transition-colors">Other AI Services</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 mr-2 mt-0.5 text-violet-300" />
                  <span className="text-violet-200">Austell, GA 30168</span>
                </li>
                <li className="flex items-center">
                  <Phone className="h-5 w-5 mr-2 text-violet-300" />
                  <span className="text-violet-200">+1 4706998973</span>
                </li>
                <li className="flex items-center">
                  <a
                    href="mailto:contact@solutionai.us?subject=Inquiry%20from%20Website&body=Hi%20SolutionAI%20Team,"
                    className="flex items-center hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Mail className="h-5 w-5 mr-2 text-violet-300" />
                    <span className="text-violet-200">contact@solutionai.us</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Desktop Quick Links */}
          <div className="hidden md:block">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-violet-200 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/services" className="text-violet-200 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/blog" className="text-violet-200 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-violet-200 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Desktop Services */}
          <div className="hidden md:block">
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services/jarvis" className="text-violet-200 hover:text-white transition-colors">Jarvis</Link></li>
              <li><Link to="/services/mariah-ai" className="text-violet-200 hover:text-white transition-colors">Mariah AI</Link></li>
              <li><Link to="/services/vciso" className="text-violet-200 hover:text-white transition-colors">IOT Solutions</Link></li>
              <li><Link to="/services/enterprise-ai" className="text-violet-200 hover:text-white transition-colors">Enterprise AI</Link></li>
              <li><Link to="/services/desktop-ai" className="text-violet-200 hover:text-white transition-colors">Desktop AI</Link></li>
              <li><Link to="/services/other-ai-services" className="text-violet-200 hover:text-white transition-colors">Other AI Services</Link></li>
            </ul>
          </div>

          {/* Desktop Contact Info */}
          <div className="hidden md:block">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 text-violet-300" />
                <span className="text-violet-200">Austell, GA 30168</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-violet-300" />
                <span className="text-violet-200">+1 4706998973</span>
              </li>
              <li className="flex items-center">
                <a
                  href="mailto:contact@solutionai.us?subject=Inquiry%20from%20Website&body=Hi%20SolutionAI%20Team,"
                  className="flex items-center hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Mail className="h-5 w-5 mr-2 text-violet-300" />
                  <span className="text-violet-200">contact@solutionai.us</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-violet-700 mt-8 pt-8 text-center text-violet-300">
          <p>&copy; {new Date().getFullYear()} Solution AI. All rights reserved.</p>
        </div>

        {/* Scroll to top button */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-violet-700 hover:bg-violet-600 text-white p-3 rounded-full shadow-lg transition-colors"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
