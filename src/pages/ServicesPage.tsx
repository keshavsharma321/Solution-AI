import React from 'react';
import AnimatedSection from '../components/common/AnimatedSection';
import Services from '../components/home/Services';

const ServicesPage: React.FC = () => {
  return (
    <div className="pt-20">
      <AnimatedSection>
        <div className="bg-violet-900 text-white py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-violet-200 text-lg max-w-2xl">
              Discover our comprehensive range of IoT and AI solutions designed to transform your business operations and drive innovation.
            </p>
          </div>
        </div>
      </AnimatedSection>
      <Services />
    </div>
  );
};

export default ServicesPage;