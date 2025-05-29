import React from 'react';
import AnimatedSection from '../components/common/AnimatedSection';
import Contact from '../components/home/Contact';

const ContactPage: React.FC = () => {
  return (
    <div className="pt-20">
      <AnimatedSection>
        <div className="bg-violet-900 text-white py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-violet-200 text-lg max-w-2xl">
              Ready to start your IoT journey? Get in touch with our team of experts to discuss your project requirements.
            </p>
          </div>
        </div>
      </AnimatedSection>
      <Contact />
    </div>
  );
};

export default ContactPage;