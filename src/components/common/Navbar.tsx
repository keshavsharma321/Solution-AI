import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from "./../../../public/logo.png"
const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
<img src={logo} alt="Solution-AI Logo" className="h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-gray-800 hover:text-violet-600 font-medium transition-colors ${
                location.pathname === '/' ? 'text-violet-600' : ''
              }`}
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className={`text-gray-800 hover:text-violet-600 font-medium transition-colors ${
                location.pathname === '/services' ? 'text-violet-600' : ''
              }`}
            >
              Services
            </Link>
            {/* <Link 
              to="/projects" 
              className={`text-gray-800 hover:text-violet-600 font-medium transition-colors ${
                location.pathname === '/projects' ? 'text-violet-600' : ''
              }`}
            >
              About Us
            </Link> */}
            <Link 
              to="/blog" 
              className={`text-gray-800 hover:text-violet-600 font-medium transition-colors ${
                location.pathname === '/blog' ? 'text-violet-600' : ''
              }`}
            >
              Blog
            </Link>
            <Link 
              to="/clients" 
              className={`text-gray-800 hover:text-violet-600 font-medium transition-colors ${
                location.pathname === '/clients' ? 'text-violet-600' : ''
              }`}
            >
              Management
            </Link>
             <Link 
              to="/contact" 
              className="bg-violet-600 hover:bg-violet-700 text-white px-4 py-2 rounded-md font-medium transition-colors"
            >
              Book A Demo
            </Link>
            <Link 
              to="/privacy" 
              className="border-violet-600 border-2 text-violet-600 px-4 py-2 rounded-md font-medium transition-colors"
            >
              Privacy Policy
            </Link>
            <Link 
              to="/contact" 
              className="bg-violet-600 hover:bg-violet-700 text-white px-4 py-2 rounded-md font-medium transition-colors"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 hover:text-violet-600 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4 absolute left-0 right-0 mx-4">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className={`text-gray-800 hover:text-violet-600 font-medium transition-colors py-2 ${
                  location.pathname === '/' ? 'text-violet-600' : ''
                }`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/services" 
                className={`text-gray-800 hover:text-violet-600 font-medium transition-colors py-2 ${
                  location.pathname === '/services' ? 'text-violet-600' : ''
                }`}
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/projects" 
                className={`text-gray-800 hover:text-violet-600 font-medium transition-colors py-2 ${
                  location.pathname === '/projects' ? 'text-violet-600' : ''
                }`}
                onClick={() => setIsOpen(false)}
              >
                Projects
              </Link>
              <Link 
                to="/blog" 
                className={`text-gray-800 hover:text-violet-600 font-medium transition-colors py-2 ${
                  location.pathname === '/blog' ? 'text-violet-600' : ''
                }`}
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              <Link 
                to="/clients" 
                className={`text-gray-800 hover:text-violet-600 font-medium transition-colors py-2 ${
                  location.pathname === '/clients' ? 'text-violet-600' : ''
                }`}
                onClick={() => setIsOpen(false)}
              >
                Clients
              </Link>
              <Link 
                to="/contact" 
                className="bg-violet-600 hover:bg-violet-700 text-white px-4 py-2 rounded-md font-medium transition-colors text-center"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;