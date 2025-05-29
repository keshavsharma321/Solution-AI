import React from 'react';
import { Star } from 'lucide-react';
import AnimatedSection from '../common/AnimatedSection';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Julian Woodhouse',
    role: 'CEO',
    company: 'Stack AI',
    avatar: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg',
    content: 'The IoT solution implemented by Solution AI has transformed our manufacturing process.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Madhumitta',
    role: 'CEO',
    company: 'Waisdom AI',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
    content: 'Their precision agriculture system has revolutionized our farming operations.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Amanda Chen',
    role: 'Innovation Lead',
    company: 'Future Health Network',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
    content: 'Working with Solution AI on our connected healthcare initiative has been incredible.',
    rating: 4,
  },
  {
    id: 4,
    name: 'Carlos Martinez',
    role: 'CTO',
    company: 'Eco Builders',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
    content: 'The smart building systems helped cut our energy usage by 30%.',
    rating: 5,
  },
  {
    id: 5,
    name: 'Fatima Noor',
    role: 'Operations Head',
    company: 'SmartAgri Tech',
    avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg',
    content: 'IoT data helped us make precision-based decisions for our crops.',
    rating: 5,
  },
  {
    id: 6,
    name: 'Ethan Ross',
    role: 'Digital Strategy Lead',
    company: 'InnovateCorp',
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg',
    content: 'Partnering with Solution AI has been instrumental to our transformation.',
    rating: 4,
  },
];

const renderStars = (rating: number) =>
  Array(5)
    .fill(0)
    .map((_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
      />
    ));

const Clients: React.FC = () => {
  return (
    <section id="clients" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <div className="inline-block bg-violet-100 text-violet-600 rounded-full px-4 py-1 text-sm font-medium mb-4">
              Our Clients
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted by <span className="text-violet-600">Industry Leaders</span>
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600 text-lg">
              We partner with forward-thinking organizations across industries to deliver transformative IoT solutions.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h3>
            <div className="w-20 h-1 bg-violet-600 mx-auto"></div>
          </div>
        </AnimatedSection>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <AnimatedSection>
                <div className="bg-white rounded-xl shadow-md p-6 relative h-full flex flex-col">
                  <div className="absolute ">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-violet-600 text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                        />
                      </svg>
                    </div>
                  </div>

                  <div className="flex items-center mb-4 mt-4">
                    {renderStars(testimonial.rating)}
                  </div>

                  <p className="text-gray-600 mb-6 flex-grow italic">"{testimonial.content}"</p>

                  <div className="flex items-center mt-auto">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Clients;
