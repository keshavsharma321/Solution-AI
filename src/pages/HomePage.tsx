import React, { useEffect, useState } from 'react';
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import Projects from '../components/home/Projects';
import Clients from '../components/home/Clients';
import Blog from '../components/home/Blog';
import HeroContact from '../components/home/HeroContact';

const HomePage: React.FC = () => {
  const [showContactModal, setShowContactModal] = useState<boolean>(false);

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-violet-100 to-white">
      <Hero />
      <Services />
      <Projects isHomePage={true} />
      <Clients />
      <Blog />

      {/* Modal for Contact Form */}
      {showContactModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div
            className="bg-white rounded-xl shadow-lg max-w-2xl w-full relative overflow-y-auto"
            style={{ maxHeight: '80vh' }}
          >
            <HeroContact />
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
