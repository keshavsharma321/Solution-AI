import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import AnimatedSection from '../common/AnimatedSection';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  category: string;
}

const Blog: React.FC = () => {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'The Future of Industrial IoT and AI Integration',
      excerpt: 'Explore how AI is transforming industrial IoT applications and creating new opportunities for manufacturing efficiency.',
      date: 'May 15, 2023',
      readTime: '8 min read',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'Industry Trends',
    },
    {
      id: 2,
      title: '5 Ways IoT is Revolutionizing Healthcare Delivery',
      excerpt: 'Discover how connected medical devices and remote monitoring are improving patient outcomes and reducing costs.',
      date: 'April 22, 2023',
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'Healthcare',
    },
    {
      id: 3,
      title: 'Building Secure IoT Architectures: Best Practices',
      excerpt: 'Learn the essential security measures needed to protect your IoT ecosystem from emerging threats.',
      date: 'March 10, 2023',
      readTime: '10 min read',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'Security',
    },
  ];

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <div className="inline-block bg-violet-100 text-violet-600 rounded-full px-4 py-1 text-sm font-medium mb-4">
              Our Blog
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Latest <span className="text-violet-600">Insights & News</span>
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600 text-lg">
              Stay updated with the latest trends, technologies, and best practices in the world of IoT and AI.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <AnimatedSection key={post.id}>
              <article className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-violet-600 text-white text-xs font-medium px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center text-gray-500 text-sm mb-3">
                    <div className="flex items-center mr-4">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800 hover:text-violet-600 transition-colors">
                    <a href="#">{post.title}</a>
                  </h3>
                  <p className="text-gray-600 mb-4 flex-grow">{post.excerpt}</p>
                  <a
                    href="#"
                    className="inline-flex items-center text-violet-600 hover:text-violet-700 font-medium mt-2"
                  >
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center justify-center px-6 py-3 border-2 border-violet-600 text-violet-600 font-medium rounded-lg hover:bg-violet-50 transition-colors duration-300"
          >
            View All Articles <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Blog;