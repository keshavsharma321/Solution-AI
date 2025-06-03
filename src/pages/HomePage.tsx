import React, { useEffect, useRef, useState } from 'react';
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import Projects from '../components/home/Projects';
import Clients from '../components/home/Clients';
import Blog from '../components/home/Blog';
import HeroContact from '../components/home/HeroContact';

const HomePage: React.FC = () => {
  const [showContactModal, setShowContactModal] = useState<boolean>(false);
  const modalRef = useRef<HTMLDivElement>(null);

  // Show the modal after 5 seconds and auto-close after another 5 seconds
  useEffect(() => {
    const showTimer = setTimeout(() => {
      setShowContactModal(true);

      const hideTimer = setTimeout(() => {
        setShowContactModal(false);
      }, 5000); // Auto-close after 5 seconds

      return () => clearTimeout(hideTimer);
    }, 5000); // Show modal after 5 seconds

    return () => clearTimeout(showTimer);
  }, []);

  // Close modal on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        showContactModal &&
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setShowContactModal(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showContactModal]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-violet-100 to-white">
      <Hero />
      <Services />
      <Projects isHomePage={true} />
      <Clients />
      <Blog />

      {/* Contact Modal */}
      {showContactModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div
            ref={modalRef}
            className="bg-white rounded-xl shadow-lg w-[400px]  relative overflow-y-auto p-4"
          >
            <HeroContact />
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
