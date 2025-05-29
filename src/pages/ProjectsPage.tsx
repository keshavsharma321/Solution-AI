import React from 'react';
import AnimatedSection from '../components/common/AnimatedSection';
import Projects from '../components/home/Projects';

const ProjectsPage: React.FC = () => {
  return (
    <div className="pt-20">
      <AnimatedSection>
        <div className="bg-violet-900 text-white py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Projects</h1>
            <p className="text-violet-200 text-lg max-w-2xl">
              Explore our portfolio of successful IoT implementations and discover how we've helped businesses achieve their digital transformation goals.
            </p>
          </div>
        </div>
      </AnimatedSection>
      <Projects />
    </div>
  );
};

export default ProjectsPage;