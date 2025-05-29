import React from 'react';
import AnimatedSection from '../components/common/AnimatedSection';
import Blog from '../components/home/Blog';

const BlogPage: React.FC = () => {
  return (
    <div className="pt-20">
      <AnimatedSection>
        <div className="bg-violet-900 text-white py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog & Insights</h1>
            <p className="text-violet-200 text-lg max-w-2xl">
              Stay updated with the latest trends, technologies, and best practices in IoT and AI through our expert insights and analysis.
            </p>
          </div>
        </div>
      </AnimatedSection>
      <Blog />
    </div>
  );
};

export default BlogPage;