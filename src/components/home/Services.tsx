import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Cpu, Users, UserCheck, ShieldCheck, Building, MonitorSmartphone, Brain } from 'lucide-react';
import AnimatedSection from '../common/AnimatedSection';

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  onClick: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, onClick }) => {
  return (
    <div 
      className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 group hover:-translate-y-2 cursor-pointer"
      onClick={onClick}
    >
      <div className="w-16 h-16 rounded-lg bg-violet-100 flex items-center justify-center text-violet-600 mb-4 group-hover:bg-violet-600 group-hover:text-white transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Services: React.FC = () => {
  const navigate = useNavigate();

  const services = [
    {
      id: 'jarvis',
      title: 'Jarvis',
      description: 'Enterprise-grade AI assistant for workflow automation and smart decision-making.',
      icon: <Cpu className="h-8 w-8" />,
    },
    {
      id: 'mariah-ai',
      title: 'Mariah AI',
      description: 'Conversational AI platform designed to engage, convert, and assist customers .',
      icon: <Users className="h-8 w-8" />,
    },
    {
      id: 'vciso',
      title: 'IOT Solutions',
      description: 'Virtual Chief Information Security Officer services for enterprise cybersecurity .',
      icon: <ShieldCheck className="h-8 w-8" />,
    },
    {
      id: 'enterprise-ai',
      title: 'Enterprise AI',
      description: 'Bespoke AI solutions tailored to large-scale enterprise needs and systems.',
      icon: <Building className="h-8 w-8" />,
    },
    {
      id: 'desktop-ai',
      title: 'Desktop AI',
      description: 'On-device AI applications designed for high-performance local processing.',
      icon: <MonitorSmartphone className="h-8 w-8" />,
    },
    {
      id: 'other-ai-services',
      title: 'Other AI Services',
      description: 'Explore our extended AI capabilities including consulting, integration, and custom builds.',
      icon: <Brain className="h-8 w-8" />,
    },
  ];

  const handleServiceClick = (serviceId: string) => {
    navigate(`/services/${serviceId}`);
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <div className="inline-block bg-violet-100 text-violet-600 rounded-full px-4 py-1 text-sm font-medium mb-4">
              Our Services
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Advanced AI Solutions <span className="text-violet-600">for Every Business Need</span>
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600 text-lg">
              Discover how our tailored AI services can revolutionize operations, security, and customer experience.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <AnimatedSection key={service.id} className="h-full">
              <ServiceCard
                id={service.id}
                title={service.title}
                description={service.description}
                icon={service.icon}
                onClick={() => handleServiceClick(service.id)}
              />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
