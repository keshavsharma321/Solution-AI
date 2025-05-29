import React from 'react';
import AnimatedSection from '../components/common/AnimatedSection';
import Clients from '../components/home/Clients';
import Management from '../components/home/Managment';

const ClientsPage: React.FC = () => {
  return (
    <div className="pt-20">
     <AnimatedSection>
  <div className="bg-violet-900 text-white py-20">
    <div className="container mx-auto px-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">Meet Our Management Team</h1>
      <p className="text-violet-200 text-lg max-w-2xl">
        Get to know the leadership behind our vision. Our management team brings deep expertise and strategic direction to guide our growth and innovation in the IoT space.
      </p>

    </div>
  </div>
</AnimatedSection>

      <Management/>
    </div>
  );
};

export default ClientsPage;